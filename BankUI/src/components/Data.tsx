import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

  export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Transfer",
      url: "/transfer",
    },
    {
      icon: UilUsersAlt,
      heading: "Transaction History",
      url: "/history",
    },
    // {
    //   icon: UilUsersAlt,
    //   heading: "New Account",
    //   url: "/createAccount",
    // },
    {
      icon: UilUsersAlt,
      heading: "Accounts",
      url: "/listAccounts",
    },
  ];

  export const cardsData = [
    {
      title: "Balance",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
    //   barValue: 70,
    //   value: "25,970",
      png: UilUsdSquare,
      // series: [
      //   {
      //     name: "Sales",
      //     // data: [31, 40, 28, 51, 42, 109, 100],
      //   },
      // ],
    },
    // {
    //   title: "Transaction History",
    //   color: {
    //     backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
    //     boxShadow: "0px 10px 20px 0px #FDC0C7",
    //   },
    // //   barValue: 80,
    // //   value: "14,270",
    //   png: UilMoneyWithdrawal,
    //   // series: [
    //   //   {
    //   //     name: "Transaction History",
    //   //     data: [10, 100, 50, 70, 80, 30, 40],
    //   //   },
    //   // ],
    // },
    
  ];

  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];