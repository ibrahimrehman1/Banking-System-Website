import {customersProps} from "../components/CustomersComponent";

const initialCustomersState = {
    customers: [],
    sender: "",
    receiver: ""

};

interface customerActionProps{
    type: string,
    payload: customersProps[] | string
}

export const customerReducer = (state = initialCustomersState, action: customerActionProps) =>{
    switch(action.type){
        case "UPDATECUSTOMER":
            return {...state, customers: action.payload};

        case "UPDATESENDER":
            return {...state, sender: action.payload}

        case "UPDATERECEIVER":
            return {...state, receiver: action.payload}

        default:
            return state
    }
}
