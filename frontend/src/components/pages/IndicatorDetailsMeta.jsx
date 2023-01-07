import React, { useState, useEffect } from "react";
import Content from "./Content";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import Common from '../inc/Common';



const IndicatorDetailsMeta = (props) => {
    const [data, setData] = useState(null);

    const { location: { state } } = props;

    console.log(state);

    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/indicator-details-meta/${state.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])


    function testClickEvent(param) {
        alert('Row Click Event');
    }


    const tabledata = () => {


        const tableColumns = JSON.parse(state.columns)?.map(
            ({ value: field, ...rest }) => ({
                field,
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Jobtitle',
                },
                ...rest
            })
        )
        return {
            columns: tableColumns,
            rows: data
        };
    };
    return (
        <>
              <Common />
            <div className="my-5 py-5">
                <div style={{ maxWidth: '990px', margin: 'auto' }}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <CDBDataTable striped bordered hover paging={false} data={tabledata()} height={295} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndicatorDetailsMeta;