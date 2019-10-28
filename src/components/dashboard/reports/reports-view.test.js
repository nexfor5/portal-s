import React from 'react';
import ReportsView from './reports-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';

describe("Reports site", () => {
  const props = {
    menu: {
      title: 'Finanzas',
      menuId: 'finance',
      tags: ['Contabilidad', 'Cliente', 'Cobranzas'],
    },
  };
  const {getByText, getByTestId} = render(<MemoryRouter><ReportsView {...props} /></MemoryRouter>);

  const allButton = getByText('Todos');
  const filterButtons = props.menu.tags.map((tag) => getByTestId(`filter-${tag}`));

  test('Title', () => {
    expect(getByText('Finanzas')).toBeVisible();
  });

  test('Filter buttons', () => {
    expect(allButton).toBeEnabled();

    for (const filterButton of filterButtons) {
      expect(filterButton).toBeEnabled();
    }
  });
});