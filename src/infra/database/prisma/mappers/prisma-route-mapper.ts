import type { Route as PrismaRoute} from "@prisma/client";
import { Route } from "src/domain/route/enterprise/route";

export class PrismaRouteMapper{
    static toDomain(route: PrismaRoute): Route {
        return Route.create({
            name: route.name,
            code: route.code
        }, route.id)
    }

    static toPrisma(route: Route): PrismaRoute{
        return {
            id: route.id.toString,
            name: route.name,
            code: route.code,
        }
    }
}