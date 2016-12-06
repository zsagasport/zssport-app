import { Observable }   from 'rxjs/Observable';

import { BaseModel } from "../../models/base.model";

export interface Service {
    add(baseMode: BaseModel): Observable<BaseModel>;

    getById(id: number): Observable<BaseModel>;

    getAll(): Observable<Array<BaseModel>>;
}