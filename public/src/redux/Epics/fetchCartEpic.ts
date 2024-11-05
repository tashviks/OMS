import { fetchCartSuccess , fetchCartFailure} from './../action';
import { FETCH_CART } from './../constants';
import { ofType } from "redux-observable";
import {catchError , map , mergeMap} from 'rxjs/operators';
import { from, of } from 'rxjs';

export const fetchCartEpic = (action$ : any) => action$.pipe(
    ofType(FETCH_CART),
    mergeMap(() =>
        from(fetch('http://localhost:8080/GetCart?id=1')).pipe(
          mergeMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          map(data => fetchCartSuccess(data)),
          catchError(error => of(fetchCartFailure(error.message)))
        )
      )
);
