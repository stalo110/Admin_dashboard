import Search1 from "../assets/search icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Girl from "../assets/girl1.svg";
import styled from "styled-components";
import Notification1 from "../assets/Notification.svg";
import Arror from "../assets/arror.svg";
import { FaStream, FaTimes } from "react-icons/fa";
import { toggle } from "../store/reducers/modalSlice";
import { Overview } from "../styles/styles.ts";
import { closeModal, selectModalState } from "../store/reducers/modalSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectModalState);
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <TopDiv>
      <StyledAngleDown onClick={() => dispatch(toggle())}>
        {isOpen ? <FaTimes /> : <FaStream />}
      </StyledAngleDown>
      <Overview>
        <h1 style={{ color: "black", fontSize: "32px", fontWeight: "700" }}>
          Overview
        </h1>
      </Overview>
      <Search>
        <SearchInput type="text" placeholder="Search" />
        <SearchIconImg src={Search1} alt="Search" />
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
  );
};

export default Nav;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: #5041bc;
`;

export const SearchIconImg = styled.img`
  width: 5%; /* Adjust size as needed */
  margin-right: 10px; /* Adjust spacing between icon and input */
`;

export const SearchText = styled.p`
  color: #5041bc;
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px; /* Adjust as needed */
  margin-right: 10px; /* Adjust as needed */
`;
const StyledAngleDown = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  padding-top: 3px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Search = styled.div`
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

  @media (max-width: 768px) {
    width: 65%;
  }
  
`;

export const Notification = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
