import { BaseModel } from "../base.model";

export class SeasonModel extends BaseModel {
    end: number;
    start: number;
    title: string;

    constructor(id: number = 0, end: number, start: number, title: string) {
        super(id);

        this.end = end;
        this.start = start;
        this.title = title;
    }

    stringify(): string {
        return JSON.stringify({
            _id:    this.id,
            end: this.end,
            start: this.start,
            title:  this.title
        });
    }
}