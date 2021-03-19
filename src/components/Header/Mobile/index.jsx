import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
// import CancelIcon from "@material-ui/icons/Cancel";
import { Toggle, Container, Logo, IconsList, Menu } from "./styles";
import "./styles.css";

const HeaderMobile = ({ ChangeLf, OnChangeLf, valueLeaseToFinance }) => {

  const [leaseToFinance, setLeaseToFinance] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Container>
        <Menu style={{display:dropdown?'flex': 'none'}}>
          <Link to='/explore'><span>EXPLORE</span></Link>
          <Link to='/howWorks'><span>HOW IT WORKS</span></Link>
          <Link to='/tradeInEstimator'><span>TRADE IN ESTIMATOR</span></Link>
          <Link to='/contact'><span>CONTACT</span></Link>
        </Menu>
        <MenuIcon onClick={() => { setDropdown((state) => !state)}}/>
        <Link to='/'><Logo
          src="https://enovauto.com/wp-content/uploads/2020/10/LOGO@2x.png"
          alt="eNovauto"
        /></Link>
        <IconsList>
          <DriveEtaRoundedIcon />
        </IconsList>
      </Container>
      <Toggle>
        <div className='toggleButton'>
          <label className='switchToggle'>
            <input
              onClick={() => {
                setLeaseToFinance((x) => !x);
                ChangeLf();
              }}
              value={valueLeaseToFinance}
              onChange={OnChangeLf}
              className={
                !leaseToFinance
                  ? 'leaseIn buttonToggle'
                  : 'financeIn buttonToggle'
              }
              type='checkbox'
            />
            <span className={!leaseToFinance ? 'lease' : 'finance'}></span>
          </label>
        </div>
      </Toggle>
    </>
  );
};

export default HeaderMobile;
