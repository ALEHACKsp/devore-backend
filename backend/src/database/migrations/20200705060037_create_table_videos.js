exports.up = function (knex) {
  return knex.schema.createTable('videos', (table) => {
    table.increments('id');
    table.integer('bookId').unsigned().references('id').inTable('comments').onDelete('SET NULL');
    table.integer('userId').unsigned().references('id').inTable('users').onDelete('SET NULL');
    table.string('videoName').notNullable();
    table.integer('likes').default(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('videos');
};
