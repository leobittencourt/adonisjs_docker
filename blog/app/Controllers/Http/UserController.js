'use strict';

const User = use('App/Models/User');

class UserController {
  async index({ request }) {
    let page =  1;

    const query = request.get();

    if (Number(query.page) > 0) {
      page = Number(query.page);
    }

    return User.query().paginate(page);
  }

  async store({ request, response }) {
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);

    response.status(201);

    return user;
  }

  async edit({ request }) {}

  async delete({ response, params }) {
    const { id } = params;
    const user = await User.find(id);

    if (!user) {
      response.status(404);
      return { message: 'Not found' };
    }

    await user.delete();
    response.status(204);
  }

  async view({ params }) {
    const { id } = params;

    const user = await User.find(id);

    if (!user) {
      response.status(404);
      return { message: 'Not found' };
    }

    return user;
  }
}

module.exports = UserController;
