import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import api from "../../services/api";

import { useParams } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import FlipCameraAndroidRoundedIcon from "@material-ui/icons/FlipCameraAndroidRounded";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

import SettingsIcon from "@material-ui/icons/Settings";

import {
  Container,
  ProductSection,
  Calculator,
  Product,
  TitleSection,
  Title,
  Description,
  Price,
  ImageSection,
  Image,
  Actions,
  Videos,
  Rotation,
  Gallery,
  Colors,
  ColorDot,
  Payment,
  Fees,
  Select,
  Label,
  RangeSlider,
  MoreOptions,
  Submit,
  KeyFeatures,
  FeaturesContent,
  Features,
  Hide,
  FeaturesDetails,
  FeaturesTextContent,
  FeaturesText,
  RebatesSpot,
  AlsoViewed,
} from "./styles";
import "./styles.css";

interface ParamTypes {
  VIN: string;
}

interface Image {
  vifnum: number;
  id: number;
  url: string;
  url_back: string;
  url_side: string;
  code: string;
  title: string;
  rgb: string;
}

interface colorProps {
  color: string;
  rgb: string;
}

interface leaseFinance {
  annualMileage: number;
  payment: string;
  rebates: [];
  sellingPrice: number;
  term: string;
  totalRebate: number;
}

interface Vehicle {
  VIN: string;
  airCondicioning: string;
  baseMSRPamount: number;
  cylinder: number;
  displacement: string;
  driveTrainMechanical: string;
  exteriorColor: string;
  exteriorRgb: colorProps;
  finance: leaseFinance;
  fuelType: string;
  image: Image;
  inVoice: number;
  interiorColor: string;
  lease: leaseFinance;
  make: string;
  model: string;
  msrp: number;
  seatingCapacity: string;
  seatingTextile: string;
  seatsDriver: string;
  seatsFront: string;
  shortDescription: string;
  transmission: string;
  windows: string;
  year: number;
}

