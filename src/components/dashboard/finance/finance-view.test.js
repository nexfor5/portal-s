import React from 'react';
import Finance from './finance-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Dashboard site", () => {
  const {getByText} = render(<Finance />);

  const allButton = getByText('Todos');

  test('Title', () => {
    expect(getByText('Finanzas')).toBeVisible();
  });

  test('Filter buttons', () => {
    expect(allButton).toBeEnabled();
  });
});