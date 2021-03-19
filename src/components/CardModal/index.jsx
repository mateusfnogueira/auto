import CancelIcon from "@material-ui/icons/Cancel";
import BuildIcon from "@material-ui/icons/Build";
import {
  Container,
  Content,
  ContentSaving,
  Item,
  Close,
  Title,
  ItemSaving,
  Details,
  TitleSaving,
  DescriptionSaving,
  Price,
  TotalPrice,
} from "./styles";

export const ModalFeatures = () => {
  return (
    <Container>
      <Close>
        <Title>Key Features</Title>
        <CancelIcon
          style={{
            fontSize: 17,
            color: "#fd385b",
            marginLeft: 5,
          }}
        />{" "}
      </Close>
      <Content>
        <Item>
          <BuildIcon
            style={{
              fontSize: 15,
              color: "#171717",
              marginRight: 5,
            }}
          />{" "}
          Front Wheel Drive
        </Item>
      </Content>
    </Container>
  );
};

export const ModalSavings = () => {
  return (
    <Container>
      <Close>
        <Title>View Savings</Title>
        <CancelIcon
          style={{
            fontSize: 17,
            color: "#fd385b",
            marginLeft: 5,
          }}
        />{" "}
      </Close>
      <ContentSaving>
        <ItemSaving>
          <Details>
            <TitleSaving>Your Discount:</TitleSaving>
            <DescriptionSaving>
              We've negotiated the price down on the vehicle for you.
            </DescriptionSaving>
          </Details>
          <Price>$2,645</Price>
        </ItemSaving>
        <ItemSaving>
          <Details>
            <TitleSaving>Manufacture Rebates:</TitleSaving>
            <DescriptionSaving>
              These are the applicable incentives based on your location.
            </DescriptionSaving>
          </Details>
          <Price>$1,000</Price>
        </ItemSaving>
        <ItemSaving>
          <Details>
            <TitleSaving>Total Savings:</TitleSaving>
          </Details>
          <TotalPrice>$3,645</TotalPrice>
        </ItemSaving>
      </ContentSaving>
    </Container>
  );
};
