import React, { useState, useEffect } from 'react';
import {Navbar} from "./components/NavbarComponent";
import { HomeComponent } from "./components/HomeComponent";
import { CustomersComponent } from "./components/CustomersComponent";
import {Switch, Route} from "react-router-dom";
import {UpdateCustomer} from "./redux/actionCreator";
import {useDispatch} from "react-redux";
import {CustomerDetailComponent} from "./components/CustomerDetailComponent";

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

  let dispatch = useDispatch();
  useEffect(()=>{
    async function fetchCustomers(){
      let val = await fetch("http://localhost:5000/customers");
      let data = await val.json();
      console.log(data);
      dispatch(UpdateCustomer(data.customers))
    }
  
    fetchCustomers()
  }, [])



  return (
    <>
      <Navbar links={links}/>
      <Switch>
        <Route component={HomeComponent} path="/" exact/>
        <Route component={CustomersComponent} path="/customers" exact/>
        <Route component={CustomerDetailComponent} path="/customerdetail/:id" exact/>
      </Switch>
    </>

  );
}

export default App;
