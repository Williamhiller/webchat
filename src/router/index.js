import Vue from 'vue';
import Router from 'vue-router';
import Message from '../view/Message.vue';
import Recommend from '../view/Recommend.vue';
import Article from '../view/recommend/Article';
import Tool from '../view/Tool.vue';
import Robot from '../view/Robot';
import Home from '../view/Home';
import Register from '../view/Register';
import Login from '../view/Login';
import Chat from '../view/Chat.vue';
import Avatar from '../view/Avatar';
import MessageTransition from '../view/transation/MessageTransition';
import RecommendTransition from '../view/transation/RecommendTransition.vue';
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
      name: 'MessageTransition',
      component: MessageTransition,
      children: [
        {
          path: '/message',
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
      name: 'RecommendTransition',
      component: RecommendTransition,
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend
        },
        {
          path: '/article/:id',
          name: 'article',
          component: Article
        }
      ]
    },
    {
      path: '/tool',
      name: 'tool',
      component: Tool
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: Avatar
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
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
