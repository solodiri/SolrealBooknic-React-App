import logo from "../images/SR 3D.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <>
      <section className="footerContainer">
        <div className="footleftFooter">
          <div className="footlogocon">
            <img src={logo} className="logosr" alt={logo} />
            <h2 className="footlogo">
              <Link to="/">SODIREAL</Link>
            </h2>
          </div>
        </div>
        <div className="middleFooter">
          <div className="socialHead">SOCIALS</div>
          <div className="social">
            <Link to="https://www.facebook.com/solodiri" target="_blank">
              FACEBOOK
            </Link>
          </div>
          <div className="social">
            <Link to="https://www.twitter.com/solodiri" target="_blank">
              TWITTER
            </Link>
          </div>

          <div className="social">
            <Link to="https://www.github.com/SOLODIRI" target="_blank">
              GITHUB
            </Link>
          </div>
          <div className="social">
            <Link to="https://www.instagram.com/dirisolomon" target="_blank">
              INSTAGRAM
            </Link>
          </div>
        </div>

        <div className="rightFooter">
          <div className="socialHead">CONTACT / PHONE</div>
          <div className="contact">CONTACT: HILLTOP VILLA PORT HARCOURT</div>
          <div className="phone">PHONE: +234 803 750 3775</div>
        </div>
      </section>

      <div className="agreement">
        <div className="condition">
          <Link to="/Conditions"> Terms and Comditions</Link>
        </div>
        <div className="policy">
          <Link to="/Privacy"> Notice and Privacy</Link>
        </div>
        <div className="return">
          <Link to="/Disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="bottomFooter">
        <div>@ CopyRight sodireal.com Inc. 2020-{new Date().getFullYear()}</div>
        {/* <span className="thisyear">YEAR</span> */}
      </div>
    </>
  );
};
export default Footer1;
