import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ListAccounts.css";
import Sidebar from "../Siderbar/Sidebar";
import { Link } from 'react-router-dom';

interface Transaction {
  AccountName: string;
  account_Number: number;
  balance: number;
  id: number;
}

function createData(
  AccountName: string,
  account_Number: number,
  balance: number,
  id: number
) {
  return { AccountName, account_Number, balance, id };
}

export default function ListAccounts() {
  const [rows, setRows] = useState<Transaction[]>([]);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get<Transaction[]>(
          `http://localhost:4000/Accounts/getAccountsByUser`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        const data = response.data;
        const transactionRows = data.map((transaction: Transaction) =>
          createData(
            transaction.AccountName,
            transaction.account_Number,
            transaction.balance,
            transaction.id
          )
        );
        setRows(transactionRows);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactions();
  }, [id, token]);

  const handleAccountNumberClick = (accountId: number, accountNumber: number) => {
    localStorage.setItem("selectedAccountId", accountNumber.toString());
    localStorage.setItem("id", accountId.toString());
  };

  const makeStyle = (status: string) => {
    if (status === "Successful") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#59bfff",
        color: "white",
      };
    } else {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    }
  };

  return (
    <div className="Appp">
      <div className="AppGlass">
        <Sidebar />
        <div className="Table">
          <br></br>
          <br></br>
          <br></br>
          <h3>Accounts</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Account Name</TableCell>
                  <TableCell align="left">Account Number</TableCell>
                  <TableCell align="left">Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.AccountName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.AccountName}
                    </TableCell>
                    <TableCell align="left">
                      <Link to='/dashboard'
                        onClick={() =>
                          handleAccountNumberClick(row.id, row.account_Number)
                        }
                      >
                        {row.account_Number}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
