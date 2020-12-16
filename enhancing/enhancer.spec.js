const enhancer = require('./enhancer.js');
// test away!


describe('sanity check', () => {
    it('works', () => {
        expect(2 + 2).toBe(4)
    })
})

let item
describe('Enhancer', () => {
    beforeEach(() => {
        item = { name: 'sword',
                 durability: 80,
                 enhancement: 10  
                }
    })
    it('item is defined', () => {
        expect(item).toBeDefined()
    })
    it('durability is there', () => {
        expect(item.durability).toBeDefined()
        expect(item.durability).toBe(80)
    })
    it('enhancement is there', () => {
        expect(item.enhancement).toBeDefined()
        expect(item.enhancement).toBeLessThan(20)
    })
    it('can restore the durability back to 100', () => {
        enhancer.repair(item)
        expect(item.durability).toBe(100)
    })
})
describe('Enhancement succeeded', () => {
    it('enhancement level goes up by 1', () => {
        enhancer.success(item)
        expect(item.enhancement).toBeGreaterThan(10)
        expect(item.enhancement).toEqual(11)
    })
})

describe('Enhancement failed', () => {
    it('durability goes down', () => {
        enhancer.fail(item)
        expect(item.enhancement).toBe(10)
        expect(item.durability).toBeLessThan(100)
        expect(item.durability).toStrictEqual(95)
    })
})
let newItem
describe('get item', () => {
    beforeEach(() => {
        newItem = { name: `[+ ${item.enhancement}] ${item.name}`}
    })
    it('shows item with enhancement level', () => {
        enhancer.success(item)
        expect(item.enhancement).toBe(11)
        enhancer.get(item)
        console.log(newItem.name)
    })
})

