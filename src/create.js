import { displayLog } from './utils';
import { from } from "rxjs";

export default () => {
    /** start coding */

    const myArray = [1, 2, 3, 4, 5];
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('Hello Word');
    }, 2000));

    const observable = from(myPromise);
    const subsciption = observable.subscribe(val => displayLog(val));

    /** end coding */
}