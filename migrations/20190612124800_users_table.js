
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(user){
        user.increments()

        user
        .string('username')
        .notNullable()
        .unique()

        user
        .string('password')
        .notNullable()

        user
        .string('department')
        .notNullable()

        user
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
