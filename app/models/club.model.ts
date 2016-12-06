import { BaseModel } from "./base.model";

export class ClubModel extends BaseModel {
    title: string;

    constructor(id: number = 0, title: string) {
        super(id);

        this.title = title;
    }

    stringify(): string {
        return JSON.stringify({
            _id:    this.id,
            title:  this.title
        });
    }
}