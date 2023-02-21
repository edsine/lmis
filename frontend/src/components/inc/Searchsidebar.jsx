import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import faqs from "../data/searchbar.json";
import {
  Tab,
  Nav,
  Accordion,
  Button,
  Card,
  useAccordionToggle,
} from "react-bootstrap";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSearch,
} from "react-icons/md";
import { ImCross } from "react-icons/im";

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}
const SideBarMenu = () => {
  const [activeKey, setActiveKey] = useState(null);

  const data = [
    { name: "mike", age: 22 },
    { name: "clive", age: 25 },
    { name: "morgan", age: 82 },
  ];
  return (
    <div className="App">
      <Accordion>
        {data.map((item, index) => (
          <Card key={index}>
            <CustomToggle
              as={Card.Header}
              eventKey={index}
              handleClick={() => {
                if (activeKey === index) {
                  setActiveKey(null);
                } else {
                  setActiveKey(index);
                }
              }}
            >
              {item.name}
              {activeKey === index ? "-" : "+"}
            </CustomToggle>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.age}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
const Searchsidebar = () => {
  const [idx, setIdx] = useState([]);
  const [i, setI] = useState(0);

  return (
    <div className="sidebar">
      {/* Search Widget */}
      <div className="widget widget-search">
        <h6 style={{ fontWeight: "normal" }} className="text-color">
          Filter
        </h6>

        <Accordion>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={1}
                onClick={() => {
                  if (idx === 1) setIdx(null);
                  else setIdx(1);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Used filters</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          1
                        </span>{" "}
                        {idx === 1 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={1} className="collapseparent1">
              <Card.Body>
                <span style={{ fontSize: 14 }}>Indicators by subject:</span>&nbsp;
                <span  style={{ fontSize: 10 }} class="badge badge-dark">
                  Population <ImCross />
                </span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={2}
                onClick={() => {
                  if (idx === 2) setIdx(null);
                  else setIdx(2);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Frequency</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          all/3
                        </span>
                        {idx === 2 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={2} className="collapseparent1">
              <Card.Body>
                <input type="checkbox"   />{" "}
                Annual <br />
                <input type="checkbox"   />{" "}
                Quarterly <br />
                <input type="checkbox"   />{" "}
                Monthly <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={3}
                onClick={() => {
                  if (idx === 3) setIdx(null);
                  else setIdx(3);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Reference Area</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          all/327
                        </span>
                        {idx === 3 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={3} className="collapseparent1">
              <Card.Body style={{ height: '300px', overflow: 'auto' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                  type="search"
                  value={""}
                  placeholder={"Search in all items"}
                />
                <MdOutlineSearch style={{ position: 'absolute', top: 15,left: 5, fontSize: 20 }} />
                </div><br />
                <input type="checkbox"  /> <span className="inputSize">Nigeria (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Nigeria: Low income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Nigeria: Lower-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Nigeria: Upper-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Nigeria: High income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Africa: Low income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Africa: Lower-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Africa: Upper-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Africa: High income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Northern Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Northern Africa: Low income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Northern Africa: Lower-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Northern Africa: Upper-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Northern Africa: High income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Sub-Saharan Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Sub-Saharan Africa: Low income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Sub-Saharan Africa: Lower-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Sub-Saharan Africa: Upper-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Sub-Saharan Africa: High income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Central Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Eastern Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Southern Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Western Africa (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Americas (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Americas: Low income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Americas: Lower-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Americas: Upper-middle income (4)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Americas: High income (4)</span> <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={4}
                onClick={() => {
                  if (idx === 4) setIdx(null);
                  else setIdx(4);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Measure</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          all/7
                        </span>
                        {idx === 4 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={4} className="collapseparent1">
              <Card.Body>
                <input type="checkbox"   />{' '}
                Working-age population (POP_XWAP_NB) (13) <br />
                <input type="checkbox"   />{' '}
                Youth working-age population (POP_3STG_NB) (3) <br />
                <input type="checkbox"   />{' '}
                Youth working-age population (POP_3FOR_NB) (3) <br />
                <input type="checkbox"   />{' '}
                Youth working-age population (POP_3WAP_NB) (5) <br />
                <input type="checkbox"   />{' '}
                Labour dependency ratio -- ILO modelled estimates (POP_2LDR_RT) (1) <br />
                <input type="checkbox"   />{' '}
                Population -- UN estimates and projections (POP_2POP_NB) (3) <br />
                <input type="checkbox"   />{' '}
                Working-age population -- 19th ICLS (POP_5WAP_NB) (1) <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={5}
                onClick={() => {
                  if (idx === 5) setIdx(null);
                  else setIdx(5);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Attendance in school or training</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          all/4
                        </span>
                        {idx === 5 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={5} className="collapseparent1">
              <Card.Body>
                <input type="checkbox"   />{" "}
                Total (STU_EDU_TOTAL) (1) <br />
                <input type="checkbox"   />{" "}
                Attending (STU_EDU_YES) (1) <br />
                <input type="checkbox"   />{" "}
                Not attending (STU_EDU_NO) (1)<br />
                <input type="checkbox"   />{" "}
                Not elsewhere classified (STU_EDU_X) (1) <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card style={{ marginBottom: 0 }}>
            <Card.Header>
              <Accordion.Toggle
                style={{ fontWeight: "normal", width: "100%" }}
                as={Link}
                variant="link"
                eventKey={6}
                onClick={() => {
                  if (idx === 6) setIdx(null);
                  else setIdx(6);
                }}
              >
                <div>
                  <div style={{ flex: 1, flexDirection: "row" }}>
                    <div style={{}}>
                      <span style={{ float: "left",color: 'black' }}>Forms of transition</span>
                    </div>
                    <div style={{}}>
                      <span style={{ float: "right" }}>
                        <span className="text-green"
                          style={{ border: "1px solid red", padding: "1px" }}
                        >
                          all/15
                        </span>
                        {idx === 6 ? (
                          <MdOutlineKeyboardArrowUp className="fontSize text-green" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="fontSize text-green" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={6} className="collapseparent1">
              <Card.Body style={{ height: '300px', overflow: 'auto' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                  type="search"
                  value={""}
                  placeholder={"Search in all items"}
                />
                <MdOutlineSearch style={{ position: 'absolute', top: 15,left: 5, fontSize: 20 }} />
                </div><br />
                <input type="checkbox"  /> <span className="inputSize">Total (TRA_STATE_TOTAL) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">1 - Transited (TRA_STAGE_1) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">2 - In Transition (TRA_STAGE_2) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">3 - Transition not yet started (TRA_STAGE_3) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">X - Not elsewhere classified (TRA_STAGE_4) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">Total (TRA_FORMS_TOTAL) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">1 - School leavers in stable employment (TRA_FORMS_1) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">2 - School leavers in satisfactory temporary or self-employment, not wanting to change job (TRA_FORMS_2) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">3 - Students in labour force (TRA_FORMS_3) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">4 - Unemployment school leavers (TRA_FORMS_4) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">5 - School leavers in non-stable or non-satisfactory employment, wanting to change job (TRA_FORMS_5) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">6 - Outside the labour force - school leavers in potential labour force or aiming to look for work later (TRA_FORMS_6) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">7 - Outside the labour force - students (TRA_FORMS_7) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">8 - Outside the labour force - school leavers with not intention of looking for job (TRA_FORMS_8) (3)</span> <br />
                <input type="checkbox"  /> <span className="inputSize">9 - Not elsewhere classified (TRA_FORMS_9) (3)</span> <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default withRouter(Searchsidebar);
