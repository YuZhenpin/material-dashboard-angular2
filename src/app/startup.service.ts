import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { timeout } from 'rxjs/operators';
import { Group } from './group'
import { ApiService } from './api.service'

@Injectable()
export class StartupService {

    private _startupData: Group;

    constructor(private api: ApiService) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {
        this._startupData = null;
        return new Promise((resolve, reject) => {
            this.api.getGroup()
            .subscribe((res: any) => {
                this._startupData = res;
                console.log("data loaded.")
                resolve(this._startupData);
            }, err => {
            console.log(err);
            });
        })
    }

    get startupData(): Group {
        return this._startupData;
    }
}
