import React from 'react';
import ReportDetail from './report-detail-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Route, MemoryRouter} from 'react-router-dom';

describe("Report detail site", () => {
  const {getByText, getByTestId} = render(
    <MemoryRouter initialEntries={['/dashboard/comercial/report-6']}>
      <Route path='/dashboard/comercial/:reportId'>
        <ReportDetail />
      </Route>
    </MemoryRouter>
  );

  const title = getByTestId('report-name');
  const tabs = getByTestId('report-tabs');

  test('Title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Comercial');
    expect(getByText('Reporte 6')).toBeVisible();
  });

  test('Tabs', () => {
    expect(tabs).toBeVisible();
  });
});