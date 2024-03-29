import "./App.css";
import styled from "styled-components";
import Yello from "./assets/yellowCircle.svg";
import orange from "./assets/orangeCircle.svg";
import medico from "./assets/Medico.svg";
import Dashboard from "./assets/dashboard.svg";
import Claims from "./assets/claims.svg";
import Biller from "./assets/biller.svg";
import Path from "./assets/Path.svg";
import Health from "./assets/Health.svg";
import Aeroplane from "./assets/aeroplane.svg";
import Search1 from "./assets/search icon.svg";
import Notification1 from "./assets/Notification.svg";
import Arror from "./assets/arror.svg";
import Girl from "./assets/girl1.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Cart1 from "./assets/cart.svg";
import Pink from "./assets/pinkarrow.svg";
import Green from "./assets/greenarror.svg";
import Graph from "./assets/graph.svg";
import Calender from "./assets/calender.svg";
import Human from "./assets/human.svg";
import BigGraph from "./assets/graph card.svg";
import Atm from "./assets/atm.jpg";
function App() {
  return (
    <>
      <ParentDiv>
        <SideNav>
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
        </SideNav>
        <Main>
          <TopDiv>
            <Overview>
              <h1
                style={{ color: "black", fontSize: "32px", fontWeight: "700" }}
              >
                Overview
              </h1>
            </Overview>
            <Search>
              <p
                style={{
                  color: "#5041BC",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Search
              </p>
              <img src={Search1} alt="" style={{ width: "5%" }} />
            </Search>
            <Notification>
              <img src={Notification1} alt="" style={{ width: "5%" }} />
              <img src={Girl} alt="" style={{ width: "20%" }} />
              <p
                style={{
                  color: "#5041BC",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Danielle Campbell{" "}
              </p>
              <img src={Arror} alt="" style={{ width: "5%" }} />
            </Notification>
          </TopDiv>
          <div>
            <p
              style={{ color: "black", fontWeight: "700", paddingLeft: "20px" }}
            >
              Top Sales Representative
            </p>
          </div>
          <Table>
            <div style={{ marginTop: "20px" }}>
              <img src={Girl} alt="" />
            </div>

            <p style={{ color: "#797D8C", fontWeight: "600" }}>
              Nicholas Patrick
            </p>
            <p style={{ color: "#04103B", fontWeight: "800" }}>$2567.56</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>150 Products</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>105 Premium</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>+Gold</p>

            <HiOutlineDotsVertical color="black" />
          </Table>
          <Table>
            <div style={{ marginTop: "20px" }}>
              <img src={Girl} alt="" />
            </div>

            <p style={{ color: "#797D8C", fontWeight: "600" }}>
              Nicholas Patrick
            </p>
            <p style={{ color: "#04103B", fontWeight: "800" }}>$2567.56</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>150 Products</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>105 Premium</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>+Gold</p>

            <HiOutlineDotsVertical color="black" />
          </Table>
          <Table>
            <div style={{ marginTop: "20px" }}>
              <img src={Girl} alt="" />
            </div>

            <p style={{ color: "#797D8C", fontWeight: "600" }}>
              Nicholas Patrick
            </p>
            <p style={{ color: "#04103B", fontWeight: "800" }}>$2567.56</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>150 Products</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>105 Premium</p>
            <p style={{ color: "#797D8C", fontWeight: "600" }}>+Gold</p>

            <HiOutlineDotsVertical color="black" />
          </Table>
          <Statistics>
            <Cart>
              <Sub1>
                <p
                  style={{
                    color: "#797D8C",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Product Sold
                </p>
                <h1
                  style={{
                    color: "#04103B",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  $2,437K
                </h1>
                <Sub22>
                  <img src={Green} alt="" />
                  <p style={{ color: "#797D8C", fontWeight: "600" }}>+15%</p>
                </Sub22>
              </Sub1>
              <Sub2>
                <div>
                  <img src={Cart1} alt="" />
                </div>

                <p
                  style={{
                    color: "#5041BC",
                    fontWeight: "600",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  View Report
                </p>
              </Sub2>
            </Cart>
            <Cart>
              <Sub1>
                <p
                  style={{
                    color: "#797D8C",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Product Sold
                </p>
                <h1
                  style={{
                    color: "#04103B",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  $2,437K
                </h1>
                <Sub22>
                  <img src={Pink} alt="" />
                  <p style={{ color: "#797D8C", fontWeight: "600" }}>+15%</p>
                </Sub22>
              </Sub1>
              <Sub2>
                <div>
                  <img src={Graph} alt="" />
                </div>

                <p
                  style={{
                    color: "#5041BC",
                    fontWeight: "600",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  View Report
                </p>
              </Sub2>
            </Cart>
            <Cart>
              <Sub1>
                <p
                  style={{
                    color: "#797D8C",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Product Sold
                </p>
                <h1
                  style={{
                    color: "#04103B",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  $2,437K
                </h1>
                <Sub22>
                  <img src={Green} alt="" />
                  <p style={{ color: "#797D8C", fontWeight: "600" }}>+15%</p>
                </Sub22>
              </Sub1>
              <Sub2>
                <div>
                  <img src={Calender} alt="" />
                </div>

                <p
                  style={{
                    color: "#5041BC",
                    fontWeight: "600",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  View Report
                </p>
              </Sub2>
            </Cart>
            <Cart>
              <Sub1>
                <p
                  style={{
                    color: "#797D8C",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Product Sold
                </p>
                <h1
                  style={{
                    color: "#04103B",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  $2,437K
                </h1>
                <Sub22>
                  <img src={Green} alt="" />
                  <p style={{ color: "#797D8C", fontWeight: "600" }}>+15%</p>
                </Sub22>
              </Sub1>
              <Sub2>
                <div>
                  <img src={Human} alt="" />
                </div>

                <p
                  style={{
                    color: "#5041BC",
                    fontWeight: "600",
                    textDecoration: "underline",
                    fontSize: "14px",
                  }}
                >
                  View Report
                </p>
              </Sub2>
            </Cart>
          </Statistics>
          <LastDiv>
            <div>
              <img src={BigGraph} alt="" />
            </div>
            <div>
              <img src={Atm} alt="" style={{width: "90%", marginLeft: "20px", marginTop: "15px"}} />
            </div>
          </LastDiv>
        </Main>
      </ParentDiv>
    </>
  );
}

export default App;

const ParentDiv = styled.div`
  display: flex;
  width: 1443px;
  height: 956px;
  top: 121px;
  left: 82px;
  gap: 0px;
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 523px;
  height: 956px;
  gap: 0px;
  border-radius: 40px 0px 0px 40px;
  background: #5041bc;
`;
const Main = styled.div`
  width: 1200px;
  height: 956px;
  margin-left: -15%;
  gap: 0px;
  border-radius: 40px 40px 40px 40px;
  background: #ffffff;
`;
const ImgDiv = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 40px;
`;
const Border = styled.div`
  border: 1px solid lightgray;
  margin-top: 50px;
  width: 45%;
  margin-left: 5%;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  background: #ffffff;
  width: 35%;
  margin-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
  gap: 0px;
  border-radius: 10px 10px 10px 10px;
  border: 0.56px 0px 0px 0px;
`;
const NavDiv1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  width: 35%;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
  gap: 0px;
  border-radius: 10px 10px 10px 10px;
  border: 0.56px 0px 0px 0px;
`;

const Upgrade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 236px;
  gap: 0px;
  border-radius: 20px 20px 20px 20px;
  background: #ffffff;
  margin-left: 10%;
  margin-top: 50px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Overview = styled.div`
  display: flex;
  width: 35%;
  padding: 10px;
  padding-left: 20px;
`;
const Search = styled.div`
  display: flex;
  width: 35%;
  background-color: #f5f3ff;
  border-radius: 20px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

const Notification = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;
`;

const Table = styled.div`
  display: flex;
  width: 90%;
  height: 60px;
  margin-left: 2.5%;
  gap: 0px;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid #ebe8ff;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1130px;
  height: 130px;
`;
const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  margin-left: 2%;
  height: fit-content;
  border-radius: 20px;
  border: 1px solid lightgrey;
`;
const Sub1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`;

const Sub2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
`;

const Sub22 = styled.div`
  display: flex;
  padding: 0px;
`;

const LastDiv = styled.div`
  display: flex;
  width: 95%;
  height: 300px;
  margin-left: 2%;
  margin-top: 90px;
`;
