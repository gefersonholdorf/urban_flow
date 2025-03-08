import { Entity } from "src/core/entities/entity";
import { UniqueIdEntity } from "src/core/entities/unique-id-entity";
import type { Optional } from "src/core/types/optional";

export interface RouteBusStopProps {
    routeId: UniqueIdEntity
    busStopId: UniqueIdEntity
}

export class RouteBusStop extends Entity<RouteBusStopProps> {
    get routeId() {
        return this.props.routeId
    }

    get busStopId() {
        return this.props.busStopId
    }

    static create(props: Optional<RouteBusStopProps, never>, id?: string) {
        const routeBusStop = new RouteBusStop({
            ...props
        }, id)

        return routeBusStop
    }
}