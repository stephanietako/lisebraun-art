import React from "react";
// Styles
import styles from "./styles.module.scss";

const HeaderTxt = ({ txts }) => {
  const contents = {
    art: [
      {
        title: "art",
        paragraph:
          "I opened my first gallery at the age of 20, while studying interior design. Since then, I've been promoting emerging and established artists, both in and out of the gallery. We are present at various international contemporary art fairs. My unique guiding principle: the passion and close relationship I have with my artists.",
      },
    ],
    design: [
      {
        title: "design",
        paragraph:
          "In France, I have represented prestigious design editors such as Vitra, Cappellini, Agape, Roda and Bitossi. This encouraged me to produce art objects in ultra-limited series.",
      },
    ],
    creation: [
      {
        title: "creation",
        paragraph:
          "I love artistic research and inventing concepts and bridges between the arts. I regularly organize exhibitions for companies and institutions. We've linked contemporary art, perfume, haiku, Formula 1 objects and, of course, digital art. I'm an early member of Blockchain Innov.",
      },
    ],
  };

  const content = contents[txts] || [];

  return (
    <div className={styles.txts}>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <h1>{item.title}</h1>
            <p>{item.paragraph}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderTxt;
