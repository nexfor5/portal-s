import React from 'react';
import Default from './default-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Dashboard site", () => {
  const {getByText} = render(<Default />);

  const oneMothButton = getByText('Hoy');
  const twoMothButton = getByText('7 días');
  const threeMothButton = getByText('Último mes');
  const title = getByText('Dashboard');

  test('Time buttons', () => {
    expect(oneMothButton).toBeEnabled();
    expect(twoMothButton).toBeEnabled();
    expect(threeMothButton).toBeEnabled();
  });

  test('title', () => {
    expect(title).toBeVisible();
  });
});