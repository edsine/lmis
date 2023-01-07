import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Content from "./Content";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import Common from '../inc/Common';
import Button from 'react-bootstrap/Button';

const IndicatorDetails = (props) => {
    const [data, setData] = useState(null);

    const { location: { state } } = props;

    useEffect(() => {
        fetch(`http://localhost:3001/api/v2/indicator-details/${state}`)
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
        return {
            columns: [
                {
                    label: 'Title',
                    field: 'title',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Jobtitle',
                    },
                },
                {
                    label: 'Description',
                    field: 'description',
                    width: 270,
                },
                {
                    label: 'Measure',
                    field: 'measure',
                    width: 200,
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: 200,
                }
            ],
            rows: data?.map((item, index) => {
                item.action = (
                    <Button variant="success"><Link key={index} to={{
                        pathname: '/indicator-details-meta',
                        state: {
                            id: item.id,
                            columns: item.dimensions
                        }
                    }}><div className="social">
                            <small style={{ color: '#ffffff' }}>View data</small>
                        </div></Link>
                        </Button>
                    
                )
                return item;
            })
        };
    };
    return (
        <>
            <Common />
            <div className="my-5 py-5">
                <div style={{ maxWidth: '990px', margin: 'auto' }}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <CDBDataTable striped bordered hover paging={false} data={tabledata()} height={395} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndicatorDetails;