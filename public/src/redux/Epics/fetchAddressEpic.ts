import { fetchAddressSuccess , fetchAddressFailure} from './../action';
import { FETCH_ADDRESS } from './../constants';
import { ofType } from "redux-observable";
import {catchError , map , mergeMap} from 'rxjs/operators';
import { from, of } from 'rxjs';

export const fetchAddressEpic = (action$ : any) => action$.pipe(
    ofType(FETCH_ADDRESS),
    mergeMap(() =>
        from(fetch('https://merry-normally-panda.ngrok-free.app/GetAddress?user_id=1')).pipe(
          mergeMap(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          }),
          map(data => fetchAddressSuccess(data)),
          catchError(error => of(fetchAddressFailure(error.message)))
        )
      )
);
