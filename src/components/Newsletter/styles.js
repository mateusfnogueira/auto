import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins, sans-serif;
  background-image: linear-gradient(to right, #1492e6 25%, #1deea1);
  padding: 20px;
  margin-top: 20px;

  & {
    @media only screen and (max-width: 1601px) {
      height: 300px;
    }

    @media only screen and (min-width: 1201px) and (max-width: 1600px) {
      height: 270px;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
      height: 230px;
    }

    @media only screen and (min-width: 901px) and (max-width: 1024px) {
      height: 200px;
    }

    @media only screen and (min-width: 769px) and (max-width: 900px) {
      height: 160px;
    }

    @media only screen and (min-width: 680px) and (max-width: 768px) {
      height: 160px;
    }
  }
`;

export const EmailSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & {
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      width: 100%;
    }

    @media only screen and (max-width: 320px) {
      width: 100%;
    }
  }
`;

export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & {
    @media only screen and (min-width: 1200px) {
      width: 100%;
      justify-content: flex-start;
    }

    @media only screen and (max-width: 320px) {
      width: 100%;
    }
  }
`;

export const Text = styled.span`
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 80%;
  font-size: 17px;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 5px 10px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 7%);
`;

export const Submit = styled.button`
  width: 20%;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #0d76bc;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  width: 50%;
  border-radius: 200px;

  & {
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      display: none;
    }

    @media only screen and (max-width: 320px) {
      display: none;
    }
  }
`;
