import Vue from 'vue';
import Router from 'vue-router';
import Message from '../view/Message.vue';
import Recommend from '../view/Recommend.vue';
import Tool from '../view/Tool.vue';
import Robot from '../view/Robot';
import Home from '../view/Home';
import Register from '../view/Register';
import Login from '../view/Login';
import Chat from '../view/Chat.vue';
import Avatar from '../view/Avatar';
import BaseTransition from '../BaseTransition.vue';
import loading from '../components/loading/loading';

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'BaseTransition',
      component: BaseTransition,
      children: [
        {
          path: '',
          name: 'message',
          component: Message
        },
        {
          path: '/chat',
          name: 'chat',
          component: Chat
        },
        {
          path: '/robot',
          name: 'Robot',
          component: Robot
        }
      ]
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: Avatar
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  loading.show();
  next();
});

router.afterEach(route => {
  loading.hide();
});

export default router;
