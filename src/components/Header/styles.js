import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 7%);
  border-radius: 0 0 20px 20px;
  padding: 15px;
  margin-bottom: 20px;

  & {
    @media only screen and (min-width: 320px) and (max-width: 1023px) {
      display: none;
      z-index: 10;
    }
  }
`;

export const Logo = styled.div`
  width: 10%;

  & {
    img {
      width: 50px;
    }
  }
`;

export const Menu = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & {
    @media only screen and (max-width: 1200px) {
      width: 40%;
    }
  }
`;

export const MenuOption = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  color: #1492e6;
  text-align: center;
`;

export const IconsSection = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserSection = styled.div`
  width: 25%;
  max-width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & {
    @media only screen and (min-width: 1023px) and (max-width: 1320px) {
      width: 20%;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Button = styled.div`
  background-image: linear-gradient(to left, #1deea1, #1492e6);
  font-size: 15px;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  text-align: center;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 10px 30px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 10%);

  & {
    @media only screen and (min-width: 1023px) and (max-width: 1320px) {
      width: 200px;
      margin: 3px 0;
      padding: 5px 15px;
    }
  }
`;
