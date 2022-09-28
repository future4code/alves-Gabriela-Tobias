import { validateCharacter } from "../src/validateCharacter"
import { Character } from "../src/model/Character"

describe("ValidateCharacter Unit testing", () => {

    // Exercício 2.a)
    test("Should return false for a character with an empty string name", () => {
        const character: Character = {
            name: "",
            life: 1500,
            strength: 70,
            defense: 60
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // 2.b)
    test("Should return false for a character with life equal to zero", () => {
        const character: Character = {
            name: "Deadpool",
            life: 0,
            strength: 70,
            defense: 60
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // 2.c)
    test("Should return false for a character with strength equal to zero", () => {
        const character: Character = {
            name: "Deadpool",
            life: 1500,
            strength: 0,
            defense: 60
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // 2.d)
    test("Should return false for a character with defense equal to zero", () => {
        const character: Character = {
            name: "Deadpool",
            life: 1500,
            strength: 70,
            defense: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // 2.e)
    test("Should return false for a character with life less than zero", () => {
        const character: Character = {
            name: "Deadpool",
            life: -100,
            strength: 70,
            defense: 60
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // 2.f)
    test("Should return true for a character with all valid attributes", () => {
        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: 95,
            defense: 90
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
})