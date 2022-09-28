// Exercício 4
describe("Testing Mock Creation", () => {
    
    // 4.b)
    test("Creating mocks with successful output", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })

    // 4.c)
    test("Creating mocks with fault output", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})