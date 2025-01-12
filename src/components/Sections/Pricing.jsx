import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ενδεικτικός Τιμοκατάλογος</h1>
            <p className="font13">
              Τιμοκατάλογος βασικών υπηρεσιών 
              <br />
              (Το ύψος ενδέχεται να μεταβληθεί βάσει των ιδιαιτεροτήτων ή της έκτασης της εκάστοτε εργασίας.)
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="heatpump"
                price="80.00€"
                title="Συντήρηση Επαγγελματικής Μονάδας"
                text="Αφορά την συντήρηση μίας (1) επαγγελματικής μονάδας κλιματισμού οροφής. (Κασέτα)"
                offers={[
                  { name: "Καθαρισμός Εσωτερικής Μονάδας", cheked: true },
                  { name: "Καθαρισμός Εξωτερικής Μονάδας", cheked: true },
                  { name: "Χημικός-Αντιμικροβιακός καθαρισμός", cheked: true },
                  { name: "Έλεγχος διαρροών & αποχέτευσης", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="aircon"
                price="30.00€"
                title="Συντήρηση Οικιακής Μονάδας"
                text="Αφορά την συντήρηση μίας (1) οικιακής μονάδας split unit."
                offers={[
                  { name: "Καθαρισμός Εσωτερικής Μονάδας", cheked: true },
                  { name: "Καθαρισμός Εξωτερικής Μονάδας", cheked: true },
                  { name: "Χημικός-Αντιμικροβιακός καθαρισμός", cheked: true },
                  { name: "Έλεγχος διαρροών & αποχέτευσης", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="whiteappliance"
                price="20.00€"
                title="Διάγνωση βλάβης Λευκής Συσκευής"
                text="Αφορά την διάγνωση βλάβης μίας (1) λευκής συσκευής. (Υφίσταται ξεχωριστή χρέωση επισκευής της συσκευής)"
                offers={[
                  { name: "Έλεγχος/Διάγνωση βλαβης", cheked: true },
                  { name: "Πρόταση/Κοστολόγηση επισκευής", cheked: true },
                  { name: "Παραλαβή/Παράδοση στον χώρο σας εντελώς δωρεάν", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




