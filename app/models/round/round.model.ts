import { BaseModel } from "../base.model";

export class RoundModel extends BaseModel {
    num: number;

    stringify(): string {
        return JSON.stringify({
            _id: this.id,
            num: this.num
        });
    }
}