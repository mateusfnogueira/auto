import styled from 'styled-components';

interface MenuProps {
  dropdown?: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 10%);
  border-radius: 0 0 20px 20px;
  background-color: white;
  padding: 15px;
  z-index: 10;

  & {
    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Toggle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-image: linear-gradient(
    to right,
    #1492e6 25%,
    #1deea1
  );
  border-radius: 0 0 20px 20px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  z-index: 5;

  & {
    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 30px;
`;

export const IconsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div<MenuProps>`
  position: absolute;
  display: ${props => (props.dropdown ? 'flex' : 'none')};
  top: 0;
  left: 0;
  width: 100px;
  height: 140px;
  margin-top: 45px;
  border-radius: 10%;
  box-shadow: 3px 5px 5px black;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  transition-property: display;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
  padding: 10px;
  box-sizing: border-box;
  z-index: 10;

  & {
    h1 {
      font-size: 20px;
      font-weight: bold;
      color: #171717;
      margin-bottom: 20px;
    }

    span {
      font-size: 15px;
      color: #1a2980;
      margin-bottom: 10px;
    }

    a {
      margin-bottom: 7px;
    }
  }
`;
