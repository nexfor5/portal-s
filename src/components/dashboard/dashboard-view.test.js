import React from 'react';
import Dashboard from './dashboard-view';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe("Dashboard site", () => {
  const {getByTestId} = render(<MemoryRouter><Dashboard /></MemoryRouter>);

  const navbar = getByTestId('navbar');

  test('Sidenav links', () => {
    expect(navbar).toBeVisible();
  });
});