import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 15px;
  font-family: Poppins, sans-serif;

  & {
    @media only screen and (min-width: 769px) and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    @media only screen and (min-width: 321px) and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    @media only screen and (max-width: 320px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

export const GridContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin-left: 10px;

  & {
    @media only screen and (min-width: 321px) and (max-width: 1100px) {
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 0;
    }

    @media only screen and (max-width: 320px) {
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 0;
    }
  }
`;

export const Sider = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 15%);
  padding: 15px;

  & {
    @media only screen and (min-width: 769px) and (max-width: 1100px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 100%;
      justify-content: flex-start;
      background-color: white;
      border-radius: 0;
      box-shadow: 2px 0 5px 0 rgba(0 0 0 / 15%);
      background-color: white;
      z-index: 10;
      box-sizing: border-box;
    }

    @media only screen and (min-width: 577px) and (max-width: 768px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 55%;
      height: 100%;
      justify-content: flex-start;
      background-color: white;
      border-radius: 0;
      box-shadow: 2px 0 5px 0 rgba(0 0 0 / 15%);
      z-index: 100;
      box-sizing: border-box;
    }

    @media only screen and (min-width: 481px) and (max-width: 576px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      justify-content: flex-start;
      background-color: white;
      border-radius: 0;
      box-shadow: 2px 0 5px 0 rgba(0 0 0 / 15%);
      z-index: 100;
      box-sizing: border-box;
    }

    @media only screen and (min-width: 321px) and (max-width: 480px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      background-color: white;
      border-radius: 0;
      z-index: 100;
      box-sizing: border-box;
    }

    @media only screen and (max-width: 320px) {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      background-color: white;
      border-radius: 0;
      z-index: 100;
      box-sizing: border-box;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 15%);
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: white;

  & {
    @media only screen and (min-width: 769px) and (max-width: 1023px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
    }

    @media only screen and (min-width: 321px) and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      margin-top: 50px;
    }

    @media only screen and (max-width: 320px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      margin-top: 50px;
    }
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;

  & {
    @media only screen and (min-width: 321px) and (max-width: 900px) {
      justify-content: center;
    }
  }
`;
