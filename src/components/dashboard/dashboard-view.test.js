import React from 'react';
import DashboardContainer from './dashboard-container';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import DashboardView from './dashboard-view';

describe("Dashboard site", () => {
  const {getByTestId} = render(<MemoryRouter><DashboardContainer /></MemoryRouter>);

  const navbar = getByTestId('navbar');

  test('Sidenav links', () => {
    expect(navbar).toBeVisible();
  });
});

describe("Dashboard site", () => {
  const {getByText, getByTestId} = render(<DashboardView />);

  const oneMothButton = getByText('Hoy');
  const twoMothButton = getByText('7 días');
  const threeMothButton = getByText('Último mes');
  const title = getByTestId('dashboard-title');

  test('Time buttons', () => {
    expect(oneMothButton).toBeEnabled();
    expect(twoMothButton).toBeEnabled();
    expect(threeMothButton).toBeEnabled();
  });

  test('title', () => {
    expect(title).toBeVisible();
  });
});