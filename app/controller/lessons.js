const Controller = require('egg').Controller

const createRule = {
  username: 'string',
  password: 'string'
}

class LessonController extends Controller {
  // POST /lessons
  async create () {
    this.ctx.body = 'create'
  }

  // GET /lessons
  async index () {
    this.ctx.body = 'index'
  }

  // GET /lessons/:id
  async show () {
    this.ctx.body = 'show'
  }

  // PUT /lessons/:id
  async update () {
    this.ctx.body = 'update'
  }

  // DELETE /lessons/:id
  async destroy () {
    this.ctx.body = 'destroy'
  }
}

module.exports = LessonController
