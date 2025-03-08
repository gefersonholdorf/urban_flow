import { left, right, type Either } from "src/core/either"
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error"
import type { RouteRepository } from "../repositories/route-repository"

export interface DeleteRouteUseCaseRequest {
    routeId: string
}

export type DeleteRouteUseCaseResponse = Either<ResourceNotFoundError, {}>

export class DeleteRouteUseCase {
    constructor(
        private readonly routeRepository: RouteRepository
    ) {}

    async execute(data: DeleteRouteUseCaseRequest): Promise<DeleteRouteUseCaseResponse> {
        const {routeId} = data

        const router = await this.routeRepository.findById(routeId)

        if(!router) {
            return left(new ResourceNotFoundError())
        }

        await this.routeRepository.delete(router.id.toString)

        return right({})
    }
}