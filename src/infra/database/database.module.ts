import { Module } from "@nestjs/common";
import { RouteRepository } from "src/domain/route/application/repositories/route-repository";
import { PrismaRouteRepository } from "./prisma/repositories/prisma-route.repository";
import { PrismaService } from "./prisma/repositories/prisma.service";

@Module({
    providers: [PrismaService,
        {
            provide: RouteRepository,
            useClass: PrismaRouteRepository
        }
    ],
    exports: [PrismaService, RouteRepository]
})
export class DatabaseModule {}