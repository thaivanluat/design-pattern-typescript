const original = { name: "Dave" }

const reactive = new Proxy(original, {
    get(target, key) {
        console.log('Tracking: ', key);
        return target[key];
    },

    set(target, key, value) {
        console.log('updatung UI ...');
        return Reflect.set(target, key, value);
    }
})

reactive.name // logs 'Tracking name'

reactive.name = 'Peter'  // logs 'updating UI ...'