import { BaseModel } from "../base.model";

export class ClubModel extends BaseModel {
    country: string;
    
    title: string;

    constructor(id: number = 0, country: string, title: string) {
        super(id);

        this.country = country;
        this.title = title;
    }

    stringify(): string {
        return JSON.stringify({
            _id:    this.id,
            country: this.country,
            title:  this.title
        });
    }
}