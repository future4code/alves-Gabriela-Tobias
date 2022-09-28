import { Character } from "../src/model/Character"
import { performAttack } from "../src/performAttack"

// Exercício 5
describe("PerformAttack Unit testing", () => {

    // 5.a)
    test("Should return a successful attack", () => {

        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Batman",
            life: 1500,
            strength: 95,
            defense: 90
        }

        const defender: Character = {
            name: "Superman",
            life: 1500,
            strength: 100,
            defense: 80
        }

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toBe(1485)
        expect(validatorMock).toBeCalled()
        expect(validatorMock).toBeCalledTimes(2)
        expect(validatorMock).toReturnTimes(2)
    })

    // 5.b)
    test("Should return invalid Character", () => {

        const validatorMock = jest.fn(() => {
            return false
        })

        try {
            const attacker: Character = {
                name: "Batman",
                life: 1500,
                strength: 95,
                defense: 90
            }

            const defender: Character = {
                name: "",
                life: 1500,
                strength: 100,
                defense: 80
            }

            performAttack(attacker, defender, validatorMock)

        } catch (error: any) {
            expect(error.message).toBe("Invalid Character")
            expect(validatorMock).toBeCalled()
            expect(validatorMock).toBeCalledTimes(2)
            expect(validatorMock).toReturnTimes(2)
        } finally {
            expect.assertions(4)
        }
    })

    // Exercício 6
    test("Should return defender with no life lost", () => {

        const validatorMock = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Superman",
            life: 1500,
            strength: 95,
            defense: 90
        }

        const defender: Character = {
            name: "Batman",
            life: 1500,
            strength: 100,
            defense: 100
        }

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toBe(1500)
        expect(validatorMock).toBeCalled()
        expect(validatorMock).toBeCalledTimes(2)
        expect(validatorMock).toReturnTimes(2)
    })
})