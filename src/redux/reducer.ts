import {customersProps} from "../components/CustomersComponent";

const initialCustomersState: Object = [];

interface actionProps{
    type: string,
    payload: customersProps[]
}

export const customerReducer = (state = initialCustomersState, action: actionProps) =>{
    switch(action.type){
        default:
            return {payload: action.payload};
    }
}