import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { closeModal, selectModalState } from "../store/reducers/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/reducers/modalSlice";
import Yello from "../assets/yellowCircle.svg";
import orange from "../assets/orangeCircle.svg";
import medico from "../assets/Medico.svg";
import Dashboard from "../assets/dashboard.svg";
import Claims from "../assets/claims.svg";
import Biller from "../assets/biller.svg";
import Path from "../assets/Path.svg";
import Health from "../assets/Health.svg";
import Aeroplane from "../assets/aeroplane.svg";

interface SidebarSectionProps {
  $isOpen: boolean;
}

type Name = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

const Dashboard1 = <img src={Dashboard} />;
const Claims1 = <img src={Claims} />;
const Biller1 = <img src={Biller} />;
const Path1 = <img src={Path} />;
const Health1 = <img src={Health} />;

const sidebarNav: Name[] = [
  { name: "Dashboard", link: "../dashboard/app.tsx", icon: Dashboard1 },
  { name: "Claims", link: "../dashboard/app.tsx", icon: Claims1 },
  { name: "Biller Queue", link: "../dashboard/app.tsx", icon: Biller1 },
  { name: "Subscription", link: "../dashboard/app.tsx", icon: Path1 },
  { name: "Health", link: "../dashboard/app.tsx", icon: Health1 },
];

const SideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectModalState);

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <SideNav1 $isOpen={isOpen}>
        <ImgDiv>
          <img src={orange} alt="orange" />
          <img src={Yello} alt="yellow" style={{ marginLeft: "-20px" }} />
          <img src={medico} alt="medico" style={{ marginLeft: "-40px" }} />
        </ImgDiv>
        <Border></Border>

        <div style={{ padding: "20px 0" }}>
          {sidebarNav.map((nav, i) => (
            <NavDiv1
              to={nav.link}
              key={i}
              style={({ isActive }) => ({
                background: isActive ? "#ffffff" : "",
                color: isActive ? "#5041bc" : "#ffffff",
              })}
              onClick={() => {
                dispatch(toggle());
              }}
            >
              {nav.icon}
              {nav.name}
            </NavDiv1>
          ))}
        </div>
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

export const SideNav1 = styled.div<SidebarSectionProps>`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: fit-content;
  padding-bottom: 250px;
  gap: 0px;
  border-radius: 40px 0px 0px 40px;
  background: #5041bc;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
    z-index: 1;
    transition: left 0.3s ease;
    width: 250px;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 40px;
`;
export const Border = styled.div`
  border: 1px solid lightgray;
  margin-top: 50px;
  width: 45%;
  margin-left: 5%;
`;

export const NavDiv1 = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 5%;
  font-size: 18px;
  font-weight: 800;
  width: 35%;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 40px;
  border-radius: 10px 10px 10px 10px;
  border: 0.56px 0px 0px 0px;

  i {
    margin-right: 10px;
    border:1px solid red;
  }
`;

export const Upgrade = styled.div`
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
