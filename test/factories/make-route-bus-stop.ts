import { UniqueIdEntity } from "src/core/entities/unique-id-entity";
import { RouteBusStop, RouteBusStopProps } from "src/domain/route/enterprise/route-bus-stop";

export function makeRouteBusStop(override: Partial<RouteBusStopProps> = {}, id?: string) {
    const routeBusStop = RouteBusStop.create({
        routeId: new UniqueIdEntity(),
        busStopId: new UniqueIdEntity(),
        ...override
    }, id)

    return routeBusStop
}