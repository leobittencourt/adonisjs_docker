'use strict';

const Schema = use('Schema');

class ImageSchema extends Schema {
  up() {
    this.create('images', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table
        .integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts');
      table.string('path').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('images');
  }
}

module.exports = ImageSchema;
