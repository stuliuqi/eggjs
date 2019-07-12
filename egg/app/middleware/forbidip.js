module.exports = (options, app) => {

  return async function forbidIp(ctx, next) {


    const forbidip = '127.0.0.1';


    //console.log(ctx.request.ip)
    if(ctx.request.ip===forbidip){
      ctx.status=403;
      ctx.body='此ip已经被屏蔽'
    }else{
      await next();
    }

  }



};
