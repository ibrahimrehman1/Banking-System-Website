import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {customersProps, stateProps} from "./CustomersComponent";
import {reducerStateProps} from "./CustomersComponent";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


interface State {
    amount: string;
}
  
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      marginTop: "50px"
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);



export const MoneyTransferComponent: React.FC = () =>{
    const {id} = useParams<{id:string}>();
    let customers = useSelector((state: stateProps)=>{
        return state.customer.customers
    })

    const [customer, setCustomer] = useState<customersProps[]>([])

    if (!customer.length && customers){
        let custom = customers.filter((customer, index)=>index===Number(id))
        setCustomer(custom)
    }

    let receiver = useSelector((state: reducerStateProps)=>{
        return state.customer.receiver
      })
  

    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        amount: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({amount: event.target.value});
    };

    function handleTransfer(){
        let amount = Number(values.amount);
        if (amount > customer[0].currentBalance){
            alert("Amount Out of Range!")
        }else if (amount < 0 || amount == 0){
            alert("Invalid Amount!")
        }else{
            console.log(amount);
        }
    }


    return(
        <div style={{marginTop: "150px", padding: "2em"}}>
            <h1 style={{textAlign: "center"}}>Sender: {customer.length ? customer[0].name : ""}</h1>
            <h4 style={{textAlign: "center", opacity: ".8"}}>Current Balance: {customer.length ? customer[0].currentBalance : ""}</h4>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange}
                    labelWidth={60}
                />
                <Button size="large" style={{textAlign: "center", marginTop: '30px', marginLeft: "auto", marginRight: "auto", width: "300px"}} color="secondary" variant="contained" onClick={handleTransfer}>Transfer Amount</Button>

            </FormControl>
            
            
            <h2 style={{textAlign: "center", marginTop: '100px'}}>Receiver: {receiver ? receiver : ""}</h2>
        </div>
    )
}