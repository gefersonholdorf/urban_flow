import { Module } from "@nestjs/common";
import { CreateRouteController } from "./controllers/route/create-route.controller";
import { DatabaseModule } from "../database/database.module";
import { CreateRouteUseCase } from "src/domain/route/application/use-cases/create-route-use-case";

@Module({
    imports: [DatabaseModule],
    controllers: [CreateRouteController],
    providers: [CreateRouteUseCase]
})
export class HttpModule{}