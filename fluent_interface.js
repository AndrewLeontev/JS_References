class Enumerable {
	constructor(collection) {
		this.collection = collection;
	}

	select(fn) {
		this.collection = this.collection.map(fn);
		return this;
	}

	orderBy(fn, direction = 'asc') {
		const compare = (a, b) => {
			const a1 = fn(a);
			const b1 = fn(b);

			const compareRes = direction === 'asc' ? 1 : -1;

			if (a1 > b1) {
				return compareRes;
			} else if (b1 > a1) {
				return -compareRes;
			}

			return 0;
		};
		this.collection.sort(compare);
		return this;
	}

	where(fn) {
		this.collection = this.collection.filter(fn);
		return this;
	}

	toArray() {
		return this.collection.slice();
	}
}