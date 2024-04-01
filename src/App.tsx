import "./App.css";

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

import {ParentDiv, Main, TopDiv, Overview, Search, Notification, Table, Statistics, Cart, Sub1, Sub2, Sub22, LastDiv} from "./styles/styles.ts"; 
function App() {
  return (
    <>
      <ParentDiv>
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

