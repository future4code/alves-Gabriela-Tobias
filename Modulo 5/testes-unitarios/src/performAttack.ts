import { Character } from "./model/Character";
import { validateCharacter } from "./validateCharacter";

// Exercício 3.a)
// export const performAttack = (attacker: Character, defender: Character) => {

//     const validateAttacker = validateCharacter(attacker)
//     const validateDefender = validateCharacter(defender)

//     if (!validateAttacker || !validateDefender) {
//         throw new Error("Invalid Character")
//     }

//     if (attacker.strength > defender.defense) {
//         defender.life = defender.life - (attacker.strength - defender.defense)
//     }
// }

// Exercício 3.b)
export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {

    const validateAttacker = validator(attacker)
    const validateDefender = validator(defender)

    if (!validateAttacker || !validateDefender) {
        throw new Error("Invalid Character")
    }

    if (attacker.strength > defender.defense) {
        defender.life = defender.life - (attacker.strength - defender.defense)
    }
}

