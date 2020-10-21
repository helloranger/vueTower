
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const User = {
  template: `
  <div class="user">
    <h2>User {{ $route.params.id }}22</h2>
    <router-view></router-view>
  </div>
  `
}

const UserProfile = {
  template: `
  <div class="user">
    <h2>UserProfile</h2>
  </div>
  `
}

const UserPosts = {
  template: `
  <div class="user">
    <h2>UserPosts</h2>
  </div>
  `
}

const routes = [
  {
    path: '/user/:id', 
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ],
  },
  {
    path: '/summary',
    name: 'Summary',
    children: [
      {
        path: 'router',
        name: 'Router',
        component: () => import('@/views/summary/router'),
      }
    ],
    component: {
      template: `
        <div>
          <router-view></router-view>
        </div>
      `
    }
  },

  // {
  //   path:'/test',
  //   name:'test',
  //   component: () => import('@/views/test/test')
  // },
  // //通配符的使用
  // {
  //   path: '/user-*',
  //   component: () => import('@/views/test/test')  
  // },
  // {
  //   path: '/role-*',
  //   component: () => import('@/views/test/test')  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/*',
    component: () => import('@/views/error-page/404')
    // redirect: '/404'
  },



  // {
  //   path: '/user/:id',
  //   // name: 'test',
  //   // component: () => import('../views/test/test')
  //   component: {
  //     template: '<div>User{{$route.params.id}}</div>'
  //   }
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   // component: () => import('../views/test/test')
  //   component: () => import('@/views/test/test')
  // },
  // {
  //   path: '/test2',
  //   name: 'test2',
  //   // component: () => import('../views/test/test')
  //   component: () => import('@/views/test2/test')
  // },
  // {
  //   path: '/test-*',
  //   // component: () => import('../views/test/test')
  //   // component: () => import('@/views/error-page/404'),
  //   component: {
  //     template: '<div>$route.params.pathMatch</div>'
  //   }
  // },
  // {
  //   path: '/*',
  //   // component: () => import('../views/test/test')
  //   // component: () => import('@/views/error-page/404'),
  //   component: {
  //     template: '<div>$route.params.pathMatch</div>'
  //   }
  // },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes
})


export default createRouter()