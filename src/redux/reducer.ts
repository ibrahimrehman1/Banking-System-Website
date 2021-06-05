import {customersProps} from "../components/CustomersComponent";


const initialCustomersState = {
    customers: [],
    sender: "",
    receiver: ""

};

interface reducerState{
    customers: customersProps[],
    sender: string,
    receiver: string
}

interface customerActionProps{
    type: string,
    payload: customersProps[] | string | [string, string, number]
}

export const customerReducer = (state:reducerState = initialCustomersState, action: customerActionProps) =>{
    switch(action.type){
        case "UPDATECUSTOMER":
            return {...state, customers: action.payload};

        case "UPDATESENDER":
            return {...state, sender: action.payload}

        case "UPDATERECEIVER":
            return {...state, receiver: action.payload}

        case "UPDATECUSTOMERDATA":
            let sendUser = action.payload[0]
            let receiveUser = action.payload[1]
            let amount = action.payload[2]
            let newCustomers = state.customers.map((customer:customersProps, index)=>{
                if (customer.name === sendUser){
                    return {...customer, currentBalance: customer.currentBalance-Number(amount)}
                }else if (customer.name === receiveUser){
                    return {...customer, currentBalance: customer.currentBalance + Number(amount)}
                }else{
                    return customer
                }
            })

            return {customers: newCustomers, sender: "", receiver: ""};

        default:
            return state
    }
}
