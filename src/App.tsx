import React, { useState } from 'react';
import {Navbar} from "./components/NavbarComponent";
import { HomeComponent } from "./components/HomeComponent";
import { CustomersComponent } from "./components/CustomersComponent";
import {Switch, Route} from "react-router-dom";

interface Links{
  link: string,
  path: string
}

function App() {
  const[links, setLinks] = useState<Links[]>([
    {link: "Home", path:"/"}, 
    {link: "View all Customers", path: "/customers"}, 
    {link: "Contact", path: "contact"}
  ])

  return (
    <>
      <Navbar links={links}/>
      <Switch>
        <Route component={HomeComponent} path="/" exact/>
        <Route component={CustomersComponent} path="/customers" exact/>
      </Switch>
    </>

  );
}

export default App;
