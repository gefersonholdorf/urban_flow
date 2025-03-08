import { faker } from "@faker-js/faker";
import { Route, type RouteProps } from "src/domain/route/enterprise/route";

export function makeRoute(
    override: Partial<RouteProps> = {},
    id?: string
) {
    const route = Route.create({
        name: faker.person.firstName('male'),
        code: faker.lorem.text(),
        ...override
    }, id)

    return route
}