import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import HomeComponent from './Home'
import ProjectsComponent from './Projects'
import AboutusComponent from './Aboutus'
import ContectsusComponent from './Contectus'


export default function content() {
  return (
    <div className="content">
        
            <Switch>
        <Route exact path = "/">
                <HomeComponent></HomeComponent>
                </Route>
            <Route path = "/Home">
                <HomeComponent></HomeComponent>
            </Route>
            <Route path = "/Projects">
                <ProjectsComponent></ProjectsComponent>
            </Route>
            <Route path = "/Contectus">
                <ContectsusComponent></ContectsusComponent>
            </Route>
            <Route path = "/Aboutus">
                <AboutusComponent></AboutusComponent>
            </Route>
            </Switch>
        
        
        
        </div>
  )
}
