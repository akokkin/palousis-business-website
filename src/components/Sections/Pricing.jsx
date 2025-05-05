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
            <h1 className="font40 extraBold">Ανάλυση Υπηρεσιών</h1>
            <p className="font13">
              <br />
              Αναλαμβάνουμε πληθώρα υπηρεσιών, κάποιες εκ των οποίων δεν αναφέρονται στον παρακάτω πίνακα.
              <br />Μπορείτε να επικοινωνήσετε μαζί μας για να σας προσφέρουμε την καλύτερη λύση που ταιριάζει στις ανάγκες σας.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="heatpump"
                title="Εγκατάσταση/Συντήρηση Επαγγελματικής Μονάδας"
                text="Αφορά την συντήρηση επαγγελματικών μονάδων κλιματισμού οροφής. "
                offers={[
                  { name: "Καθαρισμός Εσωτερικής Μονάδας", cheked: true },
                  { name: "Καθαρισμός Εξωτερικής Μονάδας", cheked: true },
                  { name: "Χημικός-Αντιμικροβιακός καθαρισμός", cheked: true },
                  { name: "Έλεγχος διαρροών & αποχέτευσης", cheked: true },
                  { name: "Διάγνωση ελαττωμάτων & συμπλήρωση ψυκτικού υγρού", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="aircon"
                title="Εγκατάσταση/Συντήρηση Οικιακής Μονάδας"
                text="Αφορά την συντήρηση οικιακών μονάδων (Split/Multi/VRV/Unit)."
                offers={[
                  { name: "Καθαρισμός Εσωτερικής Μονάδας", cheked: true },
                  { name: "Καθαρισμός Εξωτερικής Μονάδας", cheked: true },
                  { name: "Χημικός-Αντιμικροβιακός καθαρισμός", cheked: true },
                  { name: "Έλεγχος διαρροών & αποχέτευσης", cheked: true },
                  { name: "Διάγνωση ελαττωμάτων & συμπλήρωση ψυκτικού υγρού", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="whiteappliance"
                title="Διάγνωση/Επισκευή βλάβης Λευκής Συσκευής"
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




