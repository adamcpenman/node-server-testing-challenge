const supertest = require("supertest")
const router = require("./resources-router")
const server = require("../server")
const db = require("../database/dataconfig")

//reseeds the data base everytime the test is run
beforeEach(async () => {
    await db.seed.run()
})


test("get resource list", async () => {
    const res = await supertest(server).get("/resources")
    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].resource).toBe("magical wand")
})

test("create resources", async () => {
    const res = await supertest(server)
    .post("/resources")
    .send({ resource: "potions" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body).toEqual ({ id: 3, resource: "potions" })
})