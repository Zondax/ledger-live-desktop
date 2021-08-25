// @flow
import React from "react";
import { useTranslation } from "react-i18next";
import { context } from "~/renderer/drawers/Provider";
import SummaryLabel from "./SummaryLabel";
import SummaryValue from "./SummaryValue";
import SummarySection from "./SummarySection";
import FeesDrawer from "../FeesDrawer";
import sendAmountByFamily from "~/renderer/generated/SendAmountFields";

const SectionFees = ({ swapTransaction }: { swapTransaction: * }) => {
  const { t } = useTranslation();
  const { setDrawer } = React.useContext(context);
  const { account, transaction } = swapTransaction;
  const canEdit = transaction?.networkInfo && sendAmountByFamily[account?.currency?.family];

  // TODO: disable the "slow" strategy based on the fees/provider in use.
  // Waiting for the logic to be completed.
  return (
    <SummarySection>
      <SummaryLabel
        label={t("swap2.form.details.label.fees")}
        details={t("swap2.form.details.tooltip.fees")}
      />
      <SummaryValue
        value="0.000034 ETH"
        hideEdit={!canEdit}
        handleChange={() =>
          setDrawer(FeesDrawer, {
            swapTransaction,
          })
        }
      />
    </SummarySection>
  );
};

export default SectionFees;
