import { displayLog } from './utils';
import { fromEvent } from "rxjs";
import { mapTo, map, filter } from "rxjs/operators";

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        mapTo('CLICK')
    );
    const click$_2 = fromEvent(grid, 'click').pipe(
        map(val => [
            Math.floor(val.offsetX / 50), 
            Math.floor(val.offsetY / 50)
        ]),
        filter( val => (val[0] + val[1]) % 2 != 0 )
    );
    const suscription = click$.subscribe(data => displayLog(data));
    const suscription_2 = click$_2.subscribe(data_2 => displayLog(data_2));


    /** end coding */
}