import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  public CEPs;
constructor(
  private http: HttpClient
) { }

  // tslint:disable-next-line: typedef
  getCeps(CepKey): any {
    /*
    http://api-cep-node.herokuapp.com/api/v1/cep/
    http://localhost:10000/api/v1/cep/
    */
   this.http.get<any>('http://localhost:10000/api/v1/cep/' + CepKey.value).subscribe(
    data => {return data });
  }

}
