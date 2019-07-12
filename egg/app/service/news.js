'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNews() {

    const api='http://v.juhe.cn/toutiao/index?type=top&key=cbfe7aa0174b03a02b385db3403c21d9'
    let response= await this.ctx.curl(api);
    //console.log(response.data);//返回的是buffer
    let data = JSON.parse(response.data); //把buffer转化为对象
    //console.log(data);
    return data.result.data;
  }
}

module.exports = NewsService;
