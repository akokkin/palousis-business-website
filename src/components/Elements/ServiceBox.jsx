import React from "react";
import styled from "styled-components";
// Assets
import HeatPumpIcon from "../../assets/svg/Services/HeatpumpIcon";
import AirConIcon from "../../assets/svg/Services/AirConIcon";
import FreezerIcon from "../../assets/svg/Services/FreezerIcon";
import WasherIcon from "../../assets/svg/Services/WhiteAppliance";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "heatpump":
      getIcon = <HeatPumpIcon />;
      break;
    case "aircon":
      getIcon = <AirConIcon />;
      break;
    case "freezer":
      getIcon = <FreezerIcon />;
      break;
    case "whiteappliance":
      getIcon = <WasherIcon />;
      break;
    default:
      getIcon = <HeatPumpIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;