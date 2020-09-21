import React from 'react'
import routes from './router'
import { Route, Redirect } from 'react-router-dom'

const Router = () =>
  routes.map((route: { path: string; component: any; redirect?: string }, index) => {
    if (route.redirect !== undefined) {
      return <Redirect path={route.path} to={route.redirect} exact={true} key={index} />
    }
    return <Route path={route.path} component={route.component} exact={true} key={index} />
  })

export default Router
