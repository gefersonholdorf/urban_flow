import { Entity } from "src/core/entities/entity";
import type { UniqueIdEntity } from "src/core/entities/unique-id-entity";

export interface BusStopProps {
    id?: UniqueIdEntity
    name: string
    location: Location[]
}

export class BusStop extends Entity<BusStopProps> {
    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }
}