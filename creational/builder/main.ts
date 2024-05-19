class HotDog {
    constructor(
        public bread: string,
        public ketchup?: boolean,
        public mustard?: boolean,
        public chillies?: boolean
    ) {}

    addKetchup() {
        this.ketchup = true;
        return this;
    }

    addMustard() {
        this.mustard = true;
        return this;
    }

    addChillies() {
        this.chillies = true;
        return this;
    }
}

const myMeal = new HotDog('everything')

myMeal.addChillies().addKetchup().addMustard();