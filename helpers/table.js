import { Rating } from 'semantic-ui-react';

function ratingFormatter(cell, row) {
  return <Rating defaultRating={3} maxRating={cell} disabled />;
}

export const columns = [
  {
    dataField: 'id',
    text: 'ID',
    searchable: false,
    sort: true
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true
  },
  {
    dataField: 'powers',
    text: 'Powers',
    searchable: false,
    sort: true
  },
  {
    dataField: 'rating',
    text: 'Rating',
    searchable: false,
    sort: true,
    formatter: ratingFormatter
  }
];

