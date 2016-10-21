/**
 * Created by zhengzk on 2016/10/21.
 */

import Dialog from './components/base/Dialog.vue';
import Alert from './components/base/Alert.vue';
import Item from './components/base/Item.vue';
import Notes from './components/base/Notes.vue';
import OrderItem from './components/base/OrderItem.vue';
import Prompt from './components/base/Prompt.vue';



const install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  //注册组件
  Vue.component('Dialog', Dialog);
  Vue.component('Alert', Alert);
  Vue.component('Item', Item);
  Vue.component('Notes', Notes);
  Vue.component('OrderItem', OrderItem);
  Vue.component('Prompt', Prompt);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};


export default {
  install: install,
  Dialog,
  Alert,
  Item,
  Notes,
  OrderItem,
  Prompt
}