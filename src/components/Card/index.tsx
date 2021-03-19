import React from "react";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import { ModalFeatures, ModalSavings } from "../CardModal";

import "./styles.css";

interface Props {
  vehicleVIN: string;
  vechileName: string;
  vehicleYear: number;
  valueDown: string;
  valueMpy: string;
  valueMonthLease: string;
  valueMonthFinance: string;
  valueVehicle: string;
  valueSavings: string;
  imgVechile: string;
  exteriorColor: string;
  interiorColor: string;
  body: string;
  leaseToFinance: boolean;
}

const CardVechile: React.FC<Props> = ({
  vehicleVIN,
  vechileName,
  vehicleYear,
  valueDown,
  valueMpy,
  valueMonthFinance,
  valueMonthLease,
  valueVehicle,
  valueSavings,
  imgVechile,
  exteriorColor,
  interiorColor,
  body,
  leaseToFinance,
}) => {
  return (
    <div className="container">
      <div className="vehicleHeader">
        <div className="vehicleTitle">
          <div className="year">{vehicleYear}</div>
          <div className="title">{vechileName}</div>
          <div className="body">{body}</div>
        </div>

        <div className="favorite">
          <FavoriteBorderIcon
            style={{
              fontSize: 35,
              color: "#1492e6",
              padding: 5,
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 10%)",
            }}
          />
        </div>
      </div>
      <div className="vehicleImage">
        <img src={imgVechile} alt={vechileName} />
        <div className="vehicleColor">
          <div className="colors">
            <div
              style={{ backgroundColor: exteriorColor }}
              className="exteriorColor"
            ></div>
            <div
              style={{ backgroundColor: interiorColor }}
              className="interiorColor"
            ></div>
          </div>
          <InfoOutlinedIcon style={{ fontSize: 19, color: "#999999" }} />
        </div>
      </div>
      <div className="vehicleInfo">
        <div className="down">
          <span className="value">${valueDown}</span>
          <span className="info">Down</span>
        </div>
        <div className="month">
          {!leaseToFinance ? (
            <span className="value">
              ${Math.round(Number(valueMonthFinance))}
            </span>
          ) : (
            <span className="value">
              ${Math.round(Number(valueMonthLease))}
            </span>
          )}

          <span className="info">/mo.</span>
        </div>
        <div className="mpy">
          <span className="value">{valueMpy}</span>
          <span className="info">MPY.</span>
        </div>
      </div>
      <div className="vehicleMsrp">
        <div className="msrp">
          <span className="value">
            MSRP: $<s>{valueVehicle}</s>
          </span>
        </div>
        <div className="savings">
          <span className="value">Savings: ${valueSavings}</span>
        </div>
      </div>
      <div className="vehicleFeatures">
        <div className="keyFeatures">
          <AddCircleOutlineIcon style={{ fontSize: 15 }} />
          <span className="info">Key Features</span>
        </div>
        <div className="viewSavings">
          <AddCircleOutlineIcon style={{ fontSize: 15 }} />
          <span className="info">View Savings</span>
        </div>
      </div>
      <div className="vehicleSubmit">
        <Link to={`/product/${vehicleVIN}`}>
          <span>Build My Deal</span>
        </Link>
      </div>
      {/* <ModalFeatures />
      <ModalSavings />*/}
    </div>
  );
};

export default CardVechile;
