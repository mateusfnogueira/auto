import React, { useState } from "react";

import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { withStyles } from "@material-ui/core/styles";

import "./styles.css";

const CustomCheckbox = withStyles({
  root: {
    color: "#c4c4c4",
    "&$checked": {
      color: "#1492e6",
    },
    borderRadius: 50,
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

const SiderFilter = ({
  changeYear2020,
  changeYear2021,
  changeMakeHonda,
  changeMakeNissan,
  changeMakeHyundai,
  changeMakeKia,
  changeMakeJeep,
  changeModelAccord,
  changeModelAltima,
  changeModelCRV,
  changeModelCivic,
  changeModelCompass,
  changeModelElantra,
  changeModelForte,
  changeModelHRV,
  changeModelKCinco,
  changeModelMurano,
  changeModelPathfinder,
  changeModelRogue,
  changeModelSantaFe,
  changeModelSeltos,
  changeModelSentra,
  changeModelSonata,
  changeModelSorento,
  changeModelSportage,
  changeModelStinger,
  changeModelTelluride,
  changeModelTitan,
  changeModelTucson,
  changeAegenBlueMetalic,
  changeBilletSilverMetall,
  changeBlackCopper,
  changeBurnishedCopper,
  changeCherryBlack,
  changeCrystalBeige,
  changeCrystalBlack,
  changeDarkMoss,
  changeDarkOcean,
  changeEbonyBlack,
  changeEletricBlue,
  changeGlacierWhite,
  changeGunMetallic,
  changeIntBeige,
  changeIntBlack,
  changeIntButterscotch,
  changeIntCashmere,
  changeIntCharcoal,
  changeIntDarkCaramel,
  changeIntDarkGray,
  changeIntGraphite,
  changeIntGray,
  changeIntMediumGray,
  changeIntSand,
  changeIntSport,
  changeLunarSilver,
  changeModernSteel,
  changeRallyeRed,
  changePlatinumWhite,
  changeStillNight,
  changeSuperBlack,
  changePacificBlue,
  changeSteelGray,
  changeSparklingSilver,
  changeSaphireBlue, 
  changeWhiteClearcoat,
}) => {
  const [openYear, setOpenYear] = useState(false);
  const [openMake, setOpenMake] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openBody, setOpenBody] = useState(false);
  const [openExtColor, setOpenExtColor] = useState(false);
  const [openIntColor, setOpenIntColor] = useState(false);

  useEffect(() => {
    async function loadMenus() {
      try {
        setLoading(true);

        const response = await api.get('/filters');

        setVehicles(response?.data?.results);
        setLoading(false);
        setCurrentPage(response.data.currentPage);
      } catch (err) {
        alert('Vehicles not found');
      }
    }
    loadVehicles();
})

  return (
    <>
      <div
        className="yearToggle"
        onClick={() => {
          setOpenYear((state) => !state);
        }}
      >
        <span className="toggleTitle">Year</span>
        {openYear ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openYear ? (
        <div className="yearContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="2020"
                onClick={changeYear2020}
              />
            }
            label="2020"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="2021"
                onClick={changeYear2021}
              />
            }
            label="2021"
          />
        </div>
      ) : null}

      <div
        className="makeToggle"
        onClick={() => {
          setOpenMake((state) => !state);
        }}
      >
        <span className="toggleTitle">Make</span>

        {openMake ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openMake ? (
        <div className="makeContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="makeHonda"
                onClick={changeMakeHonda}
              />
            }
            label="HONDA"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="makeNissan"
                onClick={changeMakeNissan}
              />
            }
            label="NISSAN"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="makeHyundai"
                onClick={changeMakeHyundai}
              />
            }
            label="HYUNDAI"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="makeKia"
                onClick={changeMakeKia}
              />
            }
            label="KIA"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="makeJeep"
                onClick={changeMakeJeep}
              />
            }
            label="JEEP"
          />
        </div>
      ) : null}

      <div
        className="modelToggle"
        onClick={() => {
          setOpenModel((state) => !state);
        }}
      >
        <span className="toggleTitle">Model</span>
        {openModel ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openModel ? (
        <div className="modelContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelCivic"
                onClick={changeModelCivic}
              />
            }
            label="CIVIC"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelAccord"
                onClick={changeModelAccord}
              />
            }
            label="ACCORD"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelCRV"
                onClick={changeModelCRV}
              />
            }
            label="CR-V"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelPilot"
                onClick={changeMakeJeep}
              />
            }
            label="PILOT"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelHRV"
                onClick={changeModelHRV}
              />
            }
            label="HR-v"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSentra"
                onClick={changeModelSentra}
              />
            }
            label="SENTRA"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelAltima"
                onClick={changeModelAltima}
              />
            }
            label="ALTIMA"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelRogue"
                onClick={changeModelRogue}
              />
            }
            label="ROGUE"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelPathfinder"
                onClick={changeModelPathfinder}
              />
            }
            label="PATHFINDER "
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelTitan"
                onClick={changeModelTitan}
              />
            }
            label="TITAN"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelMurano"
                onClick={changeModelMurano}
              />
            }
            label="MURANO"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelElantra"
                onClick={changeModelElantra}
              />
            }
            label="ELANTRA"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSonata"
                onClick={changeModelSonata}
              />
            }
            label="SONATA"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelTucson"
                onClick={changeModelTucson}
              />
            }
            label="TUCSON"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSantaFe"
                onClick={changeModelSantaFe}
              />
            }
            label="SANTA FÉ"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelForte"
                onClick={changeModelForte}
              />
            }
            label="FORTE"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelK5"
                onClick={changeModelKCinco}
              />
            }
            label="K-5"
          />{" "}
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSeltos"
                onClick={changeModelSeltos}
              />
            }
            label="SELTOS"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSportage"
                onClick={changeModelSportage}
              />
            }
            label="SPORTAGE"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelSorento"
                onClick={changeModelSorento}
              />
            }
            label="SORENTO"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelTelluride"
                onClick={changeModelTelluride}
              />
            }
            label="TELLURIDE"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelStinger"
                onClick={changeModelStinger}
              />
            }
            label="STINGER"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name="modelCompass"
                onClick={changeModelCompass}
              />
            }
            label="COMPASS"
          />
        </div>
      ) : null}
      <div
        className="bodyToggle"
        onClick={() => {
          setOpenBody((state) => !state);
        }}
      >
        <span className="toggleTitle">Body</span>
        {openBody ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openBody ? (
        <div className="BodyContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeMakeHonda}
              />
            }
            label="4D SEDAN"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeMakeNissan}
              />
            }
            label="5D WAGON"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeMakeHyundai}
              />
            }
            label="4D WAGON"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeMakeKia}
              />
            }
            label="4D CREW"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeMakeJeep}
              />
            }
            label="LATITUDE 4x2"
          />
        </div>
      ) : null}
      <div
        className="extToggle"
        onClick={() => {
          setOpenExtColor((state) => !state);
        }}
      >
        <span className="toggleTitle">Exterior Color</span>
        {openExtColor ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openExtColor ? (
        <div className="ExtContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeModernSteel}
              />
            }
            label="Modern Steel Metalli"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeRallyeRed}
              />
            }
            label="Rallye Red"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeLunarSilver}
              />
            }
            label="Lunar Silver Metalli"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changePlatinumWhite}
              />
            }
            label="Platinum White Pearl"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeStillNight}
              />
            }
            label="Still Night Black"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeCrystalBlack}
              />
            }
            label="Crystal Black Peral"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeAegenBlueMetalic}
              />
            }
            label="Aegean Blue Mettalic"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeSuperBlack}
              />
            }
            label="Super Black"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeGunMetallic}
              />
            }
            label="Gun Metallic"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeEletricBlue}
              />
            }
            label="Eletric Blue Metall"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeGlacierWhite}
              />
            }
            label="Glacier White"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeEbonyBlack}
              />
            }
            label="Ebony Black"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changePacificBlue}
              />
            }
            label="Pacific Blue"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeCrystalBeige}
              />
            }
            label="Crystal Beige"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeDarkOcean}
              />
            }
            label="Dark Ocean Blue/Whit"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeSteelGray}
              />
            }
            label="Steel Gray"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeCherryBlack}
              />
            }
            label="Cherry Black"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeBurnishedCopper}
              />
            }
            label="Burnished Copper"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeSparklingSilver}
              />
            }
            label="Sparkling Silver"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeSaphireBlue}
              />
            }
            label="Saphire Blue"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeBlackCopper}
              />
            }
            label="Black Copper"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeDarkMoss}
              />
            }
            label="Dark Moss"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeWhiteClearcoat}
              />
            }
            label="White Clearcoat"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeBilletSilverMetall}
              />
            }
            label="Billet Silver Metall"
          />
        </div>
      ) : null}

      <div
        className="intToggle"
        onClick={() => {
          setOpenIntColor((state) => !state);
        }}
      >
        <span className="toggleTitle">Interior Color</span>
        {openIntColor ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: "#5e5e5e",
              borderRadius: 50,
              boxShadow: "0 2px 5px 0 rgba(0 0 0 / 20%)",
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openIntColor ? (
        <div className="intContent">
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntGray}
              />
            }
            label="Gray"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntBlack}
              />
            }
            label="Black"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntCharcoal}
              />
            }
            label="Chacoal"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntSport}
              />
            }
            label="Sport"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntBeige}
              />
            }
            label="Beige"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntGraphite}
              />
            }
            label="Graphite"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntCashmere}
              />
            }
            label="Cashmere"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntMediumGray}
              />
            }
            label="Medium Gray"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntDarkGray}
              />
            }
            label="Dark Gray"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntDarkCaramel}
              />
            }
            label="Dark Gray/Caramel"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntSand}
              />
            }
            label="Sand"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                icon={<PanoramaFishEyeIcon style={{ fontSize: 20 }} />}
                checkedIcon={<CheckCircleIcon style={{ fontSize: 20 }} />}
                name=""
                onClick={changeIntButterscotch}
              />
            }
            label="Butterscotch"
          />
        </div>
      ) : null}
    </>
  );
};

export default SiderFilter;
