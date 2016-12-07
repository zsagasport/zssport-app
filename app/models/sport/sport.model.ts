import { BaseModel } from "../base.model";

export class SportModel extends BaseModel {
    title: string;

    stringify(): string {
        return JSON.stringify({
            _id:    this.id,
            title:  this.title
        });
    }
}