import { fetchProductsFailure , fetchProductsSuccess } from './../action';
import { FETCH_PRODUCTS } from './../constants';
import { ofType } from "redux-observable";
import {catchError , map , mergeMap} from 'rxjs/operators';
import { from, of } from 'rxjs';

export const fetchProductEpic = (action$ : any) => action$.pipe(
    ofType(FETCH_PRODUCTS),
    mergeMap(() =>
        from(fetch('http://localhost:8080/GetProducts')).pipe(
          mergeMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          map(data => fetchProductsSuccess(data)),
          catchError(error => of(fetchProductsFailure(error.message)))
        )
      )
);
