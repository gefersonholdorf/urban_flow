import type { RouteBusStopRepository } from "src/domain/route/application/repositories/route-bus-stop-repository";
import type { RouteRepository } from "src/domain/route/application/repositories/route-repository";
import type { Route } from "src/domain/route/enterprise/route";

export class InMemoryRouteRepository implements RouteRepository {

    constructor(private readonly routeBusStopRepository: RouteBusStopRepository) {}

    public items: Route[] = []

    async create(route: Route): Promise<void> {
        await this.items.push(route)
    }
    async findById(id: string): Promise<Route | null> {
        const item = await this.items.find(item => item.id.toString === id)

        if(!item) {
            return null
        }

        return item
    }

    async save(route: Route): Promise<void> {
        const indexItem = await this.items.findIndex(item => item.id.toString === route.id.toString)

        this.items[indexItem] = route
    }

    async delete(id: string): Promise<void> {
        await this.routeBusStopRepository.delete(id)
        const items = await this.items.filter(item => item.id.toString !== id)

        this.items = items
    }
}