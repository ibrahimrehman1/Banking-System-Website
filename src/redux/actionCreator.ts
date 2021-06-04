const UPDATE_CUSTOMERS: string = "UPDATECUSTOMER";


export const UpdateCustomer = (data: Object) => {
    return({
        type: UPDATE_CUSTOMERS,
        payload: data
    })
}

export {};