import React from 'react';
import FinanceDetail from './report-detail-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';

describe("Finance detail site", () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={["/dashboard/finance/report-1"]}>
      <FinanceDetail />
    </MemoryRouter>
  );

  test('Title', () => {
    expect(getByText('Reporte 1')).toBeInTheDocument();
  });
});