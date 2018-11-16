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
                TODO("Implement the next method on this subscription object, so that the values end up in the buffer");
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
