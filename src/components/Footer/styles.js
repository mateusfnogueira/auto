import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #f2f2f2;
  padding: 40px;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;

  & {
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    @media only screen and (max-width: 320px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
  }
`;

export const Infos = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & {
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      width: 100%;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 320px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
  color: #1492e6;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Link = styled.span`
  font-size: 15px;
  color: #1492e6;
  margin-bottom: 10px;
`;

export const Social = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  & {
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      width: 20%;
    }

    @media only screen and (max-width: 320px) {
      width: 30%;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #1492e6 25%, #1deea1);
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: Arial, sans-serif;

  & {
    @media only screen and (max-width: 320px) {
      padding: 10px;
    }
  }
`;

export const Span = styled.span`
  font-size: 14px;
  color: white;
  font-weight: bold;

  & {
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      font-size: 11px;
    }

    @media only screen and (max-width: 320px) {
      font-size: 11px;
    }
  }
`;
