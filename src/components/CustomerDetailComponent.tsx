import React from "react";
import {customersProps, stateProps} from "./CustomersComponent";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
 

export const CustomerDetailComponent:React.FC = () =>{
    const {id} = useParams<{id:string}>();
    let customers = useSelector((state: stateProps)=>{
        return state.customer.payload
    })

    let customer = customers.filter((customer, index)=>index===Number(id))
    console.log(customer);
    return(
        <div style={{marginTop: "100px", padding: "2em"}}>
            <h1>{id}</h1>
        </div>
    )
}