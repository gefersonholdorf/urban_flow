import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import type { create } from "domain";
import { CreateRouteUseCase } from "src/domain/route/application/use-cases/create-route-use-case";
import { z } from "zod";

const createRouteSchema = z.object({
    name: z.string(),
    code: z.string()
})

type CreateRoutesSchema = z.infer<typeof createRouteSchema>

@Controller('/routes')
export class CreateRouteController{
    constructor(private readonly createRouteUseCase: CreateRouteUseCase){}

    @Post()
    @HttpCode(201)
    async handle(@Body() body: CreateRoutesSchema){
        const {name, code} = createRouteSchema.parse(body)

        await this.createRouteUseCase.execute({name, code, busStops: []})
    }
}