class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speeds ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");