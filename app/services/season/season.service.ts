import { Injectable }       from "@angular/core";
import { Http,
            Response,
            Headers,
            URLSearchParams }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BaseService }      from "../base.service";
import { Configuration }    from "../util/configuration";
import { BaseModel }        from "../../models/base.model";
import { SeasonModel }        from "../../models/season/season.model";

@Injectable()
export class SeasonService extends BaseService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        super(new Configuration());

        this.actionUrl = this.configuration.serverWithApiUrl + 'season';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    add(baseModel: BaseModel): Observable<BaseModel>  {
        let toAdd = (<SeasonModel>baseModel).stringify();
 
        return this.http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <SeasonModel>response.json())
            .catch(this.handleError);
    }

    getAll(): Observable<Array<BaseModel>> {
        return this.http.get(this.actionUrl)
            .map((response: Response) => <Array<SeasonModel>>response.json())
            .catch(this.handleError);
    }

    getById(id: number): Observable<BaseModel> {
        let params: URLSearchParams = new URLSearchParams();

        params.set('_id', String(id));

        return this.http.get(this.actionUrl + '/id', {'search': params})
            .map((response: Response) => <SeasonModel>response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}