import {customersProps} from "../components/CustomersComponent";

const UPDATE_CUSTOMERS: string = "UPDATECUSTOMER";
const UPDATE_SENDER: string = "UPDATESENDER";
const UPDATE_RECEIVER: string = "UPDATERECEIVER";
const UPDATE_CUSTOMER_DATA:string = "UPDATECUSTOMERDATA";

export const UpdateCustomer = (data: customersProps[]) => {
    return({
        type: UPDATE_CUSTOMERS,
        payload: data
    })
}

export const UpdateSender = (data: string) =>{
    return({
        type: UPDATE_SENDER,
        payload: data
    })
}

export const UpdateReceiver = (data: string) =>{
    return({
        type: UPDATE_RECEIVER,
        payload: data
    })
}

export const UpdateCustomerData = (data: [string, string, number]) =>{
    return({
        type: UPDATE_CUSTOMER_DATA,
        payload: data
    })
}


