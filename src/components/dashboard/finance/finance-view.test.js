import React from 'react';
import FinanceView from './finance-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';

describe("Finance site", () => {
  const {getByText} = render(<MemoryRouter><FinanceView /></MemoryRouter>);

  const allButton = getByText('Todos');

  test('Title', () => {
    expect(getByText('Finanzas')).toBeVisible();
  });

  test('Filter buttons', () => {
    expect(allButton).toBeEnabled();
  });
});