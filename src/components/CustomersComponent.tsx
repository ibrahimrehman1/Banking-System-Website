import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableBody: {
    opacity: .6
  }
});


export interface customersProps{
  accountType: string,
  city: string,
  currentBalance: number,
  email: string,
  lastTransaction: string,
  mobileNo: number,
  name: string,
  _id: string
}

export interface stateProps{
  customer: {
    payload: customersProps[]
  }
}


const CustomersComponent: React.FC = () => {
    const classes = useStyles();
    const [customers, setCustomers] = useState<customersProps[]>([]);

    const history = useHistory();

    useEffect(()=>{
        document.title = "View All Customers"
        document.querySelector(".Home")?.classList.remove("active-link");
        document.querySelector(".View")?.classList.add("active-link");
        document.querySelector(".Contact")?.classList.remove("active-link");
    }, [])

    let newCustomers = useSelector((state: stateProps)=>{
      return state.customer.payload
    })

    if (customers !== newCustomers){
      setCustomers(newCustomers);
    }
    return (
        <div style={{padding: "2em", marginTop: "150px"}}>
          
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Customer Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell>Account Type</TableCell>
                    <TableCell align="center">Mobile No</TableCell>
                    <TableCell align="center">City</TableCell>
                    <TableCell align="center">Current Balance</TableCell>
                    <TableCell align="center">Last Transaction</TableCell>
                </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                {customers.map((customer, index) => (
                    <TableRow key={index} onClick={()=>history.push(`/customerdetail/${index}`)} className="tablebody-row">
                      <TableCell component="th" scope="row" align="center">
                          {customer.name}
                      </TableCell>
                      <TableCell align="center">{customer.email}</TableCell>
                      <TableCell align="center">{customer.accountType}</TableCell>
                      <TableCell align="center">{customer.mobileNo}</TableCell>
                      <TableCell align="center">{customer.city}</TableCell>
                      <TableCell align="center">{customer.currentBalance}</TableCell>
                      <TableCell align="center">{customer.lastTransaction}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export {CustomersComponent};