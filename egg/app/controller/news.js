'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const list=await this.service.news.getNews();
    //console.log(list);
    await this.ctx.render('news',{
      list:list
    })
  }
}

module.exports = NewsController;


