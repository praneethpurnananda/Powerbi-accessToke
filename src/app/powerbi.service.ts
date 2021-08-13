import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerbiService {

  constructor(private _http: HttpClient) { }

  getAccessToken(body:any){
    return this._http.post('https://login.windows.net/93f5baf9-414a-4f1b-88bc-33f3013923d7/oauth2/token', body, {
        observe: 'body'
    });
  }

}
