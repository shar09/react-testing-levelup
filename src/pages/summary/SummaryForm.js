import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SummaryForm() {
  const [checked, toggleChecked] = useState(false);

  const handleChange = (e) => {
    toggleChecked(!checked);
  };

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Content>No icecream will be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger placement='right' overlay={popover}>
        <span>terms and conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form type='submit'>
      <Form.Check
        type='checkbox'
        id='default checkbox'
        label={checkboxLabel}
        checked={checked}
        onChange={handleChange}
      />

      <Button variant='light' disabled={!checked}>
        Confirm Order
      </Button>
    </Form>
  );
}

export default SummaryForm;
