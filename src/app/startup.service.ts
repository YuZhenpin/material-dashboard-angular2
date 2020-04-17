import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { timeout } from 'rxjs/operators';

@Injectable()
export class StartupService {

    private _startupData: any;

    constructor(private http: Http) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {
        this._startupData = null;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("load data ...")
                this._startupData = "hahaha";
                resolve(this._startupData);
              }, 1000)
        })
    }

    get startupData(): any {
        return this._startupData;
    }
}
