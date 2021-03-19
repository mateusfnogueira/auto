import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DriveEtaRounded, Menu as MenuIcon } from "@material-ui/icons";

import { Container, IconsList, Logo, Menu, Toggle } from "./styles";
import "./styles.css";

const menuList = [
  {
    name: "EXPLORE",
    link: "/explore",
  },
  {
    name: "HOW IT WORKS",
    link: "/howWorks",
  },
  {
    name: "HOW IT WORKS",
    link: "/howWorks",
  },
  {
    name: "TRADE IN ESTIMATOR",
    link: "/tradeInEstimator",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
];

const HeaderMobile: React.FC = () =>
  // {
  // ChangeLf,
  // OnChangeLf,
  // valueLeaseToFinance,
  // }
  {
    const [leaseToFinance, setLeaseToFinance] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
      <>
        <Container>
          <Menu dropdown={dropdown}>
            {menuList?.map((menu) => (
              <Link to={menu.link}>
                <span>{menu.name}</span>
              </Link>
            ))}
          </Menu>

          <MenuIcon
            onClick={() => {
              setDropdown((state) => !state);
            }}
          />

          <Link to="/">
            <Logo
              src="https://enovauto.com/wp-content/uploads/2020/10/LOGO@2x.png"
              alt="eNovauto"
            />
          </Link>

          <IconsList>
            <DriveEtaRounded />
          </IconsList>
        </Container>

        <Toggle>
          <div className="toggleButton">
            <label className="switchToggle">
              <input
                onClick={() => {
                  setLeaseToFinance((x) => !x);
                  // ChangeLf();
                }}
                // value={valueLeaseToFinance}
                // onChange={OnChangeLf}
                className={
                  !leaseToFinance
                    ? "leaseIn buttonToggle"
                    : "financeIn buttonToggle"
                }
                type="checkbox"
              />
              <span className={!leaseToFinance ? "lease" : "finance"}></span>
            </label>
          </div>
        </Toggle>
      </>
    );
  };

export default HeaderMobile;
