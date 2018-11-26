'use strict';

const Env = use('Env');
const Model = use('Model');

class Image extends Model {
  static get computed() {
    return ['url'];
  }

  getUrl({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`;
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  post() {
    return this.hasMany('App/Models/Post');
  }
}

module.exports = Image;
