'use strict';

const Helpers = use('Helpers');
const Post = use('App/Models/Post');

class ImageController {
  async save({ params, request, auth }) {
    const post = await Post.findOrFail(params.id);

    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    });

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }));

    if (!images.movedAll()) {
      return images.errors();
    }

    await Promise.all(
      images.movedList().map(image =>
        post.images().create({
          user_id: auth.user.id,
          path: image.fileName
        })
      )
    );
  }

  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
  }
}

module.exports = ImageController;
