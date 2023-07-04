import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Sidebar from "../Siderbar/Sidebar";
import "./Transfer.css";
import { Link, useNavigate } from 'react-router-dom';

const Transfer = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState<number>(0);
  const [accountData, setAccountData] = useState<any>(null);
  const id = localStorage.getItem('id');
  const baseURL = `http://localhost:4000/Accounts/${id}/send-money/:recipientId`;
  const baseURL1 = "http://localhost:4000/Accounts/getAccounts";

  useEffect(() => {
    fetchAccountData();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const balance = Number(formData.get('balance'));
    const accountNumber = Number(formData.get('account_Number'));

    try {
      const recipientId = localStorage.getItem('selectedAccountId');
      const selectedUserId = localStorage.getItem('selectedUserId'); // Get the stored userId
      const endpoint = baseURL.replace(':recipientId', recipientId!);

      const response = await axios.post(endpoint, { userId: selectedUserId, balance, account_Number: accountNumber }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });

      console.log(response.data);
      alert("Transfer done successfully");
      navigate('/dashboard');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
    }
  };

  const handleRecipientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRecipient = Number(event.target.value);
    const selectedAccount = accountData.find((account: any) => account.account_Number === selectedRecipient);

    if (selectedAccount) {
      const selectedAccountId = selectedAccount.id;
      const selectedUserId = selectedAccount.userId;
      console.log('Selected ID:', selectedAccountId);
      localStorage.setItem('selectedAccountId', selectedAccountId.toString());
      localStorage.setItem('selectedUserId', selectedUserId.toString());
    }

    setRecipient(selectedRecipient);
  };

  const fetchAccountData = async () => {
    try {
      const response = await axios.get(baseURL1, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        // },
      });
      setAccountData(response.data);

      // Extract account numbers from the response data and update the dropdown options
      const accountNumbers = response.data.map((account: any) => account.account_Number);
      setRecipient(Number(accountNumbers[0])); // Set the first account number as the initial value
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
    }
  };

  return (
    <div className="Appp">
      <div className="AppGlass">
        <Sidebar />
        <div className="Card">
          <h2>Transfer Form</h2>
          <div className="Card">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="recipient">Recipient</label>
                <select id="recipient" name="account_Number" value={recipient} onChange={handleRecipientChange}>
                  {accountData && accountData.map((account: any) => (
                    <option key={account.userId} value={account.account_Number}>
                      {account.account_Number}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input type="number" id="balance" name="balance" step="0.01" required />
              </div>
              <button type="submit" className="button">Transfer</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
