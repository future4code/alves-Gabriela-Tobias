import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense"
import { Character } from "../src/model/Character"

// Exercício 8
describe("DecreaseCharacter Unit testing", () => {

    test("Should return invalid Character", () => {

        const validatorMock = jest.fn(() => {
            return false
        })

        try {
            const character: Character = {
                name: "Batman",
                life: 1500,
                strength: 95,
                defense: 90
            }

            const newDefense = 95

            decreaseCharacterDefense(character, newDefense, validatorMock)

        } catch (error: any) {
            expect(error.message).toBe("Invalid Character")
            expect(validatorMock).toBeCalled()
            expect(validatorMock).toBeCalledTimes(1)
            expect(validatorMock).toReturnTimes(1)
        } finally {
            expect.assertions(4)
        }
    })

    test("Should return an error, signaling that the new defense is greater than the character's current defense", () => {

        const validatorMock = jest.fn(() => {
            return true
        })

        try {
            const character: Character = {
                name: "Batman",
                life: 1500,
                strength: 95,
                defense: 90
            }

            const newDefense = 95

            decreaseCharacterDefense(character, newDefense, validatorMock)

        } catch (error: any) {
            expect(error.message).toBe("New defense should be less than the character's current defense")
            expect(validatorMock).toBeCalled()
            expect(validatorMock).toBeCalledTimes(1)
            expect(validatorMock).toReturnTimes(1)
        } finally {
            expect.assertions(4)
        }
    })

    test("Should return character with new defense", () => {

        const validatorMock = jest.fn(() => {
            return true
        })

        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: 95,
            defense: 90
        }

        const newDefense = 80

        decreaseCharacterDefense(character, newDefense, validatorMock)

        expect(character.defense).toBe(80)
        expect(validatorMock).toBeCalled()
        expect(validatorMock).toBeCalledTimes(1)
        expect(validatorMock).toReturnTimes(1)
    })
})