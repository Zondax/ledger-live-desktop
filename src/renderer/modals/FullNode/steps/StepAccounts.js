// @flow
import React, { useCallback, useState } from "react";
import Box from "~/renderer/components/Box";
import Text from "~/renderer/components/Text";
import { useSelector } from "react-redux";
import { accountsSelector } from "~/renderer/reducers/accounts";
import { getAccountCurrency } from "@ledgerhq/live-common/lib/account";
import { Trans } from "react-i18next";
import Button from "~/renderer/components/Button";
import CurrencyBadge from "~/renderer/components/CurrencyBadge";
import FormattedVal from "~/renderer/components/FormattedVal";
import CryptoCurrencyIcon from "~/renderer/components/CryptoCurrencyIcon";
import { getCryptoCurrencyById } from "@ledgerhq/live-common/lib/currencies";
import Input from "~/renderer/components/Input";
import InfoCircle from "~/renderer/icons/InfoCircle";
import ToolTip from "~/renderer/components/Tooltip";
import type { FullNodeSteps } from "~/renderer/modals/FullNode";
import styled from "styled-components";

const Row = styled(Box).attrs(() => ({
  horizontal: true,
  alignItems: "center",
  bg: "palette.background.default",
  px: 2,
  mb: 2,
  flow: 3,
}))`
  height: 40px;
  border-radius: 4px;
`;

const Accounts = () => {
  // FIXME Not using the AccountList componenent because styles differ quite a bit, we should unify.
  const accounts = useSelector(accountsSelector);
  const [numberOfAccountsToScan, setNumberOfAccountsToScan] = useState(10);
  const currency = getCryptoCurrencyById("bitcoin");
  const bitcoinAccounts = accounts.filter(a => getAccountCurrency(a) === currency);

  const onUpdateNumberOfAccountsToScan = useCallback(value => {
    const newNumberOfAccounts = parseInt(value) || 1;
    if (newNumberOfAccounts < 1000) {
      setNumberOfAccountsToScan(newNumberOfAccounts);
    }
  }, []);

  return (
    <Box>
      <Text
        ff="Inter|ExtraBold"
        color="palette.text.shade100"
        fontSize={2}
        style={{ textTransform: "uppercase" }}
        mb={1}
      >
        <Trans i18nKey="fullNode.modal.steps.accounts.toScan" />
      </Text>
      <Box horizontal alignItems={"center"}>
        <Box horizontal alignItems={"center"} flex={1}>
          <Text ff="Inter|Medium" color="palette.text.shade100" mr={2} fontSize={4}>
            <Trans i18nKey="fullNode.modal.steps.accounts.toScanDescription" />
          </Text>
          <ToolTip content={<Trans i18nKey="fullNode.modal.steps.accounts.toScanTooltip" />}>
            <Box color={"palette.text.shade50"}>
              <InfoCircle size={13} />
            </Box>
          </ToolTip>
        </Box>
        <Input
          style={{ width: 40, textAlign: "center" }}
          placeholder="10"
          onChange={onUpdateNumberOfAccountsToScan}
          value={numberOfAccountsToScan}
        />
      </Box>

      {bitcoinAccounts.length ? (
        <>
          <Text
            ff="Inter|ExtraBold"
            color="palette.text.shade100"
            fontSize={2}
            style={{ textTransform: "uppercase" }}
            mb={1}
            mt={5}
          >
            <Trans i18nKey="fullNode.modal.steps.accounts.existing" />
          </Text>
          <div style={{ maxHeight: 220, marginRight: -10, overflow: "scroll" }}>
            {bitcoinAccounts.map(account => (
              <Row key={account.id}>
                <CryptoCurrencyIcon size={16} currency={account.currency} />
                <Box
                  ml={2}
                  shrink
                  grow
                  ff="Inter|SemiBold"
                  color="palette.text.shade40"
                  fontSize={3}
                >
                  <Text>{account.name}</Text>
                </Box>
                <FormattedVal
                  ff="Inter|Regular"
                  val={account.balance}
                  unit={account.unit}
                  style={{ textAlign: "right", width: "auto" }}
                  showCode
                  fontSize={3}
                  color="palette.text.shade40"
                />
              </Row>
            ))}
          </div>
        </>
      ) : null}
    </Box>
  );
};

export const StepAccountsFooter = ({ onStepChange }: { onStepChange: FullNodeSteps => void }) => {
  const currency = getCryptoCurrencyById("bitcoin");
  const goToDeviceStep = useCallback(() => onStepChange("device"), [onStepChange]);
  return (
    <>
      <CurrencyBadge mr="auto" currency={currency} />
      <Button primary onClick={goToDeviceStep}>
        <Trans i18nKey="common.continue" />
      </Button>
    </>
  );
};

export default Accounts;
