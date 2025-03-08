import { right, type Either } from "src/core/either"
import { RouteRepository } from "../repositories/route-repository"
import { Route } from "../../enterprise/route"
import { RouteBusStop } from "../../enterprise/route-bus-stop"
import { UniqueIdEntity } from "src/core/entities/unique-id-entity"
import { RouteBusStopList } from "../../enterprise/route-bus-stop-list"
import { Inject, Injectable } from "@nestjs/common"

export interface CreateRouteUseCaseRequest {
    name: string
    code: string
    busStops: string[]
}

export type CreateRouteUseCaseResponse = Either<never, {}>

@Injectable()
export class CreateRouteUseCase {
    constructor(private routeRepository: RouteRepository) {}

    async execute(data: CreateRouteUseCaseRequest): Promise<CreateRouteUseCaseResponse> {
        const {name, code, busStops} = data

        const route = Route.create({
            name, code
        })

        const routeBusStops = busStops.map((busStop)=> {
            return RouteBusStop.create({
                routeId: route.id,
                busStopId: new UniqueIdEntity(busStop)
            })
        })

        route.busStops = new RouteBusStopList(routeBusStops)

        await this.routeRepository.create(route)

        return right({})
    }
}