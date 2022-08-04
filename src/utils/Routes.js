import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Dashboard from '../pages/Dashboard'
import Detail from '../pages/Detail'
import Login from '../pages/Login'

function Routes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Switch location={location} key={location.pathname} >
            <Route path="/" component={Login} exact/>
            <Route path='/Home' component={Dashboard} exact />
            <Route path='/detail' component={Detail} exact />
        </Switch>
    </AnimatePresence>
    
  )
}

export default Routes