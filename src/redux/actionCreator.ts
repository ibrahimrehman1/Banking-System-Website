import {customersProps} from "../components/CustomersComponent";

const UPDATE_CUSTOMERS: string = "UPDATECUSTOMER";


export const UpdateCustomer = (data: customersProps[]) => {
    console.log(data);
    return({
        type: UPDATE_CUSTOMERS,
        payload: data
    })
}

