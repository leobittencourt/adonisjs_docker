'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

// Auth
Route.post('/auth/token', 'SessionController.index');

// Users
Route.get('/user', 'UserController.index').middleware(['auth']);
Route.post('/user', 'UserController.store').validator('User').middleware(['auth']);
Route.get('/user/:id', 'UserController.view').middleware(['auth']);
Route.delete('/user/:id', 'UserController.delete').middleware(['auth']);

// Posts
Route.get('/post', 'PostController.index').middleware(['auth']);
Route.post('/post', 'PostController.add').middleware(['auth']);
Route.put('/post/:id', 'PostController.edit').middleware(['auth']);
Route.post('/post/:id/images', 'ImageController.save').middleware(['auth']);
