import { left, right, type Either } from "src/core/either"
import type { RouteRepository } from "../repositories/route-repository"
import { Route } from "../../enterprise/route"
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error"

export interface GetRouteByIdUseCaseRequest {
    routeId: string
}

export type GetRouteByIdUseCaseResponse = Either<ResourceNotFoundError, Route>

export class GetRouteByIdRouteUseCase {
    constructor(private routeRepository: RouteRepository) {}

    async execute(data: GetRouteByIdUseCaseRequest): Promise<GetRouteByIdUseCaseResponse> {
        const {routeId} = data

        const route = await this.routeRepository.findById(routeId)

        if(!route) {
            return left(new ResourceNotFoundError)
        }

        return right(route)
    }
}