import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTable, usePagination, useFilters } from "react-table";
import { format, compareAsc } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Editable from "./Editable";

const Styles = styled.div`
  table {
    margin: 20px 0 20px 0;
    border-collapse: collapse;
    font-size: 16px;
    width: 100%;

    tr {
      border: 1px solid #ddd;
      padding: 8px;
      :nth-child(even) {
        background-color: #f2f2f2;
      }
      :hover {
        background-color: #ddd;
      }
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #ddd;
      color: #393939;
      border: 1px solid #ffffff;
      white-space: nowrap;
    }

    td {
      border: 1px solid #eee;
      padding: 8px;
      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    font-size: 18px;
  }
  .paginate {
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 5px;
  }
  .paginate1 {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 5px;
  }
`;

function Table({
  columns,
  data,
  handleEditClick,
  confirmDelete,
  editContentId,
  handleCancelClick,
  handleEditFormChange,
  editFormData,
  EditImageHandler,
}) {
  const [filterInput, setFilterInput] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      handleEditClick,
      confirmDelete,
      editContentId,
      handleCancelClick,
      handleEditFormChange,
      editFormData,
      EditImageHandler,
    },
    useFilters,
    usePagination
  );
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("fullname", value);
    setFilterInput(value);
  };

  // Render Data Table UI
  return (
    <>
      {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search Name"}
      /> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {data.map((cell, index) => (
            <tr key={index}>
              {editContentId === cell.id ? (
                <Editable
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  EditImageHandler={EditImageHandler}
                />
              ) : (
                <>
                  <td>{index++}</td>
                  <td>{cell.title}</td>
                  <td>{cell.description}</td>
                  <td>{cell.measure}</td>
                  <td>{cell.dimensions}</td>
                  <td>{cell.feasibleCharts}</td>
                  <td>{cell.sampleExcelPath}</td>
                  <td></td>
                  <td>
                    {cell.createdAt
                      ? format(new Date(cell.createdAt), "dd MM, yyyy H:i:s")
                      : format(new Date(), "dd MM, yyyy H:i:s")}
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link
                        className="btn btn-secondary	 shadow btn-xs sharp me-2"
                        onClick={(event) => handleEditClick(event, cell)}
                      >
                        <i className="fas fa-pen"></i>
                      </Link>
                      <Link
                        className="btn btn-danger shadow btn-xs sharp"
                        onClick={() => confirmDelete(cell.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </Link>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="paginate"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          className="paginate"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <button
          className="paginate"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          className="paginate"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>{" "}
        <span className="paginate1">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="paginate1">
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[3, 5, 15, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function App(props) {
  const data = Object.values(props.tabledata);
  const editContentId = props.editContentId ? props.editContentId : "";
  const editFormData = props.editFormData ? props.editFormData : "";
  const EditImageHandler = props.EditImageHandler ? props.EditImageHandler : "";

  const confirmDelete = props.confirmDelete;
  const handleEditClick = props.handleEditClick;
  const handleCancelClick = props.handleCancelClick;
  const handleEditFormChange = props.handleEditFormChange;

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Measure",
      accessor: "measure",
    },
    {
      Header: "Dimensions",
      accessor: "dimensions",
    },
    {
      Header: "Feasible Charts",
      accessor: "feasibleCharts",
    },
    {
      Header: "Sample Excel Path",
      accessor: "sampleExcelPath",
    },
    {
      Header: "Indicator",
      accessor: "indicator_id",
    },
    {
      Header: "Date Created",
      accessor: "createdAt",
    },
  ];

  return (
    <Styles>
      <Table
        data={data}
        columns={columns}
        handleEditClick={handleEditClick}
        confirmDelete={confirmDelete}
        editContentId={editContentId}
        handleCancelClick={handleCancelClick}
        handleEditFormChange={handleEditFormChange}
        editFormData={editFormData}
        EditImageHandler={EditImageHandler}
      />
    </Styles>
  );
}

export default App;
