'use strict';

const Schema = use('Schema');

class PostSchema extends Schema {
  up() {
    this.create('posts', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table.string('photo');
      table.string('title', 255).notNullable();
      table.string('subtitle', 255);
      table.text('body').notNullable();
      table.string('slug').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('posts');
  }
}

module.exports = PostSchema;
