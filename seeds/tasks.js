
exports.seed = async function(knex) {
  await knex("tasks").truncate()
  await knex("tasks").insert([
    { task_description: 'Do foo', project_id: 1, task_completed: false},
    { task_description: 'Do bar', task_notes: 'Use Postman!', project_id: 1, task_completed: false},
    { task_description: 'Do baz', task_notes: 'Have fun!', task_completed: true, project_id: 2, task_completed: false}
    //shouldn't need tesk_completed, should default to false
  ])
 };