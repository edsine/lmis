import React from 'react';
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

const Styles = styled.div `
  table {
    margin: 20px 0 20px 0;
    border-collapse: collapse;
    font-size: 16px;
    width: 100%;
    
    tr {
        border: 1px solid #ddd;
        padding: 8px;
        :nth-child(even){background-color: #f2f2f2;}
        :hover {background-color: #ddd;}
    }

    th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #ddd;
        color: #393939;
        border: 1px solid #ffffff;
    }

    td {
        border: 1px solid #eee;
        padding: 8px;
         :last-child {
        border-right: 0;
      }
    }
  }
 .pagination{
    font-size: 18px;
 }
 .paginate{
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px
 }
 .paginate1{
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 5px
 }
  
`

function Table({columns, data}) {
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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render Data Table UI
  return (
    <>
       <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>  

     {/* Pagination */}
     <div className="pagination">
        <button className="paginate" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button className="paginate" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button className="paginate" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button className="paginate" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span className="paginate1">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className="paginate1">
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[3, 5, 15, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>

  )
}

function App(props) {


  const data = Object.values(props.tabledata);

  const columns = [
    {
      Header: 'ID',
      accessor: 'id'
    }, {
      Header: 'Reference Area',
      accessor: 'reference_area'
    }, {
      Header: 'Time Period',
      accessor: 'time_period'
    }, {
      Header: 'Age 15+',
      accessor: 'age_15_plus'
    },{
      Header: 'Age 15-64',
      accessor: 'age_15_64'
    },{
      Header: 'Age 15-24',
      accessor: 'age_15_24'
    },{
      Header: 'Age 25+',
      accessor: 'age_25_plus'
    }
  ]

  return (
    <Styles>
      <Table data={data} columns={columns}/>
    </Styles>
  )

}

export default App