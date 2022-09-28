import { Character } from "./model/Character";

// Exercício 7
export const increaseCharacterStrength = (character: Character, newStrength: number, validator: (input: Character) => boolean): void => {

    const validateCharacter = validator(character)

    if (!validateCharacter) {
        throw new Error("Invalid Character")
    }

    if (character.strength > newStrength) {
        throw new Error("New acquired strength is less than the character's current strength")
    }

    character.strength = newStrength
}