import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Content from "./Content";
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import Common from '../inc/Common';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { BACKEND_URL } from "../../constants";

const IndicatorDetails = (props) => {
    const [data, setData] = useState(null);

    const { location: { state } } = props;

    useEffect(() => {
        fetch(`${BACKEND_URL}/indicator-details?populate=*`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [state])


    const tabledata = () => {
        return {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                    label: 'Description',
                    field: 'description',
                    width: 270,
                },
                {
                    label: 'Action',
                    field: 'action',
                    width: 200,
                }
            ],
            rows: data?.filter(item => item.attributes.indicator.data.id === state).map((item, index) => {
                item.name = item.attributes.name;
                item.description = item.attributes.description;
                item.action = (
                    // <Button variant="success">
                    //     <Link key={index} to={{
                    //         pathname: '/indicator-details-meta',
                    //         state: {
                    //             id: item?.id,
                    //             columns: item?.attributes?.dimensions?.data
                    //         }
                    //     }}>
                    //         <div className="social">
                    //             <small style={{ color: '#ffffff' }}>View data</small>
                    //         </div>
                    //     </Link>
                    // </Button>

                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <div className="social"  >
                                <small style={{ color: '#ffffff' }} id="dropdown-basic">Select Action</small>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>

                                <Link key={index} to={{
                                    pathname: '/indicator-details-meta',
                                    state: {
                                        id: item?.id,
                                        columns: item?.attributes?.dimensions?.data
                                    }
                                }}>

                                    View data

                                </Link>

                            </Dropdown.Item>

                            <Dropdown.Item >
                                <Link key={index} to={{
                                    pathname: '/indicator-details-meta-chart',
                                    state: {
                                        id: item?.id,
                                        columns: item?.attributes?.dimensions?.data
                                    }
                                }}>
                                    View Chart

                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>




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