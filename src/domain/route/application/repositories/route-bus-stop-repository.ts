import type { RouteBusStop } from "../../enterprise/route-bus-stop";

export abstract class RouteBusStopRepository {
    abstract findManyByRouteId(routeId: string): Promise<RouteBusStop[]>
    abstract delete(routeId: string): Promise<void>
}