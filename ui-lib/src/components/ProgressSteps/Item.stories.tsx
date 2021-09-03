import React from "react";
import { Step, StepProps } from "@components/ProgressSteps";

export default {
  title: "Navigation/Stepper/SidePanel/Item",
  component: Step,
};

export const Item = (args: StepProps): JSX.Element => (
  <div style={{ width: "75px" }}>
    <Step {...args} />
  </div>
);
Item.args = {
  state: "current",
  label: "label",
  hideLeftSeparator: true,
  nextState: undefined,
};