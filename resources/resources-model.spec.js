const db = require('../database/dataconfig')
const resourceM = require('./resources-model')

beforeEach(async () => {
    await db.seed.run()
})

describe('resources model', () => {
    test('list', async () => {
        const res = await resourceM.list()
        expect(res.length).toBeGreaterThan(0)
    })
      test("findById", async () => {
        const res = await resourceM.findById(1)
        expect(res.resource).toBe("magical wand")
    })
        test("insert", async () => {
            await resourceM.insert({ resource: "potions"})
            const resources = await db("resources").select()
            expect(resources).toHaveLength(3)
        })
            test("update", async () => {
                await resourceM.update(1, {resource: "owls"})
                const resources = await resourceM.findById(1)
                expect(resources.resource).toBe("owls")
            })
                test("remove", async () => {
                    await resourceM.remove(1)
                    const resources = await resourceM.list()
                    expect(resources).toHaveLength(1)
                })
})
