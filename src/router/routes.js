import React from 'react'
import Index from '../view/index/index'
import Course from '../view/course/index'
import Teacher from '../view/teacher/index'
import Work from '../view/work/index'
import Login from '../view/login/index'

const routeList = [
  {
    name: '首页',
    path: '/',
    exact: true,
    render(props) {
      return <Index {...props} />
    }
  },
  {
    name: '课程安排',
    path: '/course',
    exact: true,
    render(props) {
      return <Course {...props} />
    }
  },
  {
    name: '讲师团队',
    path: '/teacher',
    exact: true,
    render(props) {
      return <Teacher {...props} />
    }
  },
  {
    name: '作品详情',
    path: '/work',
    exact: true,
    render(props) {
      return <Work {...props} />
    }
  },
  {
    name: '登录',
    path: '/login',
    exact: true,
    render(props) {
      return <Login {...props} />
    }
  },
]

export default routeList
