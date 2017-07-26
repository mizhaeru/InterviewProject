import { Component } from '@angular/core';
import { CRUDAssetDetailsService } from './CRUDAssetDetails.service';
import { IAssets } from './interfaces';


@Component({
    selector: 'child-component',
    templateUrl: './app.componentList.html'
})


export class AppComponentList {
    title = 'appList';
    assets: IAssets[] = [];

    constructor(private CRUDAssetDetailsService: CRUDAssetDetailsService) { }


    ngOnInit() {
        this.CRUDAssetDetailsService.getAllAssetDetailData().subscribe((data: IAssets[]) => { this.assets = data; console.log(this.assets) });
        //(response) => console.log(response),
        //(error) => console.log(error)
    }
}