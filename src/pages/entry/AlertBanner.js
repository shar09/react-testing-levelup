import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertBanner() {
  return (
    <Alert variant='danger'>
      Unexpected error occured, please try again later
    </Alert>
  );
}

export default AlertBanner;
