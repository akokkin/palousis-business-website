import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contactUs.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/storeFront.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Επικοινωνήστε Μαζί Μας</h1>
            <p>
              <br />
              Email: info@palousis-ac.gr
              <br />
              Διεύθυνση: Φιλικής Εταιρείας 33, Νέα Κρήνη, 55132
              <br />
              Σταθερό: 2310445161
              <br />
              Κινητό: 6971895910
            </p>
            <br />
            <p className="font13">
              <b>Εναλλακτικά:</b>
              <br />
              Συμπληρώστε τα στοιχεία σας, την περιγραφή της ανάγκης σας και πιέστε το κουμπί 'Επικοινωνήστε Μαζί Μου'
              <br />
              Θα φροντίσουμε να επικοινωνήσουμε μαζί σας το συντομότερο δυνατό!
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Όνομα:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Τηλέφωνο επικοινωνίας:</label>
                <input type="text" id="email" name="phone" className="font20 extraBold" />
                <label className="font13">Περιγραφή Ανάγκης:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Επικοινωνήστε Μαζί Μου" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "30%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "70%" }}>
                <div style={{ marginTop: "100px" }}>
                  <MapContainer className="radius6">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?q=φιλικης+εταιρειας+33,+καλαμαρια&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen="true"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Palousis Location"
                    ></iframe>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const MapContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;









