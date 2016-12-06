import { Model } from "./interfaces/model";

export abstract class BaseModel implements Model {
    id: number;

    constructor(id: number) {
        if (id) {
            this.id = id;
        }
    }

    abstract stringify(): string;
}