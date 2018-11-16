import Observable from "zen-observable";
import "regenerator-runtime";

function createDelayedObservable(delayMilliseconds) {
    return new Observable(observer => {
            // TODO("Create an observable which delays completion by the given delayMilliseconds")
        }
    );
}

it("will delay completion by the given milliseconds", async () => {
    let specifiedDelay = 500;

    const started = new Date();
    await createDelayedObservable(specifiedDelay).forEach(something => {
    });
    const ended = new Date();
    const actualDelay = ended.getTime() - started.getTime();

    return expect(actualDelay).toBeGreaterThan(specifiedDelay);
});