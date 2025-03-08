import { InMemoryRouteRepository } from "test/repositories/in-memory-route";
import { beforeEach, describe, it, expect } from "vitest";
import { CreateRouteUseCase } from "./create-route-use-case";
import { InMemoryRouteBusStopRepository } from "test/repositories/in-memory-route-bus-stop";

let inMemoryRouteBusStopRepository: InMemoryRouteBusStopRepository
let inMemoryRouteRepository: InMemoryRouteRepository
let sut: CreateRouteUseCase

describe('Create Route [UNIT]', () => {
    beforeEach(() => {
        inMemoryRouteBusStopRepository = new InMemoryRouteBusStopRepository()
        inMemoryRouteRepository = new InMemoryRouteRepository(inMemoryRouteBusStopRepository)
        sut = new CreateRouteUseCase(inMemoryRouteRepository)
    })

    it('should be able to create route', async() => {
    const result = await sut.execute({
        name: 'Doutor Pedrinho/Timbó',
        code: 'DPT001',
        busStops: ['1', '2', '3']
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryRouteRepository.items).toHaveLength(1)
    expect(inMemoryRouteRepository.items[0].busStops.currentItems).toHaveLength(3)
    })
})