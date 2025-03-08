import { AggregateRoot } from "src/core/entities/aggregate-root";
import { UniqueIdEntity } from "src/core/entities/unique-id-entity";
import type { Optional } from "src/core/types/optional";
import { RouteBusStopList } from "./route-bus-stop-list";

export interface RouteProps {
    id?: UniqueIdEntity
    name: string
    code: string
    routeBusStop: RouteBusStopList
}

export class Route extends AggregateRoot<RouteProps> {
    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }

    get code() {
        return this.props.code
    }

    get busStops() {
        return this.props.routeBusStop
    }

    set busStops(routeBusStop: RouteBusStopList) {
        this.props.routeBusStop = routeBusStop
    }

    static create(props: Optional<RouteProps, 'routeBusStop'>, id?: string) {
        const route = new Route({
            routeBusStop: props.routeBusStop ?? new RouteBusStopList(),
            ...props
        }, id)

        return route
    }
}