
exports.seed = async function(knex) {
 await knex("projects").truncate()
 await knex("projects").insert([
    { project_name: 'Web API', project_description: 'Build APIs', project_completed: false},
    { project_name: 'Databases', project_description: 'Learn SQL', project_completed: true },
    { project_name: 'Authentication', project_completed: false}
    //shouldn't need project_completed, should default to false
 ])
};
