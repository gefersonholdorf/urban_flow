import { InMemoryRouteRepository } from "test/repositories/in-memory-route";
import { beforeEach, describe, it, expect } from "vitest";
import { GetRouteByIdRouteUseCase } from "./get-route-by-id-use-case";
import { makeRoute } from "test/factories/make-route";
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error";
import { InMemoryRouteBusStopRepository } from "test/repositories/in-memory-route-bus-stop";

let inMemoryRouteBusStopRepository: InMemoryRouteBusStopRepository
let inMemoryRouteRepository: InMemoryRouteRepository
let sut: GetRouteByIdRouteUseCase

describe('Create Route [UNIT]', () => {
    beforeEach(() => {
        inMemoryRouteBusStopRepository = new InMemoryRouteBusStopRepository()
        inMemoryRouteRepository = new InMemoryRouteRepository(inMemoryRouteBusStopRepository)
        sut = new GetRouteByIdRouteUseCase(inMemoryRouteRepository)
    })

    it('should be able to find route by id', async() => {
        inMemoryRouteRepository.create(makeRoute({}, 'route-01'))

        const result = await sut.execute({
            routeId: 'route-01'
        })

        expect(result.isRight()).toBe(true)
        expect(inMemoryRouteRepository.items).toHaveLength(1)
    })

    it('should be able to return an error when providing an incorrect id', async() => {
        inMemoryRouteRepository.create(makeRoute({}, 'route-01'))

        const result = await sut.execute({
            routeId: 'route-02'
        })

        expect(result.isLeft()).toBe(true)
        expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    })
})