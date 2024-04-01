import Yello from "./assets/yellowCircle.svg";
import orange from "./assets/orangeCircle.svg";
import medico from "./assets/Medico.svg";
import Dashboard from "./assets/dashboard.svg";
import Claims from "./assets/claims.svg";
import Biller from "./assets/biller.svg";
import Path from "./assets/Path.svg";
import Health from "./assets/Health.svg";
import Aeroplane from "./assets/aeroplane.svg";
import {
  SideNav1,
  ImgDiv,
  Border,
  NavDiv,
  NavDiv1,
  Upgrade,
} from "../styles/styles.ts";

const SideNav = () => {
  return (
  <>

    <SideNav1>
      <ImgDiv>
        <img src={orange} alt="orange" />
        <img src={Yello} alt="yellow" style={{ marginLeft: "-20px" }} />
        <img src={medico} alt="medico" style={{ marginLeft: "-40px" }} />
      </ImgDiv>
      <Border></Border>

      <NavDiv>
        <img src={Dashboard} alt="dashboard" />
        <h5
          style={{
            color: "#5041BC",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Nunito",
            paddingLeft: "50px",
          }}
        >
          Dashboard
        </h5>
      </NavDiv>
      <NavDiv1>
        <img src={Claims} alt="Claims" />
        <h5
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Nunito",
            paddingLeft: "50px",
          }}
        >
          Claims
        </h5>
      </NavDiv1>
      <NavDiv1>
        <img src={Biller} alt="Biller" />
        <h5
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Nunito",
            paddingLeft: "50px",
          }}
        >
          Biller Queue
        </h5>
      </NavDiv1>
      <NavDiv1>
        <img src={Path} alt="Subs" />
        <h5
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Nunito",
            paddingLeft: "50px",
          }}
        >
          Subscription
        </h5>
      </NavDiv1>
      <NavDiv1>
        <img src={Health} alt="Health" />
        <h5
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Nunito",
            paddingLeft: "50px",
          }}
        >
          Health
        </h5>
      </NavDiv1>
      <Upgrade>
        <img src={Aeroplane} alt="" />
        <p style={{ color: "black", fontWeight: "700" }}>Want to Upgrade</p>
        <button
          style={{
            background: "#FF8057",
            color: "white",
            borderRadius: "20px",
            fontWeight: "700",
          }}
        >
          Upgrade Now
        </button>
      </Upgrade>
    </SideNav1>
    </>
  );
};

export default SideNav;
