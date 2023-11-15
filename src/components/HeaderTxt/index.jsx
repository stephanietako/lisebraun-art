import React from "react";
// Styles
import styles from "./styles.module.scss";

const HeaderTxt = ({ txts }) => {
  const txtart =
    "I opened my first gallery at the age of 20, while studying interior design. Since then, I've been promoting emerging and established artists, both in and out of the gallery. We are present at various international contemporary art fairs. My unique guiding principle: the passion and close relationship I have with my artists.";
  const txtdesign =
    "In France, I have represented prestigious design editors such as Vitra, Cappellini, Agape, Roda and Bitossi. This encouraged me to produce art objects in ultra-limited series.";
  const txtcreation =
    "I love artistic research and inventing concepts and bridges between the arts. I regularly organize exhibitions for companies and institutions. We've linked contemporary art, perfume, haiku, Formula 1 objects and, of course, digital art. I'm an early member of Blockchain Innov.";

  return (
    <div className={styles.txts}>
      {txts}
      <ul>
        <li>
          <p>{txtart}</p>
        </li>
        <li>
          <p> {txtdesign}</p>
        </li>
        <li>
          <p> {txtcreation}</p>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTxt;
