import React from 'react';
import Aseda from '../img/Aseda_Micro.png';
import User from '../img/userprofile.jpeg';
import { Link } from 'react-router-dom';


function AccountPreview() {
  return (
    
        <div className='account-preview'>
          <fieldset>
            <legend>
            </legend>
            <div className="container">
              <h2>Account Information</h2>
              <h3>ASEDA MICROFINANCE</h3>
              <div className="user-image">
                <img src={User} alt="user profile" />
              </div>
              <p>User Name:</p>
              <p>Account Number:</p>
              <p>Batch Code:</p>
              <p>User Status: ------- Active</p>
              <p>Balance:</p>
            </div>
            <br />
            <br />
            <br />
            <div className="summary-period">
              <div className="cash-bank">
                <div className="state">
                  <h2>Financial Position</h2>
                  <p>As at 3/12/2024</p>
                  <hr /><hr />
                </div>
                <div style={{ borderRadius: '15px' }} className="bank-details">
                  <div className="cash">
                    
                      <li>Cash at Bank</li>
                      <li>Cash in Hand</li>
                      <li>Deposit</li>
                    
                  </div>
                  <hr />
                  <div className="amount">
                    <li>Ghc 100,000</li>
                    <li>Ghc 1000</li>
                    <li>Ghc 2000</li>
                  </div>
                </div>
                <div style={{ border: '1px solid black', borderRadius: '15px' }} className="accounts">
                  <div className="bank1">
                    <div>Current Account</div>
                    <div>GH 500,000</div>
                  </div>
                  <hr />
                  <div className="bank2">
                    <div>Savings Account</div>
                    <div>GH 1,000</div>
                  </div>
                </div>
              </div>
              <div style={{ border: '1px    solid black', borderRadius: '15px' }} className="income">
                <div className="income-in">
                  <div>Income</div>
                  <div>GH 4,000</div>
                </div>
                <hr />
                <div>
                  <ol>
                    <li>Foreign Exchange</li>
                    <li>Inventory</li>
                    <li>Interest Received</li>
                    <li>Sales</li>
                  </ol>
                </div>
              </div>
              <div style={{ border: '1px solid black', borderRadius: '15px' }} className="other-asset">
                <div className="assets">
                  <div>Asset</div>
                  <div>GH 500,000</div>
                </div>
                <hr />
                <ol>
                  <li>Motor Bike </li>
                  <li>Buildings</li>
                  <li>Furniture</li>
                  <li>Cash</li>
                  <li>Deposit</li>
                  <li>Machinery</li>
                </ol>
              </div>
              <div className="expenses">
                <div className="oweings">
                  <div>Less Expenses</div>
                  <div>GH 0.00</div>
                </div>
                <hr />
                <ol>
                  <li>Bank charges</li>
                  <li>Advertising and Promotion</li>
                  <li>Account fees</li>
                  <li>Monthly maintenance/service fee</li>
                  <li>Out-of-network ATM fee</li>
                  <li>Excessive transactions fee</li>
                  <li>Overdraft fee</li>
                  <li>Insufficient fund fee</li>
                  <li>Wire transfer fee</li>
                </ol>
              </div>
            </div>
            <footer>
              <p>Copyright &copy; 2024 for ASEDA MICROFINANCE</p>
            </footer>
          </fieldset>
        </div>
     
  );
}

export default AccountPreview;
