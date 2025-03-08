import type { Route } from "../../enterprise/route";

export abstract class RouteRepository {
    abstract create(route: Route): Promise<void>
    abstract findById(id: string): Promise<Route | null>
    abstract save(route: Route): Promise<void>
    abstract delete(id: string): Promise<void>
}