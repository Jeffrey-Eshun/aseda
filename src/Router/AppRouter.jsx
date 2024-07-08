import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Account from '../Pages/Account';
import AccountPreview from '../Pages/AccountPreview';
import CreateAccount from '../Pages/CreateAccount';
import Deposit from '../Pages/Deposit';
import Loan from '../Pages/Loan';
import Transaction from '../Pages/Transaction';
import Withdrawal from '../Pages/Withdrawal';


const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
         {
            path: '/',
            element: <Account />,
            index: true,
         },
         
         {
            path: '/account-preview',
            element: <AccountPreview />,
         },
         
         {
            path: '/create-account',
            element: <CreateAccount />,
         },
         
         {
            path: '/deposit',
            element: <Deposit />,
         },
         
         {
            path: '/loan',
            element: <Loan />,
         },

         {
            path: '/transaction',
            element: <Transaction />,
         },

         {
            path: '/withdrawal',
            element: <Withdrawal />,
         },
        ],
    },
]);

export default AppRouter;


