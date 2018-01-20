class Enumerable {
	constructor(collection) {
		this.collection = collection;
	}

	select(fn) {
		const mapped = this.collection.map(fn);
		return new Enumerable(mapped);
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
		const sorted = this.collection.slice().sort(compare);
		return new Enumerable(result);
	}

	where(fn) {
		const filtered = this.collection.filter(fn);
		return new Enumerable(filtered);
	}

	toArray() {
		return this.collection;
	}
}

export default Enumerable;