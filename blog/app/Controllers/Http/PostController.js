'use strict';

const Post = use('App/Models/Post');

class PostController {
  async index({ request }) {
    const posts = Post.all();
    
    return posts;
  }

  async add({ request }) {
    const data = request.only(['user_id', 'title', 'subtitle', 'body', 'slug']);

    const post = await Post.create(data);

    return post;
  }

  async edit({ params, request }) {
    const post = await Post.findOrFail(params.id);

    const data = request.all();

    post.merge(data);

    await post.save();

    return post;
  }

  async delete({ request }) {}

  async view({ request }) {}
}

module.exports = PostController;
