export class InvalidError extends Error {
    constructor() {
        super('Location invalid.')
    }
}