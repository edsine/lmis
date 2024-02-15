import React, { useEffect, useState } from "react";

import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";
import "../../styles/pagination.css";

import Ndd from "../images/rice.jpg";

import Modal from "react-bootstrap/Modal";
import Common from "../inc/Common";
import { BACKEND_URL, BACKEND_URL_IMAGE } from "../../constants";

Modal.show = true;

export function DataPage() {
  const [dataInsights, setDataInsights] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch(`${BACKEND_URL}/data-insights?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        // const pageCount = data.meta?.pagination?.pageCount
        setDataInsights(data.data);
        // setPageCount(pageCount);
        // createPagination(pageCount);
      })
      .catch((err) => {});
  }, [page]);

  const changeModalData = (name, description) => {
    setModalData({ name, description });
  };

  // const createPagination = (pageCount) => {
  //   console.log(pageCount);
  //   let liTag = "";
  //   let active;
  //   let beforePage = page - 1;
  //   let afterPage = page + 1;
  //   if (page > 1) {
  //     //show the next button if the page value is greater than 1
  //     liTag += `<li class="btn prev" onclick="createPagination(pageCount, ${
  //       page - 1
  //     })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  //   }

  //   if (page > 2) {
  //     //if page value is less than 2 then add 1 after the previous button
  //     liTag += `<li class="first numb" onclick="createPagination(pageCount, 1)"><span>1</span></li>`;
  //     if (page > 3) {
  //       //if page value is greater than 3 then add this (...) after the first li or page
  //       liTag += `<li class="dots"><span>...</span></li>`;
  //     }
  //   }

  //   // how many pages or li show before the current li
  //   if (page == pageCount) {
  //     beforePage = beforePage - 2;
  //   } else if (page == pageCount - 1) {
  //     beforePage = beforePage - 1;
  //   }
  //   // how many pages or li show after the current li
  //   if (page == 1) {
  //     afterPage = afterPage + 2;
  //   } else if (page == 2) {
  //     afterPage = afterPage + 1;
  //   }

  //   for (var plength = beforePage; plength <= afterPage; plength++) {
  //     if (plength > pageCount) {
  //       //if plength is greater than totalPage length then continue
  //       continue;
  //     }
  //     if (plength == 0) {
  //       //if plength is 0 than add +1 in plength value
  //       plength = plength + 1;
  //     }
  //     if (page == plength) {
  //       //if page is equal to plength than assign active string in the active variable
  //       active = "active";
  //     } else {
  //       //else leave empty to the active variable
  //       active = "";
  //     }
  //     liTag += `<li class="numb ${active}" onclick="createPagination(pageCount, ${plength})"><span>${plength}</span></li>`;
  //   }

  //   if (page < pageCount - 1) {
  //     //if page value is less than totalPage value by -1 then show the last li or page
  //     if (page < pageCount - 2) {
  //       //if page value is less than totalPage value by -2 then add this (...) before the last li or page
  //       liTag += `<li class="dots"><span>...</span></li>`;
  //     }
  //     liTag += `<li class="last numb" onclick="createPagination(pageCount, ${pageCount})"><span>${pageCount}</span></li>`;
  //   }

  //   if (page < pageCount) {
  //     //show the next button if the page value is less than totalPage(20)
  //     liTag += `<li class="btn next" onclick="createPagination(pageCount, ${
  //       page + 1
  //     })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  //   }
  //   const element = document.querySelector(".pagination ul");
  //   element.innerHTML = liTag; //add li tag inside ul tag
  // };

  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Transitioning...");

  const showModalx = () => {
    setIsOpen(true);
  };

  const hideModalx = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoadedx = () => {
    setTitle("Modal Ready");
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <div style={{ padding: '100px' }}>
      {/* <script src="http://localhost:3000/bootstrap.bundle.js"></script>

      <Script url="http://localhost:3000/aos/aos.js" />
      <Script url="http://localhost:3000/swiper/swiper-bundle.min.js" />
      <Script url="http://localhost:3000/purecounter/purecounter_vanilla.js" />
      <Script url="http://localhost:3000/glightbox/js/glightbox.min.js" />
      <Script url="http://localhost:3000/isotope-layout/isotope.pkgd.min.js" />

      <Script url="http://localhost:3000/main.js" /> */}

      <Common/>

      <div className="container">
        <br></br>
        <p>
          Home || <b style={{ color: "green" }}>Data Insights</b>
        </p>
        <div className="row" >
          {dataInsights?.map((value, index) => {
            return (
              <div key={index} className="col-sm-4" >
                <div
                  className="card"
                  style={{
                    height: "300px",
                    marginBottom: "45px",
                    marginTop: "15px",
                  }}
                >
                  
                  <div className="card-block">
                    <img
                      style={{
                        height: "300px",
                        width: "420px",
                        objectFit: "cover",
                      }}
                      type="button"
                      onClick={() => {
                        showModal();
                        changeModalData(
                          value.attributes?.name,
                          value.attributes?.description
                        );
                      }}
                      data-toggle="modal"
                      data-target="#USG"
                      src={`${BACKEND_URL_IMAGE}${value?.attributes?.image?.data?.attributes?.url}`}
                      alt=""
                    />
                  </div>
                  <div
                    className=""
                    style={{
                      backgroundColor: "rgba(72, 129, 52, 1)",
                      opacity: 1.0,
                      marginBottom: "105px",
                      width: "420px",
                    }}
                  >
                    <center>
                      <p
                        style={{
                          color: "white",
                          paddingTop: "5px",
                          fontSize: "14px",
                        }}
                      >
                        {value.attributes?.name}
                      </p>
                    </center>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="row pagination mt-5">
          <div className="col-6">
            <ul></ul>
          </div>
        </div> */}
        <Modal
          show={isOpen}
          onHide={hideModal}
          onEntered={modalLoaded}
          size="lg"
          class="modal-content modal-xl"
          style={{ marginTop: "15%" }}
        >
          <Modal.Header class="modal-header">
            <Modal.Title>{modalData?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalData?.description}</Modal.Body>
          <Modal.Footer>
            <button
              onClick={hideModal}
              class="btn"
              style={{ backgroundColor: "red", color: "lightgrey" }}
            >
              X
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
export default DataPage;
