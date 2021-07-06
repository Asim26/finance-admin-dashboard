import React from 'react'
import Login from './components/login/Login'
import SignUp from './components/signUp/SignUp'
import Settings from './components/settings/Settings'
import Dashboard from './components/dashboard/Dashboard'
import Protected from './Protected'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Dashboard}>
            <Protected Component={Dashboard} />
          </Route>
          <Route path='/Login' exact component={Login} />
          <Route path='/SignUp' exact component={SignUp} />
          <Route path='/Settings' exact component={Settings} />
          {/* <Route path='/' exact component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}
