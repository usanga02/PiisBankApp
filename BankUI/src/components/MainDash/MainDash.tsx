
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
      <Card style={{ width: '18rem' }}>
      <Card.Body>
       <div className="icons-dash">
       <UilWallet/>
       <UilCreditCard/>
       </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <BasicTable />
    </div>
  );
};

export default MainDash;
