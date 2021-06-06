import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {customersProps, stateProps} from "./CustomersComponent";
import {reducerStateProps} from "./CustomersComponent";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UpdateCustomerData } from "../redux/actionCreator";

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

    let receiver = useSelector((state: reducerStateProps)=>{
        return state.customer.receiver
      })
  

    const [customer, setCustomer] = useState<customersProps[]>([])
    const [receiverBalance, setBalance] = useState<number>(0);

    if (!customer.length && customers){
        let custom = customers.filter((customer, index)=>index===Number(id))
        let receiverAmount = customers.filter((customer, index)=>customer.name === receiver)
        setBalance(receiverAmount[0].currentBalance)
        setCustomer(custom)
    }

    useEffect(()=>{
        document.title = `Transfer Money`
      }, [])
  
    

    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        amount: "",
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({amount: event.target.value});
    };

    async function handleTransfer(){
        let amount = Number(values.amount);
        if (amount > customer[0].currentBalance){
            alert("Amount Out of Range!")
        }else if (amount < 0 || amount == 0){
            alert("Invalid Amount!")
        }else{
            dispatch(UpdateCustomerData([customer[0].name, receiver, amount]))
            
            let val = await fetch("https://basic-banking-website1.herokuapp.com/transfers", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({sender: customer[0].name, receiver, amount, date: String(new Date())})
            })
            let data = await val.json();
            console.log(data);


            let val2 = await fetch("https://basic-banking-website1.herokuapp.com/updatecustomers", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({sender: customer[0].name, receiver, amount, date: String(new Date()), senderCurrentBalance: customer[0].currentBalance, receiverCurrentBalance: receiverBalance})
            })
            let data2 = await val2.json();
            console.log(data2);

            history.push("/customers")
        }
    }


    return(
        <div style={{marginTop: "200px", padding: "2em"}}>
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