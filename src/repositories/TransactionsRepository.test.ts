import * as TransactionsRepository from "./TransactionsRepository"
// @ponicode
describe("all", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.all()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getBalance", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getBalance()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.create({ title: "Direct Functionality Orchestrator", value: 32, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.create({ title: "Internal Interactions Strategist", value: 32, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.create({ title: "Internal Interactions Strategist", value: 0, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.create({ title: "Dynamic Quality Specialist", value: 10, type: "outcome" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.create({ title: "Internal Interactions Strategist", value: 64, type: "income" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.create({ title: "", value: -Infinity, type: "income" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
