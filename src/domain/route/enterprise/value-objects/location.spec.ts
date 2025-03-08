import { describe, expect, it } from 'vitest'
import { Location } from './location'

describe('Create Location [UNIT]', () => {
    it('should be able to create location correctly', () => {
        const locationText: string = 'Rua Interbairros, Benedito Novo, SC'

        const location = new Location(locationText)

        expect(location.value).toEqual(locationText)
    })
    it('should be able to return an error when providing a location in the wrong form', () => {
        const locationText: string = 'Rua Interbairros Benedito Novo SC'

        expect(() => {
            new Location(locationText)
        }).toThrowError()
    })
})