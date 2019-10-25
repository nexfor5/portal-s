import React from 'react';
import ReportsView from './reports-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';

describe("Finance site", () => {
  const props = {menu: {title: 'Finanzas', menuId: 'finance'}};
  const {getByText} = render(<MemoryRouter><ReportsView {...props} /></MemoryRouter>);

  const allButton = getByText('Todos');

  test('Title', () => {
    expect(getByText('Finanzas')).toBeVisible();
  });

  test('Filter buttons', () => {
    expect(allButton).toBeEnabled();
  });
});