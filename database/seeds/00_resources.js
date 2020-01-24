exports.seed = async (knex) => {

    await knex('resources').truncate()

    await knex('resources').insert([
        { resource: "magical wand" },
        { resource: "magical wand" },
    ])
}