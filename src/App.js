
import React, { Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from "./Componentes/Index"
function App() {
  return (
    <Fragment>
          <Router>
              <Switch>
                <Route 
                  exact 
                  path = "/"  
                  render={() => 
                              <Index 
                                  //apiUrlState = {apiUrlState}
                                  
                                />
                          } 
                />
              </Switch>
            
          </Router>
          
      </Fragment>
  );
}

export default App;
