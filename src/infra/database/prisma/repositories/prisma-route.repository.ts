import { Inject, Injectable } from "@nestjs/common";
import { RouteRepository } from "src/domain/route/application/repositories/route-repository";
import { Route } from "src/domain/route/enterprise/route";
import { PrismaService } from "./prisma.service";
import { PrismaRouteMapper } from "../mappers/prisma-route-mapper";

@Injectable()
export class PrismaRouteRepository implements RouteRepository {
    constructor(private prismaService: PrismaService){}
    
    async create(route: Route): Promise<void> {
        const routeMapper = PrismaRouteMapper.toPrisma(route)

        await this.prismaService.route.create({
            data: {
                ...routeMapper
            }
        })
    }
    async findById(id: string): Promise<Route | null> {
        return null
    }
    async save(route: Route): Promise<void> {
        console.log('tes')
    }
    async delete(id: string): Promise<void> {
        console.log()
    }
}