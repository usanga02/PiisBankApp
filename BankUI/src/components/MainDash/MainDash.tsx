
import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
import "./MainDash.css";
import Card from 'react-bootstrap/Card';
import { UilWallet } from '@iconscout/react-unicons';
import { UilQrcodeScan } from '@iconscout/react-unicons';
import { UilPricetagAlt } from '@iconscout/react-unicons';
import { UilUserArrows } from '@iconscout/react-unicons';
import { UilEnvelopeOpen } from '@iconscout/react-unicons';
import { UilRssAlt } from '@iconscout/react-unicons';
import { UilChatBubbleUser } from '@iconscout/react-unicons';
import { UilCreditCard } from '@iconscout/react-unicons';
import { UilInvoice } from '@iconscout/react-unicons';
import { UilMoneyBill } from '@iconscout/react-unicons';
import { UilUsdCircle } from '@iconscout/react-unicons';
import { UilUsdSquare } from '@iconscout/react-unicons';
import { UilYenCircle } from '@iconscout/react-unicons';
import { UilSuitcase } from '@iconscout/react-unicons';
import { UilReceipt } from '@iconscout/react-unicons'
import { UilBitcoin } from '@iconscout/react-unicons'
import data from '../../imgs/buyData.jpg';
import bill from '../../imgs/PayBill.jpg';
import transfer from '../../imgs/transfer.jpg';


const MainDash = () => {
  const accountName = localStorage.getItem('AccountName');
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <h2>Welcome, <span className="acctName">{accountName}</span></h2>
      <Cards />
      <br></br>
      <br></br>
      <div className="card23">
      <a href="">
        <Card style={{ width: '18rem' }}>
      <Card.Body className="img_body">
        <img src={data} alt="" className="card_img"/>
        <h2>Buy Airtime & Data</h2>
       {/* <div className="icons-dash">
       <UilWallet/>
       <UilCreditCard/>
       </div> */}
      </Card.Body>
    </Card></a>
    <a href="">
      <Card style={{ width: '18rem' }}>
      <Card.Body className="img_body">
      <Card.Body className="img_body">
        <img src={bill} alt="" className="card_img"/>
        <h2>Pay Bills</h2>
       {/* <div className="icons-dash">
       <UilWallet/>
       <UilCreditCard/>
       </div> */}
      </Card.Body>
      </Card.Body>
    </Card></a>
    <a href="">
      <Card style={{ width: '18rem' }}>
      <Card.Body className="img_body">
      <Card.Body className="img_body">
        <img src={transfer} alt="" className="card_img"/>
        <h2>Transfers</h2>
       {/* <div className="icons-dash">
       <UilWallet/>
       <UilCreditCard/>
       </div> */}
      </Card.Body>
      </Card.Body>
    </Card></a>
    </div>
    {/* <BasicTable /> */}
    </div>
  );
};

export default MainDash;
