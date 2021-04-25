import React from 'react';
import {  MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const PlansPage = (props) => {
  const data_minimal_width = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        minimal: 'sm'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ipsum dolor',
        sort: 'asc',
        minimal: 'lg'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ipsum',
        sort: 'asc',
        minimal: 'sm'
      },
      {
        label: 'Lorem ipsum dolor',
        field: 'lorem ',
        sort: 'asc',
        minimal: 'lg'
      },
       {
        label: 'Lorem ',
        field: 'lore ',
        sort: 'asc',
        minimal: 'lg'
      }
    ],
    rows: [
      {
        'id': '1',
        'lorem ipsum dolors': 'Lorem ipsum dolorss',
        'lorem ipsum': 'Lorem ipsum dolor',
        'lorem': 'Lorem ipsum dolor',
        'lorem i': ' ipsum dolor',
        'lore': 'Lorem ipsum dolor'
      },
      {
        'id': '2',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        'lorem': 'Lorem ipsum dolor',
        'lorems': 'Lorem ipsum dolor',
        'lore': 'Lorem ipsum dolor'
      },
      {
        'id': '3',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        'lorem': 'Lorem ipsum dolor',
        'loremh': 'Lorem ipsum dolor',
        'lore': 'Lorem ipsum dolor'
      },
      {
        'id': '4',
        'lorem ipsum dolor': 'Lorem ipsum dolor',
        'lorem ipsum': 'Lorem ipsum dolor',
        'lorem': 'Lorem ipsum dolor',
        'loremj': 'Lorem ipsum dolor',
        'lore': 'Lorem ipsum dolor'
      }
    ]
  };


  return(
    <MDBTable striped bordered>
      <MDBTableHead columns={data_minimal_width.columns}/>
      <MDBTableBody rows={data_minimal_width.rows} />
    </MDBTable>
  );
};
export default PlansPage;