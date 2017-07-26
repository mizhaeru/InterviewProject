import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IDetails } from './IDetails';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CRUDAssetDetailsService {
    private url: string = 'http://localhost:63477/api/AssetDetails/';

    constructor(private http: Http) { }

    postAssetDetail(data: IDetails) {
        

        let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
        let options = new RequestOptions({ headers: headers });
        data.detailsName = "Test";
        data.fkAsset = 1;
        console.log(data);
        return this.http.post(this.url + 'postassetdetails', data,options).map((resp: Response) => resp.json())
            .catch(this.handleError);


    }

    getAllAssetDetailData() {
        return this.http.get(this.url + 'getallassetDetails').map((resp: Response) => resp.json())
            .catch(this.handleError);
;
    }

    getAssetDetailIdData(data: IDetails) {
        return this.http.get(this.url + 'getassetdetailId/' + data.id).map((resp: Response) => resp.json())
            .catch(this.handleError);
        
    }

    deleteAssetDetailIdData(data: IDetails) {
  

        return this.http.delete(this.url + 'deleteassetdetail/' + data.id).map((resp: Response) => resp.json())
            .catch(this.handleError);
        
    }

    putAssetDetail(data: IDetails) {
        data.detailsName ="I changed because of PUT!"
        return this.http.put(this.url + 'putsetdetails', data).map((resp: Response) => resp.json()).catch(this.handleError);



    }


    


    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}