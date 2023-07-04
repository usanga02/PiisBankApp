import React, { useEffect, useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios, { AxiosError } from 'axios';
import { UilTimes } from "@iconscout/react-unicons";
import { Link } from 'react-router-dom';

interface CardProps {
  param: {
    png: any;
    color: {
      backGround: string;
      boxShadow: string;
    };
    title: string;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { param } = props;
  const Png = param.png;
  const [accountData, setAccountData] = useState<any>(null);
  const access_token = localStorage.getItem('access_token');
  const id = localStorage.getItem('id');
  const selectedAccountId = localStorage.getItem('selectedAccountId');

  useEffect(() => {
    fetchAccountData();
  }, [selectedAccountId]); // Trigger effect when selectedAccountId changes

  const fetchAccountData = async () => {
    try {
      const baseURL = `http://localhost:4000/Accounts/${id}`;
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
      });
      setAccountData(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
    }
  };

  return (
    <>
      <div
        className="CompactCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
      >
        <div className="radialBar">
          <span>{param.title}</span>
          <h3>Account Number</h3>
        </div>
        <div className="detail">
          <Png />
          {/* Display the account balance and account number */}
          <span>{accountData?.balance}</span>
          <span>{accountData?.account_Number}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
