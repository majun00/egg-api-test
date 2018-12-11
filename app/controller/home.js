const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = `
　　　　　　　/\~~~~~~~~~~~~~\　　　▓　　^*^　　　☆　　$$　 .☆ 
　　　　　　./　\~~~▓~　 ~~~~\ ◆　　圣诞 .快乐　 *　 $◢◣$　 * 
　　　　　　/ ^^ \ ══════\.◆　　　 *　*　　*　 $◢★◣$　 * 
　　　　　..▎[]　▎田　田 ▎ |┃◆　 .　　　　　*　 $◢■■◣$　 * 
　　　　　&&▎　　▎　　　 ▎'|'▎ 　　　　　　　* $◢■■■◣$ * 
　　　　＃ ■■■■■■■■■■〓▄▃▂▁愿你圣诞快乐︸︸||︸︸ 
`
  }
}

module.exports = HomeController
