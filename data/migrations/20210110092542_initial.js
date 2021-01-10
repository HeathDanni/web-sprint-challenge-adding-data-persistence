
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("project_name")
        .notNull()
        .unique()
      table.text("project_description")
      table.boolean("project_completed")
        .notNull()
        .defaultTo(false)
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("resource_name")
        .notNull()
        .unique()
      table.text("resource_description")
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.text("task_description")
        .notNull()
      table.text("task_notes")
      table.boolean("task_completed")
        .notNull()
        .defaultTo(false)
      table.integer("project_id")
        .references("id")
        .inTable("projects")
  })

  await knex.schema.createTable("project_resources", (table) => {
      table.integer("project_id")
        .notNull()
        .references("id")
        .inTable("projects")

      table.integer("resource_id")
        .notNull()
        .references("id")
        .inTable("resources")
    table.primary(['project_id', 'resources_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
