import styles from "./Cards.module.css";
import Card from "./Card";

import iph13promax from "../assets/13promax.jpeg";

const Cards = () => {
  return (
    <>
      <div className={styles.container}>
        <Card images={iph13promax} name="IPhone11" cost="500$" />
        <Card images={iph13promax} name="IPhone12" cost="800$" />
        <Card images={iph13promax} name="IPhone13" cost="1000$" />
        <Card images={iph13promax} name="IPhone13 Promax" cost="1200$" />
      </div>
    </>
  );
};

export default Cards;
