import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import createRowData from "../../data";
import * as FontAwesome  from 'react-icons/lib/fa';


const ActionsFormatter = (row) => {
    return (
    <div>
         <button id={row.id} type='button'>
         <FontAwesome.FaPlus />

        </button>
    </div>
)
}

export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(createRowData(10));
    }

    componentDidMount() {

        // const columns = [{
        //     dataField: 'id',
        //     text: 'Product ID'
        //   }, {
        //     dataField: 'name',
        //     text: 'Product Name'
        //   }, {
        //     dataField: 'price',
        //     text: 'Product Price'
        //   }];
    }

    renderTable() {
        const columns = [{
            dataField: 'id',
            text: 'Product ID'
          }, {
            dataField: 'street',
            text: 'Product street'
          }, {
            dataField: 'title',
            text: 'Product title'
          }, {
            dataField: 'actions',
            text: 'Actions',
            isDummyField: true,
            csvExport: false,
            formatter: this.actionsFormatter,
          }        
    ];

          return <BootstrapTable keyField='id' data={ createRowData(10) } columns={ columns }  />

    }

    rankFormatter(cell, row, rowIndex, formatExtraData) { 
        return ( 
        <div style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }} >
        </div> ); 
    }

    actionsFormatter = (cell, row) => <ActionsFormatter id={row.id} />;

    
    render() {
        return(
            <div className={'Demo'}>
                {this.renderTable()}
                
            </div>
        )
    }
}