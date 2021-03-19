import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CopyrightIcon from "@material-ui/icons/Copyright";
import {
  Container,
  Infos,
  Title,
  Link,
  Social,
  Copyright,
  Span,
} from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <Infos>
          <Title>Infos</Title>
          <Link>Terms and conditions</Link>
          <Link>Policity of privacity</Link>
          <Link>Portal affiliates</Link>
        </Infos>
        <Infos>
          <Title>Links</Title>
          <Link>How it works</Link>
          <Link>Promotions</Link>
          <Link>Dealer</Link>
        </Infos>
        <Infos>
          <Title>How It Works</Title>
          <Link>Refer a friend</Link>
          <Link>Dealer portal</Link>
        </Infos>
        <Infos>
          <Title>Social Share</Title>
          <Social>
            <FacebookIcon style={{ color: "#1492e6" }} />
            <InstagramIcon style={{ color: "#1492e6" }} />
            <YouTubeIcon style={{ color: "#1492e6" }} />
          </Social>
        </Infos>
      </Container>
      <Copyright>
        <Span>eNovauto copyright - 2021 - All directeds reserved </Span>
        <CopyrightIcon
          style={{ fontSize: 17, color: "white", marginLeft: 5 }}
        />
      </Copyright>
    </>
  );
};

export default Header;
