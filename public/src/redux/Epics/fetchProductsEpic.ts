import { fetchProductsFailure , fetchProductsSuccess } from './../action';
import { FETCH_PRODUCTS } from './../constants';
import { ofType } from "redux-observable";
import {catchError , map , mergeMap} from 'rxjs/operators';
import { from, of } from 'rxjs';
interface FetchProductsAction {
  type: string;
  payload?: {
    offset: number;
  };
}
export const fetchProductEpic = (action$ : any) => action$.pipe(
  ofType(FETCH_PRODUCTS),
  mergeMap((action: FetchProductsAction) => {
    if (action.payload) {
      console.log('Action has payload:', action.payload.offset);
      const { offset } = action.payload;
      return from(fetch(`https://merry-normally-panda.ngrok-free.app/GetProducts?offset=${offset}`).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // sort the respons in ascending order of the id before returning 
        return response.json().then(data => {
          data.sort((a: any, b: any) => a.ID - b.ID);
          return data;
        });
      })).pipe(
        map(data => fetchProductsSuccess(data)),
        catchError(error => of(fetchProductsFailure(error.message)))
      );
    } else {
      console.log('Action does not have payload');
      return of(fetchProductsFailure('Action does not have payload'));
    }
    
  })
);
