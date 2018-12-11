'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares } = app
  const checkApiToken = middlewares.checkApiToken()
  router.get('/', controller.home.index)
  router.resources('teachers', '/v1/teachers', checkApiToken, controller.teachers)
  router.resources('auth', '/v1/auth', controller.auth)
  router.delete('/v1/auth', controller.auth.destroy)
  router.resources('course_categories', '/v1/course_categories', checkApiToken, controller.categories)
}
