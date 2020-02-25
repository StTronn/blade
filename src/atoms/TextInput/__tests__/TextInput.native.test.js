import React from 'react';
import { renderWithTheme } from '../../../_helpers/testing';

import TextInput from '../index';

describe('Renders <TextInput /> outline variant correctly', () => {
  it('snapshot testing with label', () => {
    const { container } = renderWithTheme(<TextInput label="Email" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with filled TextInput', () => {
    const { container } = renderWithTheme(<TextInput label="Email">{'user@domain.com'}</TextInput>);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with prefix', () => {
    const { container } = renderWithTheme(<TextInput prefix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with suffix', () => {
    const { container } = renderWithTheme(<TextInput suffix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with prefix & suffix', () => {
    const { container } = renderWithTheme(<TextInput suffix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconLeft ', () => {
    const { container } = renderWithTheme(<TextInput iconLeft="info" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconRight ', () => {
    const { container } = renderWithTheme(<TextInput iconRight="info" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconLeft & iconRight ', () => {
    const { container } = renderWithTheme(<TextInput iconLeft="info" iconRight="info" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with help text ', () => {
    const { container } = renderWithTheme(<TextInput helpText="You can enter your email here" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with character count ', () => {
    const { container } = renderWithTheme(<TextInput showCharacterCount maxLength={10} />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with help text & character count ', () => {
    const { container } = renderWithTheme(
      <TextInput helpText="You can enter your email here" showCharacterCount maxLength={10} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with error ', () => {
    const { container } = renderWithTheme(
      <TextInput
        prefix="info"
        iconRight="info"
        label="Email"
        helpText="You can enter your email here"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with disabled ', () => {
    const { container } = renderWithTheme(
      <TextInput
        prefix="info"
        iconRight="info"
        label="Email"
        helpText="You can enter your email here"
        disabled={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  //   it('snapshot after focus', () => {
  //     const displayText = 'Displaying some text';
  //     const { getByText, container } = renderWithTheme(
  //       <TextInput label="Email">{displayText}</TextInput>,
  //     );
  //     const textInput = getByText(displayText).parentNode;
  //     expect(container).toMatchSnapshot();
  //     fireEvent.press(textInput);
  //     expect(container).toMatchSnapshot();
  //   });
});

describe('Renders <TextInput /> filled variant correctly', () => {
  it('snapshot testing with label', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" label="Email" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with filled TextInput', () => {
    const { container } = renderWithTheme(
      <TextInput variant="filled" label="Email">
        {'user@domain.com'}
      </TextInput>,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with prefix', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" prefix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with suffix', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" suffix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with prefix & suffix', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" suffix="kg" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconLeft ', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" iconLeft="info" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconRight ', () => {
    const { container } = renderWithTheme(<TextInput variant="filled" iconRight="info" />);
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with iconLeft & iconRight ', () => {
    const { container } = renderWithTheme(
      <TextInput variant="filled" iconLeft="info" iconRight="info" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with help text ', () => {
    const { container } = renderWithTheme(
      <TextInput variant="filled" helpText="You can enter your email here" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with character count ', () => {
    const { container } = renderWithTheme(
      <TextInput variant="filled" showCharacterCount maxLength={10} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with help text & character count ', () => {
    const { container } = renderWithTheme(
      <TextInput
        variant="filled"
        helpText="You can enter your email here"
        showCharacterCount
        maxLength={10}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with error ', () => {
    const { container } = renderWithTheme(
      <TextInput
        variant="filled"
        prefix="info"
        iconRight="info"
        label="Email"
        helpText="You can enter your email here"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('snapshot testing with disabled ', () => {
    const { container } = renderWithTheme(
      <TextInput
        variant="filled"
        prefix="info"
        iconRight="info"
        label="Email"
        helpText="You can enter your email here"
        disabled={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
