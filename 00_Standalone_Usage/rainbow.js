import Observable from "zen-observable";

export default new Observable(observer => {
    observer.next("red");
    observer.next("orange");
    observer.next("yellow");
    observer.next("green");
    observer.next("blue");
    observer.next("indigo");
    observer.next("violet");
    observer.complete();
});
