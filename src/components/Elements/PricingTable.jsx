import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeatpumpIcon from "../../assets/svg/Services/HeatpumpIcon";
import AirConIcon from "../../assets/svg/Services/AirConIcon";
import FreezerIcon from "../../assets/svg/Services/FreezerIcon";
import WhiteAppliance from "../../assets/svg/Services/WhiteAppliance";
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getIcon;

  switch (icon) {
    case "heatpump":
      getIcon = <HeatpumpIcon />;
      break;
    case "aircon":
      getIcon = <AirConIcon />;
      break;
    case "freezer":
      getIcon = <FreezerIcon />;
      break;
    case "whiteappliance":
      getIcon = <WhiteAppliance />;
      break;
    default:
      getIcon = <HeatpumpIcon />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        {getIcon}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
