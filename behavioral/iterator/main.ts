function range(start: number, end: number, step = 1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if(start < end) {
                start = start + step;
                return { value: start, done: false}
            }

            return { value: end, done: true}
        }        
    }
}

for(const n of range(0, 100, 5)) {
    console.log(n);  // 5, 10, 15, 20, .... 100
}