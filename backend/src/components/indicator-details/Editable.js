import React, { useState, useEffect } from "react";
import IndicatorService from "../../services/indicator.service";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { dimensions } from "../../common/dimensions";

const chartTypes = [
  { value: "line", label: "Line" },
  { value: "bar", label: "Bar" },
  { value: "pie", label: "Pie" },
  { value: "scatter", label: "Scatter" },
];



const Editable = ({
  editFormData,
  handleEditFormChange,
  handleFeasibleChartsEditChange,
  handleDimensionsEditChange,
  handleCancelClick,
  EditImageHandler,
}) => {
  const [indicators, setIndicators] = useState(null);

  const fetchIndicators = async () => {
    const res = await IndicatorService.getIndicators().then(
      (response) => {
        setIndicators(response.data);
      },
      (error) => {}
    );
  };

  useEffect(() => {
    fetchIndicators();
  }, []);
  return (
    <>
      <>
        <td></td>
        <td>
          <input
            type="text"
            required
            placeholder="Title"
            name="title"
            value={editFormData.title}
            onChange={handleEditFormChange}
          />
        </td>

        <td>
          <textarea
            type="text"
            required
            placeholder="Description"
            name="description"
            onChange={handleEditFormChange}
            rows="4"
          >
            {editFormData.description}
          </textarea>
        </td>
        <td>
          <input
            type="text"
            required
            placeholder="Measure"
            name="measure"
            value={editFormData.measure}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <Select
            value={JSON.parse(editFormData.dimensions)}
            options={dimensions}
            onChange={handleDimensionsEditChange}
            isMulti
            form="dimensions"
          />
        </td>
        <td>
          <Select
            value={JSON.parse(editFormData.feasibleCharts)}
            options={chartTypes}
            onChange={handleFeasibleChartsEditChange}
            isMulti
            form="feasibleCharts"
          />
        </td>
        <td>
          <input
            type="file"
            className="form-control"
            placeholder="Sample Excel file"
            name="sampleExcelPath"
            onChange={EditImageHandler}
          />
        </td>
        <td>
          <select
            name="indicator_id"
            className="form-control"
            onChange={handleEditFormChange}
            value={editFormData.indicator_id}
          >
            <option></option>
            {indicators &&
              indicators.map((indicator, index) => (
                <option key={index} value={indicator.id}>
                  {indicator.title}
                </option>
              ))}
          </select>
        </td>
        <td></td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-warning shadow btn-xs sharp me-1"
              type="submit"
            >
              <i className="las la-check-circle scale5"></i>
            </button>
            <button
              className="btn btn-danger shadow btn-xs sharp "
              type="button"
              onClick={handleCancelClick}
            >
              <i className="las la-times-circle scale5"></i>
            </button>
          </div>
        </td>
      </>
    </>
  );
};
export default Editable;
