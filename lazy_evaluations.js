class Enumerable {
	constructor(collection, operations) {
		this.collection = collection;
		this.operations = operations || [];
	}

	build(fn) {
		return new Enumerable(this.collection.slice(), this.operations.concat(fn));
	}

	select(fn) {
		return this.build(coll => coll.map(fn));
	}

	orderBy(fn, direction = 'asc') {
		const compare = (a, b) => {
			const a1 = fn(a);
			const b1 = fn(b);

			const compareRes = direction === 'asc' ? 1 : -1;

			if (a1 > b1) {
				return compareRes;
			} else if (b1 > a1) {
				return - compareRes;
			}

			return 0;
		};
		return this.build(coll => coll.sort(compare));
	}

	where(fn) {
		return this.build(coll => coll.filter(fn));
	}

	toArray() {
		return this.operations.reduce((acc, fn) => fn(acc), this.collection);
	}
}

export default Enumerable;