import { Link } from "react-router-dom";
import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

import {
  Container,
  Logo,
  Menu,
  MenuOption,
  IconsSection,
  UserSection,
  Button,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <img
            src="https://enovauto.com/wp-content/uploads/2020/10/LOGO@2x.png"
            alt=""
          />
        </Logo>
      </Link>
      <Menu>
        <Link to="/explore">
          <MenuOption>EXPLORE</MenuOption>
        </Link>
        <Link to="/howWorks">
          <MenuOption>HOW IT WORKS</MenuOption>
        </Link>
        <Link to="/tradeInEstimator">
          <MenuOption>TRADE IN ESTIMATOR</MenuOption>
        </Link>
        <Link to="/contact">
          <MenuOption>CONTACT</MenuOption>
        </Link>
      </Menu>
      <IconsSection>
        <PermPhoneMsgRoundedIcon />
        <DriveEtaRoundedIcon />
        <LocalAtmIcon />
        <PhoneIphoneIcon />
      </IconsSection>
      <UserSection>
        <Button>SIGN IN</Button>
        <Button>GET PRE QUALIFY</Button>
      </UserSection>
    </Container>
  );
};

export default Header;
