import React, {useState} from "react";
import {customersProps, stateProps} from "./CustomersComponent";
import { makeStyles } from '@material-ui/core/styles';
import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {UpdateReceiver} from "../redux/actionCreator";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign: "center",
      padding: "2em"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  



export const CustomerDetailComponent:React.FC = () =>{
    const {id} = useParams<{id:string}>();
    let customers = useSelector((state: stateProps)=>{
        return state.customer.customers
    })

    const [customer, setCustomer] = useState<customersProps[]>([])

    if (!customer.length && customers){
        let custom = customers.filter((customer, index)=>index===Number(id))
        setCustomer(custom)
    }

    const classes = useStyles();
    const history = useHistory();
    
    let dispatch = useDispatch();


    function setReceiver(receiver:string){
        dispatch(UpdateReceiver(receiver));
        history.push("/customers")

    }

    


    return(
        <div style={{marginTop: "100px", padding: "2em"}}>
            {customer.length && <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {customer[0].accountType}
        </Typography>
        <Typography variant="h5" component="h2">
          {customer[0].name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {customer[0].city}
        </Typography>
        <Typography variant="body2" component="p">
          {customer[0].email}
          <br />
          Current Balance: {customer[0].currentBalance}
          <br />
          Mobile No: {customer[0].mobileNo}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={{textAlign: "center"}} color="secondary" variant="contained" onClick={()=>setReceiver(customer[0].name)}>Transfer Money</Button>
      </CardActions>
    </Card> }
        </div>
    )
}