import rainbow from "./rainbow";

it("can be subscribed to", () => {
    const valuesEmitted = new Promise((resolve, reject) => {
        const buffer = [];

        const subscription = rainbow.subscribe({
            next(value) {
                buffer.push(value);
            },

            complete() {
                resolve(buffer);
            },

            error(err) {
                reject(err);
            }
        });
    });

    expect(valuesEmitted).resolves.toEqual(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);
});

xit("can be traversed with forEach", () => {
    rainbow.forEach(value => {
    });
});
