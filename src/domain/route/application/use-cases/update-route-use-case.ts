import { left, right, type Either } from "src/core/either"
import type { RouteRepository } from "../repositories/route-repository"
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error"
import type { RouteBusStopRepository } from "../repositories/route-bus-stop-repository"
import { RouteBusStopList } from "../../enterprise/route-bus-stop-list"
import { RouteBusStop } from "../../enterprise/route-bus-stop"
import { UniqueIdEntity } from "src/core/entities/unique-id-entity"

export interface UpdateRouteUseCaseRequest {
    routeId: string
    name: string
    routeBusStopIds: string[]
}

export type UpdateRouteUseCaseResponse = Either<ResourceNotFoundError, {}>

export class UpdateRouteUseCase {
    constructor(
        private routeRepository: RouteRepository,
        private routeBusStopRepository: RouteBusStopRepository
    ) {}

    async execute(data: UpdateRouteUseCaseRequest): Promise<UpdateRouteUseCaseResponse> {
        const {routeId, name, routeBusStopIds} = data

        const route = await this.routeRepository.findById(routeId)
        
        if(!route) {
            return left(new ResourceNotFoundError)
        }

        const curentRouteBusStop = await this.routeBusStopRepository.findManyByRouteId(routeId)   

        const routeBusStopList = new RouteBusStopList(curentRouteBusStop)

        const routeBusStops = routeBusStopIds.map((routeBusStop) => {
            return RouteBusStop.create({
                routeId: route.id,
                busStopId: new UniqueIdEntity(routeBusStop)
            })
        })

        routeBusStopList.update(routeBusStops)

        route.name = name
        route.busStops = routeBusStopList

        await this.routeRepository.save(route)

        return right({})
    }
}