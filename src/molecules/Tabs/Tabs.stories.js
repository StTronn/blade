import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import View from '../../atoms/View';
import Text from '../../atoms/Text';
import Flex from '../../atoms/Flex';
import Space from '../../atoms/Space';
import { getColorKeys } from '../../_helpers/theme';
import { getIconNames } from '../../_helpers/icon';
import Tabs from './Tabs';

const iconOptions = getIconNames().reduce(
  (options, option) => ({ ...options, [option]: option }),
  {},
);

const valueOptions = {
  payments: 'payments',
  'payment-links': 'payment-links',
  settlements: 'settlements',
};

const Content = ({ children, color }) => {
  return (
    <Flex flex={1} alignItems="center">
      <Space padding={[16, 0, 0, 0]}>
        <View>
          <Text color={color}>{children}</Text>
        </View>
      </Space>
    </Flex>
  );
};

Content.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(getColorKeys()),
};

storiesOf('Tabs', module)
  .addParameters({
    component: Tabs,
  })
  .add('default', () => (
    <Tabs defaultValue="payments">
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="payments"
        title="Payments"
        disabled={boolean('Disable Tab 1', false)}
        icon={select('Icon Tab 1', iconOptions, undefined)}
      >
        <Content color="emerald.900">This is the Payments screen</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="payment-links"
        title="Payment Links"
        disabled={boolean('Disable Tab 2', false)}
        icon={select('Icon Tab 2', iconOptions, undefined)}
      >
        <Content color="mustard.900">This is the Payment Links screen</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="settlements"
        title="Settlements"
        disabled={boolean('Disable Tab 3', false)}
        icon={select('Icon Tab 3', iconOptions, undefined)}
      >
        <Content color="rose.900">This is the Settlements screen</Content>
      </Tabs.Tab>
    </Tabs>
  ))
  .add('controlled', () => (
    <Tabs value={select('Value', valueOptions, 'payments')}>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="payments"
        title="Payments"
        disabled={boolean('Disable Tab 1', false)}
        icon={select('Icon Tab 1', iconOptions, undefined)}
      >
        <Content color="emerald.900">This is the Payments screen</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="payment-links"
        title="Payment Links"
        disabled={boolean('Disable Tab 2', false)}
        icon={select('Icon Tab 2', iconOptions, undefined)}
      >
        <Content color="mustard.900">This is the Payment Links screen</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="settlements"
        title="Settlements"
        disabled={boolean('Disable Tab 3', false)}
        icon={select('Icon Tab 3', iconOptions, undefined)}
      >
        <Content color="rose.900">This is the Settlements screen</Content>
      </Tabs.Tab>
    </Tabs>
  ))
  .add('scrollable', () => (
    <Tabs scrollEnabled>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="contactDetails"
        title="Contact Details"
        disabled={boolean('Disable Tab 1', false)}
        icon={select('Icon Tab 1', iconOptions, undefined)}
      >
        <Content color="emerald.900">Contact details</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="businessOverview"
        title="Business Overview"
        disabled={boolean('Disable Tab 2', false)}
        icon={select('Icon Tab 2', iconOptions, undefined)}
      >
        <Content color="mustard.900">Business overview</Content>
      </Tabs.Tab>
      {/*@ts-expect-error*/}
      <Tabs.Tab
        value="businessDetails"
        title="Business Details"
        disabled={boolean('Disable Tab 3', false)}
        icon={select('Icon Tab 3', iconOptions, undefined)}
      >
        <Content color="rose.900">Business details</Content>
      </Tabs.Tab>
      <Tabs.Tab
        value="bankAndCompanyDetails"
        title="Bank and Company Details"
        disabled={boolean('Disable Tab 4', false)}
        icon={select('Icon Tab 4', iconOptions, undefined)}
      >
        <Content color="primary.900">Bank and company details</Content>
      </Tabs.Tab>
    </Tabs>
  ));
