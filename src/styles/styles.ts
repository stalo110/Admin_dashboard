import styled from "styled-components";

export const ParentDiv = styled.div`
  display: flex;
  max-width: 100%;
  height: fit-content;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Main = styled.div`
  width: 85%;
  height: fit-content;
  margin-left: -15%;
  border-radius: 40px;
  background: #ffffff;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    padding-left: 1%;
    margin-left: 0%;
    height: fit-content;
  }
`;

export const Overview = styled.div`
  display: flex;
  width: 35%;
  padding: 10px;
  padding-left: 20px;
  overflow: hidden;
`;



export const TableSection = styled.div`
overflow-x: auto;
max-width: 100%;
`

export const Table = styled.div`
  display: flex;
  width: 1020px;
  height: 60px;
  margin-left: 2.5%;
  border-radius: 20px;
  border: 1px solid #ebe8ff;
  justify-content: space-between;
  border-collapse: collapse;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
  justify-content: space-between;
  border-collapse: collapse;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  }

`;



export const Statistics = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 98%;
  height: fit-content;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
    margin-left:4%;
    margin-top:20px;
  }
`;
export const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 23%;
  margin-left: 2%;
  height: fit-content;
  border-radius: 20px;
  border: 1px solid lightgrey;

  @media (max-width: 768px) {
    width: 27%;
    margin-bottom: 20px;
  }
`;
export const Sub1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Sub2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
`;

export const Sub22 = styled.div`
  display: flex;
  padding: 0px;
`;

export const LastDiv = styled.div`
  display: flex;
  width: 98%;
  height: fit-content;
  margin-left: 2%;
  margin-top: 90px;
  margin-bottom: 50px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    // align-items: center;
  }
`;

export const GraphImg = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const CardImg = styled.div`
  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-left: 20px;
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img1 = styled.img`
  width: 80%;
  margin-left: 10%;
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
