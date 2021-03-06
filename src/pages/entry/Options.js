import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ScoopOptions from "./ScoopOptions";
import AlertBanner from "./AlertBanner";

function Options({ optionType }) {
  const [scoopOptions, setScoopOptions] = useState([]);
  const [toppingOptions, setToppingOptions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getScoopOptions = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/${optionType}`);
        if (optionType === "scoops") setScoopOptions(res.data);
        if (optionType === "toppings") setToppingOptions(res.data);
      } catch (err) {
        setError(true);
      }
    };

    getScoopOptions();
  }, [optionType]);

  if (error) return <AlertBanner />;

  return (
    <Container>
      <Row>
        {scoopOptions.map((scoop, index) => (
          <ScoopOptions
            key={index}
            altText={`${scoop.name} scoop`}
            image={scoop.imagePath}
          />
        ))}
      </Row>
      <Row>
        {toppingOptions.map((topping, index) => (
          <ScoopOptions
            key={index}
            altText={`${topping.name} topping`}
            image={topping.imagePath}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Options;