const CashDownSlider = withStyles({
  root: {
    width: "100%",
    height: 8,
    marginTop: 20,
    "& @media only screen and (max-width: 320px)": {
      width: "80%",
    },
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px 0 rgba(0 0 0 / 15%)",
    marginTop: -6,
    marginLeft: -7.5,
    "&:focus, &:hover, &$active": {
      boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
      "@media (hover: none)": {
        boxShadow: "0 2px 5px 0 rgba(0 0 0 / 15%)",
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + -5px)",
    top: -20,
    "& *": {
      background: "transparent",
      color: "#5e5e5e",
      fontSize: 13,
    },
  },
  track: {
    backgroundImage: "linear-gradient(to left, #1DEEA1, #1492e6)",
    height: 5,
    borderRadius: 50,
  },
  rail: {
    backgroundImage: "linear-gradient(to left, #1DEEA1, #1492e6)",
    height: 5,
    borderRadius: 50,
  },
})(Slider);

const SingleProduct = () => {
  const { VIN } = useParams<ParamTypes>();

  const [vehicle, setVehicle] = useState<Vehicle>();
  const [rangeValue, setRangeValue] = useState<string>("");
  const [position, setPosition] = useState<string>("fixed");
  const [tab, setTab] = useState<string>("1");

  console.error(rangeValue);

  const handleChangeTab = (event: any, newTab: string) => {
    setTab(newTab);
  };

  const valuetext = (value: any) => {
    setRangeValue("$" + value);
    return "$" + value;
  };

  useEffect(() => {
    const loadVehicle = async () => {
      const response = await api.get(`/vehicle?vin=${VIN}`);
      setVehicle(response.data[0]);
      // console.log(response.data[0]);
      console.log(vehicle);
    };

    window.onscroll = () => {
      if (window.pageYOffset > 688) {
        setPosition("absolute");
      } else if (window.pageYOffset < 688) {
        setPosition("fixed");
      }
    };

    loadVehicle();
  }, [VIN]);

  return (
    <Container>
      <ProductSection>
        <Product>
          <TitleSection>
            <Title>
              <strong>2021</strong> ILX Base
            </Title>
            <Description>2.4L 4 CYLINDER 8 SPEED DUAL CLUTCH</Description>
            <Price>
              <strong>MSRP:</strong> $23,400
            </Price>
          </TitleSection>
          <Carousel showArrows={false} showThumbs={false} showStatus={false}>
            <ImageSection>
              <Image
                src={vehicle?.image.url ? vehicle?.image.url : ""}
                alt=""
              />
            </ImageSection>
            <ImageSection>
              <Image
                src={vehicle?.image.url_side ? vehicle?.image.url_side : ""}
                alt=""
              />
            </ImageSection>
            <ImageSection>
              <Image
                src={vehicle?.image.url_back ? vehicle?.image.url_back : ""}
                alt=""
              />
            </ImageSection>
          </Carousel>
          <Actions>
            <Videos>
              <PlayArrowRoundedIcon
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  boxShadow: "0 2px 5px 0 rgba(0 0 0 /10%)",
                  marginRight: 10,
                  color: "#1492e6",
                  padding: 3,
                  fontSize: 25,
                }}
              />
              Vídeos
            </Videos>
            <Rotation>
              <FlipCameraAndroidRoundedIcon
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  boxShadow: "0 2px 5px 0 rgba(0 0 0 /10%)",
                  marginRight: 10,
                  color: "#1492e6",
                  padding: 3,
                  fontSize: 25,
                }}
              />
              Interior / Exterior 360
            </Rotation>
            <Gallery>
              <PhotoLibraryRoundedIcon
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  boxShadow: "0 2px 5px 0 rgba(0 0 0 /10%)",
                  marginRight: 10,
                  color: "#1492e6",
                  padding: 3,
                  fontSize: 25,
                }}
              />
              Gallery
            </Gallery>
          </Actions>
          <Colors>
            <ColorDot style={{ backgroundColor: "red" }} />
            <ColorDot style={{ backgroundColor: "red" }} />
            <ColorDot style={{ backgroundColor: "red" }} />
          </Colors>
        </Product>
        <Calculator className="calculator" pos={position}>
          <div className="toggleButton">
            <label className="switchToggle">
              <input className="leaseIn buttonToggle" type="checkbox" />
              <span className="lease"></span>
            </label>
          </div>
          {/* <ImageCalculator
            src=""
            alt=""
          /> */}
          <Payment>${vehicle?.lease.payment}/mo.</Payment>
          <Fees>
            Including fees {"&"} Taxes{" "}
            <InfoOutlinedIcon
              style={{ fontSize: 20, color: "#1492e6", marginLeft: 5 }}
            />
          </Fees>
          <Label>Lease Term</Label>
          <Select>
            <option value="24">24 months</option>
            <option selected value="36">
              36 months
            </option>
            <option value="39">39 months</option>
            <option value="42">42 months</option>
            <option value="48">48 months</option>
          </Select>
          <Label>Annual Mileage</Label>
          <Select>
            <option value="36">36 months - % APR</option>
            <option selected value="48">
              48 months - % APR
            </option>
            <option value="60">60 months - % APR</option>
            <option value="72">72 months - % APR</option>
            <option value="75">75 months - % APR</option>
            <option value="84">84 months - % APR</option>
          </Select>
          <Label>Total Down Payment</Label>
          <RangeSlider>
            <RemoveIcon
              style={{
                fontSize: 17,
                color: "#5e5e5e",
                borderRadius: 50,
                boxShadow: "0 2px 5px 0 rgba(0 0 0 / 15%)",
                marginTop: 15,
                marginRight: 10,
                opacity: 0.5,
              }}
            />
            <CashDownSlider
              name="cashDownPayment"
              valueLabelFormat={valuetext}
              getAriaValueText={valuetext}
              defaultValue={0}
              step={50}
              min={0}
              max={10000}
              valueLabelDisplay="on"
            />
            <AddIcon
              style={{
                fontSize: 17,
                color: "#5e5e5e",
                borderRadius: 50,
                boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
                marginTop: 15,
                marginLeft: 10,
                opacity: 0.5,
              }}
            />
          </RangeSlider>
          <MoreOptions>
            <AddIcon
              style={{
                fontSize: 15,
                color: "#5e5e5e",
                borderRadius: 50,
                boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
                marginRight: 10,
              }}
            />
            Add a Trade in
          </MoreOptions>
          <MoreOptions>
            <AddIcon
              style={{
                fontSize: 15,
                color: "#5e5e5e",
                borderRadius: 50,
                boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
                marginRight: 10,
              }}
            />
            Review My Order
          </MoreOptions>
          <MoreOptions>
            <AddIcon
              style={{
                fontSize: 15,
                color: "#5e5e5e",
                borderRadius: 50,
                boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
                marginRight: 10,
              }}
            />
            Additional Savings
          </MoreOptions>
          <Fees style={{ marginTop: 20 }}>
            Total Savings: $3,695
            <InfoOutlinedIcon
              style={{ fontSize: 20, color: "#1492e6", marginLeft: 5 }}
            />
          </Fees>
          <Submit>START NOW</Submit>
        </Calculator>
      </ProductSection>
      <KeyFeatures>
        <Hide>HIDE</Hide>
        <Title style={{ fontSize: 20, fontWeight: 500, color: "#747474" }}>
          Key Features
        </Title>
        <FeaturesContent>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
          <Features>
            <SettingsIcon style={{ marginRight: 5, color: "#373737" }} />
            2.5L /4 CYL.
          </Features>
        </FeaturesContent>
      </KeyFeatures>
      <FeaturesDetails>
        <TabContext value={tab}>
          <TabList onChange={handleChangeTab}>
            <Tab label="Features" value="1" />
            <Tab label="Options" value="2" />
            <Tab label="Specs" value="3" />
            <Tab label="Warranty" value="4" />
          </TabList>
          <TabPanel value="1">
            <FeaturesTextContent>
              <FeaturesText>
                <h1>Exterior</h1>
                <span>Aluminum Spare Wheel</span>
                <span>Body-Colored Front Bumper w/1 Tow Hook</span>
                <span>
                  Body-Colored Power Heated Side Mirrors w/Power Folding and
                  Turn Signal Indicator
                </span>
                <span>Body-Colored Rear Step Bumper w/1 Tow Hook</span>
                <span>Chrome Door Handles</span>
                <span>Chrome Grille</span>
                <span>
                  Chrome Side Windows Trim and Black Front Windshield Trim
                </span>
                <span>Clearcoat Paint</span>
              </FeaturesText>
              <FeaturesText>
                <h1>Interior</h1>
                <span>Aluminum Spare Wheel</span>
                <span>Body-Colored Front Bumper w/1 Tow Hook</span>
                <span>
                  Body-Colored Power Heated Side Mirrors w/Power Folding and
                  Turn Signal Indicator
                </span>
                <span>Body-Colored Rear Step Bumper w/1 Tow Hook</span>
                <span>Chrome Door Handles</span>
                <span>Chrome Grille</span>
                <span>
                  Chrome Side Windows Trim and Black Front Windshield Trim
                </span>
                <span>Clearcoat Paint</span>
              </FeaturesText>
              <FeaturesText>
                <h1>Interior</h1>
                <span>Aluminum Spare Wheel</span>
                <span>Body-Colored Front Bumper w/1 Tow Hook</span>
                <span>
                  Body-Colored Power Heated Side Mirrors w/Power Folding and
                  Turn Signal Indicator
                </span>
                <span>Body-Colored Rear Step Bumper w/1 Tow Hook</span>
                <span>Chrome Door Handles</span>
                <span>Chrome Grille</span>
                <span>
                  Chrome Side Windows Trim and Black Front Windshield Trim
                </span>
                <span>Clearcoat Paint</span>
              </FeaturesText>
            </FeaturesTextContent>
          </TabPanel>
          <TabPanel value="2">
            <FeaturesTextContent>Item 2</FeaturesTextContent>
          </TabPanel>
          <TabPanel value="3">
            <FeaturesTextContent>Item 3</FeaturesTextContent>
          </TabPanel>
          <TabPanel value="4">
            <FeaturesTextContent>Item 4</FeaturesTextContent>
          </TabPanel>
        </TabContext>
      </FeaturesDetails>
      <RebatesSpot></RebatesSpot>
      <AlsoViewed></AlsoViewed>
    </Container>
  );
};

export default SingleProduct;
