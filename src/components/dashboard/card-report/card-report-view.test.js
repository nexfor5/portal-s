import React from 'react';
import CardReport from './card-report-view';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Dashboard site", () => {
  const props = {
    image: 'https://via.placeholder.com/320x200',
    title: 'Reporte 1',
    description: 'Descripción del reporte',
    tags: ['Contabilidad', 'Cliente'],
  };
  const {getByText, getByTestId} = render(<CardReport {...props} />);

  const image = getByTestId('report-image');

  test('elements', () => {
    expect(image).toBeVisible();
    expect(getByText(props.title)).toHaveTextContent(props.title);
    expect(getByText(props.description)).toHaveTextContent(props.description);

    for (const tag of props.tags) {
      expect(getByText(tag)).toHaveTextContent(tag);
    }
  });
});