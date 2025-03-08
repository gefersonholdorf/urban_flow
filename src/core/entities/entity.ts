import { UniqueIdEntity } from "./unique-id-entity";

export abstract class Entity<Props> {

    private _props: Props
    private _id: UniqueIdEntity

    get props() {
        return this._props
    }

    get id() {
        return this._id
    }

    constructor(props: Props, id?: string) {
        this._id = new UniqueIdEntity(id) ?? new  UniqueIdEntity()
        this._props = props
    }
}