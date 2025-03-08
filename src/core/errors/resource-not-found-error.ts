import type { ErrorUseCase } from "./error-usecase";

export class ResourceNotFoundError extends Error implements ErrorUseCase {
    constructor() {
        super('Resource not found.')
    }
}