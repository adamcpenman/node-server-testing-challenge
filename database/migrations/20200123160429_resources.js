
exports.up = async function(knex) {
  await knex.schema.createTable('resources', (table) => {
      table.increments();
      table.string('resource', 100).notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('resources')
};
