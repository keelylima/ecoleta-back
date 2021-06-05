import { Knex } from 'knex'

export async function up(knex: Knex) {
    //  CRIAR A TABELA
    knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    })
}

export async function down() {
    //VOLTAR ATRÁS (DELETAR A TABELA)
}