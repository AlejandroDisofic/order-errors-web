import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IOrderOdooOracleError } from 'src/app/core/models/order-odoo-oracle-errors.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderOdooOracleErrorsService {

  constructor(
    private _http: HttpClient
  ) { }

  public getOrderErrors(): Observable<IOrderOdooOracleError[]> {
    return this._http.get(`${environment.hostApi}/errors_odoo`).pipe(
      map((response:any) => {
          return response;
      })
      // catchError((errorRes: HttpErrorResponse) => {
      //   let errorMessage = 'Ha ocurrido un error desconocido.';
      //   return throwError(new Error(errorMessage));
      // })
    )
  }
}
