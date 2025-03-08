import { InMemoryRouteRepository } from "test/repositories/in-memory-route";
import { beforeEach, describe, it, expect } from "vitest";
import { makeRoute } from "test/factories/make-route";
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error";
import { InMemoryRouteBusStopRepository } from "test/repositories/in-memory-route-bus-stop";
import { UniqueIdEntity } from "src/core/entities/unique-id-entity";
import { makeRouteBusStop } from "test/factories/make-route-bus-stop";
import { DeleteRouteUseCase } from "./delete-route-use-case";

let inMemoryRouteRepository: InMemoryRouteRepository
let inMemoryRouteBusStopRepository: InMemoryRouteBusStopRepository
let sut: DeleteRouteUseCase

describe('Create Route [UNIT]', () => {
    beforeEach(() => {
        inMemoryRouteBusStopRepository = new InMemoryRouteBusStopRepository()
        inMemoryRouteRepository = new InMemoryRouteRepository(inMemoryRouteBusStopRepository)
        sut = new DeleteRouteUseCase(inMemoryRouteRepository)
    })

    it('should be able to delete route by id', async() => {
        inMemoryRouteRepository.create(makeRoute({}, 'route-01'))

        inMemoryRouteBusStopRepository.items.push(makeRouteBusStop({routeId: new UniqueIdEntity('route-01'), busStopId: new UniqueIdEntity('1')}, '1'))

        inMemoryRouteBusStopRepository.items.push(makeRouteBusStop({routeId: new UniqueIdEntity('route-01'), busStopId: new UniqueIdEntity('2')}, '2'))

        expect(inMemoryRouteBusStopRepository.items).toHaveLength(2)

        const result = await sut.execute({
            routeId: 'route-01',
        })

        expect(result.isRight()).toBe(true)
        expect(inMemoryRouteRepository.items).toHaveLength(0)
        expect(inMemoryRouteBusStopRepository.items).toHaveLength(0)
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