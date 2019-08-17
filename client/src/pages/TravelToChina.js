import React, { Component } from "react";
import Navbar from "../navbar/navbar";

export default class TravelToChina extends Component {
  render() {
    return (
      <div>
        <h1>You want to travel to China? You have come to the right page!</h1>  
        <Navbar />    

        <h2>Travel Tips to China</h2>
        <h3>These tips come from the Earth Trekkers webpage: 
          <a href="https://www.earthtrekkers.com/china-travel-tips/"> Tips for traveling to China</a>
        </h3>

        <h3>Get a Visa before entering China</h3>
        
   
        
        <p>
          This is definitely one of the most important steps. Without the visa, you will not be allowed to enter the country.    
          When filling out the application for the visa, be sure to provide travel dates, itenerary, and proof of travel. 
          This application must be typed and it may not have hand-written corrections. 

          <ul>
            <li>Full details on the application: 
              <a href="http://www.china-embassy.org/eng/visas/"> Getting a visa</a>
              
            </li>
            <li>Short trip/layover in China: 
              <a href="https://www.travelchinacheaper.com/china-visa-free-transit-guide"> Layover in China</a>
            </li>
          </ul>
        </p>

        <h3>Make sure to have a VPN before traveling to China</h3>

        <p>
          A VPN is known as a Virtual Private Network. It will disguise the computer's IP (Internet Protocol) address, so that it will
          look like you are connected from the US or Australia, even though you are in China. The Great Firewall of China will block access
          to common sites like Google, Facebook, Twitter, etc. 
        </p>

        <p>
            Make sure to purchase the VPN before you are in China. If you travel to China without a VPN, and want to access Google, or other 
            sites, you are SOL. 
        </p>

             
      </div>
    );
  }
}