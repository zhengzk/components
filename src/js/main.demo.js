/**
 * Created by zhengzk on 2016/10/21.
 */
import VueRouter from  'vue-router';
Vue.use(VueRouter);

import App from './components/Demo.vue'
var utils = require('./common/utils');

var router = new VueRouter();

router.map({
  '/': {
    name:'index',
    component: App
  },
  '/:step': {
    name:'index',
    component: App
  }
});

router.redirect({
  '*': '/' // 重定向任意未匹配路径到/index
});

//路由切换后执行
router.afterEach(function (transition) {
  //pv统计代码
  var from = transition.from
  var name = transition.to.name
  var query = transition.to.query
  var bi_params = {
    router: name
  }
  if(query.hmsr){
    bi_params.hmsr = query.hmsr
  }
  console.log('router afterEach: ', name)
  if(name && from.name == name ){
    //在当前自页面内互相切换 不统计uv/pv 如阿姨列表 返回处理
    return
  }

  if(utils.isFunction(window.trackPageview)){
    window.trackPageview(bi_params)
  }
});

router.start(Vue.extend({
  template: '<router-view></router-view>'
}), 'body');
