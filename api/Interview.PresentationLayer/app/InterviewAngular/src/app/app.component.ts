
import { Component } from '@angular/core';
import { CRUDAssetDetailsService } from './CRUDAssetDetails.service';
import { IAssets } from './interfaces';
import { IDetails} from './IDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'app';
    assets: IAssets[] = [];
    assetDetail: IDetails = {} as IDetails;
    constructor(private CRUDAssetDetailsService: CRUDAssetDetailsService) { }

    onSave() {
        this.CRUDAssetDetailsService.postAssetDetail(this.assetDetail).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onGetAssetDetailId() {
        this.CRUDAssetDetailsService.getAssetDetailIdData(this.assetDetail).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    onDelete() {
        this.CRUDAssetDetailsService.deleteAssetDetailIdData(this.assetDetail).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        ); 
    }

    onPut() {
        console.log(this.assetDetail);
        this.CRUDAssetDetailsService.putAssetDetail(this.assetDetail).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }
}
