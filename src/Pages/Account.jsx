import React from 'react'
import User from '../img/userprofile.jpeg'
import { Link } from 'react-router-dom';


function Account() {  
  return (
    <Link to="/account-preview">
      <div className='account'>
              <section id="container-enteries">
              <div class="grid-box">
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
                <div class="grid">
                  <img src={User} alt="profile picture" />
                  <small><h3>CUSTOMER DETAILS</h3>
                  <p>batch code:</p>
                  <p>Acount Number: **********12</p>
                </small>
                </div>
              </div>
              </section>
            
      </div>
      </Link>  
  )
}

export default Account
