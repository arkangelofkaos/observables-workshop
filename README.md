# Observables Workshop

This is a training dojo adapted set up by https://github.com/araqnid for the Zen Obserable library: https://github.com/zenparsing/zen-observable

## Exercises

### Standalone usage

* Create an observable to emit the rainbow colours, and subscribe to it to print them out
  * Passing an object to subscription
  * Passing just functions to subscription
* Observable.of() emits a sequence of values
* Observable.forEach() as an alternative
* Write an Observable to make a delay
* Write an Observable to output values at a fixed rate


### Using Observables instead of callbacks
* Given a simple callback-based API (e.g. nanoajax), wrap it up as an Observable
* The same with an API that takes onSuccess and onError callbacks


### Composing Observables
* Wrap an Observable in another Observable to transform its output
  * Simple transforms are simple, subscription is container’s unsubscribe
* Use the .map method
* Use the .filter method
* Write an Observable to emit the values of other Observables in turn
  * Use the .concat method
* Write an Observable to propagate values from an underlying Observable at a fixed rate (auto-refresh)
* Zen-observable provides some combining functions: merge, combineLatest, zip
  * Should have all the pieces (delay, concat) now to easily demonstrate what these do