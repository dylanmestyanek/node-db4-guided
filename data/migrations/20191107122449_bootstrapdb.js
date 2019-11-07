
exports.up = function(knex) {
  return knex.schema.createTable('species', t => {
      t.increments();
      t.string('name', 255).notNullable();
  })
  .createTable('animals', t => {
      t.increments();
      t.string('name', 255).notNullable();
      t.integer('species_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') // Deleting the record from the primary key table ("RESTRICT", "NO ACTION", "CASCADE", "SET NULL")
        .onUpdate('CASCADE'); // Changing the value of the primary key
  })
  .createTable('zoos', t => {
      t.increments();
      t.string('name', 255).notNullable();
      t.string('address', 255);
  })
  .createTable('animal_zoos', t => {
      t.increments();
      t.integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('zoos');
      t.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('animals');
        t.date('from').notNullable();
        t.date('to');
  })

};

exports.down = function(knex) {
  
};
