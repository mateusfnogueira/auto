import {
  Container,
  EmailSection,
  InputSection,
  Text,
  Input,
  Submit,
  Image,
} from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <EmailSection>
        <Text>
          Register and receive all the news, enter your email and join the
          enovauto club
        </Text>
        <InputSection>
          <Input />
          <Submit>Send</Submit>
        </InputSection>
      </EmailSection>
      <Image
        src="https://dbhdyzvm8lm25.cloudfront.net/color_0640_032_png/MY2020/13985/13985_cc0640_032_WY.png"
        alt=""
      />
    </Container>
  );
};

export default Newsletter;
