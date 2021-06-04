import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


interface customersProps{
  accountType: string,
  city: string,
  currentBalance: number,
  email: string,
  lastTransaction: string,
  mobileNo: number,
  name: string,
  _id: string
}

const CustomersComponent: React.FC = () => {
    const classes = useStyles();
    const [customers, setCustomers] = useState<customersProps[]>([]);


    useEffect(()=>{
        document.title = "View All Customers"
        document.querySelector(".Home")?.classList.remove("active-link");
        document.querySelector(".View")?.classList.add("active-link");
        document.querySelector(".Contact")?.classList.remove("active-link");
        async function fetchCustomers(){
          let val = await fetch("http://localhost:5000/customers");
          let data = await val.json();
          setCustomers(data.customers)
        }

        fetchCustomers()
    }, [])


    return (
        <div style={{padding: "2em", marginTop: "150px"}}>
          
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Customer Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Account Type</TableCell>
                    <TableCell align="right">Mobile No</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">Current Balance</TableCell>
                    <TableCell align="right">Last Transaction</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {customers.map((customer, index) => (
                    <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {customer.name}
                    </TableCell>
                    <TableCell align="right">{customer.email}</TableCell>
                    <TableCell align="right">{customer.accountType}</TableCell>
                    <TableCell align="right">{customer.mobileNo}</TableCell>
                    <TableCell align="right">{customer.city}</TableCell>
                    <TableCell align="right">{customer.currentBalance}</TableCell>
                    <TableCell align="right">{customer.lastTransaction}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export {CustomersComponent};