import React from 'react';
import CardResume from './card-resume-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Dashboard site", () => {
  const props = {
    name: 'Ganancias',
    value: '$200.000',
    icon: 'handshake',
    color: 'success',
    navigateTo: jest.fn()
  };
  const {getByText} = render(<CardResume {...props} />);

  const detailButton = getByText('Ver detalle');

  test('Titles', () => {
    expect(getByText(props.name)).toBeVisible();
    expect(getByText(props.value)).toBeVisible();
  });

  test('Detail button', () => {
    expect(detailButton).toBeEnabled();
  });
});