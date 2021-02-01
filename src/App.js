import React from "react"
import {BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Error from "./Components/Error"

//Before adding a page to the route, be sure to import the page as shown below.
//import TestPage from "./Components/TestPage"

function App() {
    return (
        <main>
          <Navbar/>
          <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />

                {/*This below is how you add a page/view to the route.*/}
                {/* <Route path="/TestPage" component={TestPage}/> */}

                <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </main>
    )
}

export default App
