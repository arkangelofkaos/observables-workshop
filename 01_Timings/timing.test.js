import "regenerator-runtime";

function createDelayedObservable(delayMilliseconds) {
    // TODO("Create an observable which delays completion by the given delayMilliseconds - see git log for a hint!")
}

xit("will delay completion by the given milliseconds", async () => {
    let specifiedDelay = 500;

    const started = new Date();
    await createDelayedObservable(specifiedDelay).forEach(forceObservableToCompleteViaForEach => {
    });
    const ended = new Date();
    const actualDelay = ended.getTime() - started.getTime();

    return expect(actualDelay).toBeGreaterThan(specifiedDelay);
});

function createFixedRateObservable(rateMilliseconds) {
    // TODO("Create an observable which outputs values every rateMilliseconds - see git log for a hint!")
}

xit("will emit numbers every 500 milliseconds", async () => {
    const desiredNumberOfValues = 2;

    const started = new Date();
    const regularValuesEmitted = await new Promise((resolve, reject) => {
        const buffer = [];

        createFixedRateObservable(500).subscribe(
            (value) => {
                // TODO("Add values to the buffer and resolve the promise once we have the desiredNumberOfValues")
            });
    });
    const ended = new Date();
    const actualDelay = ended.getTime() - started.getTime();

    expect(regularValuesEmitted.length).toEqual(desiredNumberOfValues);
    expect(actualDelay).toBeGreaterThan(1000);
});