import sale from "../images/SELL.png";
import purchase from "../images/purchease.png";
import order from "../images/ORDERS.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";
const Disclaimer = () => {
  return (
    <>
      <main className="dashboard">
        <div className="sidebar">
          <ul>
            <li className="sidebarLinks">
              <span>🏠</span>
              <Link to="/">Home</Link>
            </li>
            <li className="sidebarLinks">
              {" "}
              <span>📊</span>
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebarLinks">
              <span>🍿</span>
              <a href="products.html">Products</a>
            </li>
            <li className="sidebarLinks">
              <span>🚉</span>
              <a href="addproducts.html">Add-Product </a>
            </li>
            <li className="sidebarLinks">
              <span>📇</span>
              <a href="sales.html">Sales</a>
            </li>
            <li className="sidebarLinks">
              <span>🎰</span>
              <a href="customers.html">Customers</a>
            </li>
            <li className="sidebarLinks">
              <span>🌐</span>
              <a href="affiliates.html">Affiliates</a>
            </li>
            <li className="sidebarLinks">
              <span>⏳</span>
              <a href="inventry.html">Inventry</a>
            </li>
            <li className="sidebarLinks">
              <span>📈</span>
              <a href="purchase.html">Purchase-Order</a>
            </li>
            <li className="sidebarLinks">
              <span>🎢</span>
              <a href="salesorder.html">Sales-Order</a>
            </li>
            <li className="sidebarLinks">
              <span>📁</span>
              <a href="reports.html">Reports</a>
            </li>
            <li className="sidebarLinks">
              <span>📩</span>
              <a href="messages.html">Messages</a>
            </li>
            <li className="sidebarLinks">
              <span>⚙️</span>
              <a href="settings.html">Settings</a>
            </li>
          </ul>
        </div>
        <div className="mainbar">
          <h1>MY DASHBOARD</h1>

          <div className="dashcard">
            <div className="products">
              <div className="title">Products</div>
              <i className="icon">🍿</i>
              <p className="rating">460</p>
            </div>
            <div className="products">
              <div className="title">Sales Order</div>
              <i className="icon">🎢</i>
              <p className="rating">120</p>
            </div>
            <div className="products">
              <div className="title">Purchase Order</div>
              <i className="icon">📈</i>
              <p className="rating">100</p>
            </div>
            <div className="products">
              <div className="title">Customers</div>
              <i className="icon">🎰</i>
              <p className="rating">200 +</p>
            </div>
          </div>

          <div className="analytics">
            <div className="sales">
              <h2 className="sall">SALES ANALYTICS</h2>
              <img className="simage1" src={sale} alt="pic" />
            </div>
            <div className="sales">
              <h2 className="purchase">PURCHACE ANALYTICS </h2>
              <img className="simage2" src={purchase} alt="pic" />
            </div>

            <div className="purchse">
              <h2 className="simage1">PURCHASE </h2>
              <img className="sales" src={purchase} alt="pic" />
            </div>
          </div>
          <div className="unitorder">
            <h2 className="ordes">UNIT ORDERED ANALYTICS</h2>
            <img className="simage3" src={order} alt="pic" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Disclaimer;
