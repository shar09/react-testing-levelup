import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function ToppingOptions({ image, altText }) {
  return (
    <Col xs={4} md={3}>
      <Image src={`http://localhost:3030/${image}`} rounded alt={altText} />
    </Col>
  );
}

export default ToppingOptions;
