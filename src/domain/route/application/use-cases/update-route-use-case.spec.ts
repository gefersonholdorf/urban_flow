import { InMemoryRouteRepository } from "test/repositories/in-memory-route";
import { beforeEach, describe, it, expect } from "vitest";
import { UpdateRouteUseCase } from "./update-route-use-case";
import { makeRoute } from "test/factories/make-route";
import { ResourceNotFoundError } from "src/core/errors/resource-not-found-error";
import { InMemoryRouteBusStopRepository } from "test/repositories/in-memory-route-bus-stop";
import { UniqueIdEntity } from "src/core/entities/unique-id-entity";
import { makeRouteBusStop } from "test/factories/make-route-bus-stop";

let inMemoryRouteRepository: InMemoryRouteRepository
let inMemoryRouteBusStopRepository: InMemoryRouteBusStopRepository
let sut: UpdateRouteUseCase

describe('Create Route [UNIT]', () => {
    beforeEach(() => {
        inMemoryRouteBusStopRepository = new InMemoryRouteBusStopRepository()
        inMemoryRouteRepository = new InMemoryRouteRepository(inMemoryRouteBusStopRepository)
        sut = new UpdateRouteUseCase(inMemoryRouteRepository, inMemoryRouteBusStopRepository)
    })

    it('should be able to update route', async() => {
        inMemoryRouteRepository.create(makeRoute({}, 'route-01'))

        inMemoryRouteBusStopRepository.items.push(makeRouteBusStop({routeId: new UniqueIdEntity('route-01'), busStopId: new UniqueIdEntity('1')}, '1'))

        inMemoryRouteBusStopRepository.items.push(makeRouteBusStop({routeId: new UniqueIdEntity('route-01'), busStopId: new UniqueIdEntity('2')}, '2'))

        const result = await sut.execute({
            name: 'Blumenau/Doutor Pedrinho',
            routeId: 'route-01',
            routeBusStopIds: ['1', '3', '4', '5']
        })

        expect(result.isRight()).toBe(true)
        expect(inMemoryRouteRepository.items).toHaveLength(1)
        expect(inMemoryRouteRepository.items[0].name).toEqual('Blumenau/Doutor Pedrinho')
        expect(inMemoryRouteRepository.items[0].busStops.currentItems).toHaveLength(4)
    })

    it('should be able to return an error when providing an incorrect id', async() => {
        inMemoryRouteRepository.create(makeRoute({}, 'route-01'))
    
        const result = await sut.execute({
            name: 'Blumenau/Doutor Pedrinho',
            routeId: 'route-02',
            routeBusStopIds: ['1', '3', '4', '5']
        })
    
        expect(result.isLeft()).toBe(true)
        expect(result.value).toBeInstanceOf(ResourceNotFoundError)
    })
})