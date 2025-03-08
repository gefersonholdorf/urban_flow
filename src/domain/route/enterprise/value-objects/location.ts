import { InvalidError } from "../../erros/location-invalid"

export class Location {
    private _value

    get value() {
        return this._value
    }

    constructor(value: string) {
        const validationResult = this.validateLocation(value)

        if(!validationResult) {
            throw new InvalidError()
        }

        this._value = value
    }

    validateLocation(value: string): boolean {
        const locationRegex = /^([\w\s\.-]+),\s*([A-Za-z\s]+),\s*([A-Z]{2})$/

        return locationRegex.test(value)
    }
}