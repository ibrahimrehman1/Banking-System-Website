const initialCustomersState: Object = [];

interface actionProps{
    type: string,
    payload: Object
}

export const customerReducer = (state = initialCustomersState, action: actionProps) =>{
    switch(action.type){
        default:
            return state;
    }
}