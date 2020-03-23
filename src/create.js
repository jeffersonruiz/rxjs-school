import { displayLog } from './utils';
import { Observable } from "rxjs";

export default () => {
    /** start coding */

    const hello = Observable.create(function(obsrver){
        obsrver.next("Hello");
        setTimeout(() => {
            obsrver.next("World");
        }, 2000);
    });

    const subscribe = hello.subscribe( evt => displayLog(evt));

    /** end coding */
}