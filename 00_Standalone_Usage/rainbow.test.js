import Observable from "zen-observable";

const rainbow = new Observable(observer => {
    observer.next("red");
    observer.next("orange");
    observer.next("yellow");
    observer.next("green");
    observer.next("blue");
    observer.next("indigo");
    observer.next("violet");
    observer.complete();
});

it("subscribe using an object", () => {
    const valuesEmitted = new Promise((resolve, reject) => {
        const buffer = [];

        rainbow.subscribe({
            next(value) {
                // TODO("Implement the next method on this subscription object, so that the values end up in the buffer");
            },

            complete() {
                resolve(buffer);
            },

            error(err) {
                reject(err);
            }
        });
    });

    return expect(valuesEmitted).resolves.toEqual(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
});

it("subscribe using functions", () => {
    const valuesEmitted = new Promise((resolve, reject) => {
        const buffer = [];

        rainbow.subscribe(
            (value) => {
                // TODO("Implement the next method, so that values end up in the buffer")
            },
            (error) => {
                // TODO("Implement the error function")
            },
            () => {
                // TODO("Implement the complete function, so that the Promise resolves to the buffer")
            }
        );
    });

    return expect(valuesEmitted).resolves.toEqual(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
});

it("use Observable.of and observable.forEach methods", () => {
    const observableOfRainbow = Observable.of("TODO", "complete this so that it emits the right rainbow values");

    const buffer = [];
    const valuesEmitted =
        observableOfRainbow.forEach(value => {
            // TODO("Implement the forEach method so that values end up in the buffer")
        }).then(() => buffer);

    return expect(valuesEmitted).resolves.toEqual(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
});