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

        <h3>It is good to know basic Mandarin</h3>

        <p>
          It is not required to know Mandarin, but it is very helpful. If you plan on visiting cities like Beijing and Shanghai, then it
          would be fine to speak English. The younger generations are able to speak basic English and can help out when necessary. However, 
          if you are planning to visit cities like Yangshuo and Zhangjiajie, having a basic grasp of Mandarin is critical. People will be 
          appreciative if you make an effort to speak the language. 
        </p>

        <p>
          A lot of times, when going to restaurants in China, you may get a menu with only Chinese characters. For those who don't speak
          Chinese, this could lead to one randomly selecting a dish and hoping for the best. It is common for all kinds of animal anatomy
          to make it on your plate. If you are in a bigger city like Beijing or Shanghai, menus in English or with pictures are common. 
        </p>

        <h3>Bring your own Napkins and Toilet Paper</h3>

        <p>
          Most restaurants in China dont have napkins. Make sure to bring your own supply with you.  
        </p>

        <p>
          Rarely, bathrooms in China are stocked with toilet paper. 
          <p>
            Also, be prepared to use squat potties.
          </p>
          <p>
            In addition, it would not be a bad idea to carry around hand sanitizer. 
          </p>
        </p>

        <h3>Bargain for everything</h3>

        <p>
          Everything can be bargained for in China, even groceries. At most places, you can expect to pay significantly less than 
          the starting price. 
        </p>

             
      </div>
    );
  }
}