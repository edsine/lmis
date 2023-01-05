import React, { useState, useEffect } from "react";
import IndicatorService from "../../services/indicator.service";

const Editable = ({
  editFormData,
  handleEditFormChange,
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
          <input
            type="text"
            required
            placeholder="Dimensions"
            name="dimensions"
            value={editFormData.dimensions}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required
            placeholder="Feasible Charts"
            name="feasibleCharts"
            value={editFormData.feasibleCharts}
            onChange={handleEditFormChange}
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
