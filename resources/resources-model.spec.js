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
})
