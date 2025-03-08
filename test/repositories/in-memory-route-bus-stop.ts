import type { RouteBusStopRepository } from "src/domain/route/application/repositories/route-bus-stop-repository";
import type { RouteBusStop } from "src/domain/route/enterprise/route-bus-stop";

export class InMemoryRouteBusStopRepository implements RouteBusStopRepository {
    public items: RouteBusStop[] = []

    async findManyByRouteId(routeId: string): Promise<RouteBusStop[]> {
        const items = await this.items.filter(item => item.routeId.toString === routeId)

        return items
    }

    async delete(routeId: string): Promise<void> {
        const items = await this.items.filter(item => item.routeId.toString !== routeId)

        this.items = items
    }
}