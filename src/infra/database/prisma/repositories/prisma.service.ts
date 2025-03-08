import { Injectable, type OnModuleDestroy, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor() {
        super({
            log: ['error', 'warn']
        })
    }
    
    onModuleInit() {
        this.$connect()
    }

    onModuleDestroy() {
        this.$disconnect()
    }
}