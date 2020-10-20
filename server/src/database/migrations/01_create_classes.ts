import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //reflete em TODOS os lugares da aplicação (exemplo: se mudar o id_user)
            .onDelete('CASCADE'); //deleta todas as aulas do professor
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}