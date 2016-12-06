import { Observable }       from 'rxjs/Observable';

import { Service }          from "./interfaces/service";

import { Configuration }    from "./util/configuration";

import { BaseModel }        from "../models/base.model";

export abstract class BaseService implements Service{
    constructor(public configuration: Configuration) {}

    abstract add(baseMode: BaseModel): Observable<BaseModel>;

    abstract getById(id: number): Observable<BaseModel>;

    abstract getAll(): Observable<Array<BaseModel>>;
}