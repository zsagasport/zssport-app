import { Injectable } from '@angular/core';
 
@Injectable()
export class Configuration {
    public server: string = "http://localhost:8888";
    public apiUrl: string = "/";
    public serverWithApiUrl = this.server + this.apiUrl;
}