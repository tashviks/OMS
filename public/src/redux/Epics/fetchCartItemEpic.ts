import { fetchCartItemsSuccess , fetchCartItemsFailure} from './../action';
import { FETCH_CART_ITEMS } from './../constants';
import { ofType } from "redux-observable";
import {catchError , map , mergeMap} from 'rxjs/operators';
import { from, of } from 'rxjs';
export const fetchCartItemEpic = (action$ : any) => action$.pipe(
    ofType(FETCH_CART_ITEMS),
    mergeMap(() =>
        from(fetch(`http://localhost:8080/GetCartItem?id=1`)).pipe(
          mergeMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          map(data => fetchCartItemsSuccess(data)),
          catchError(error => of(fetchCartItemsFailure(error.message)))
        )
      )
);
