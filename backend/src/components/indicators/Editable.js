import React from 'react';

const Editable = ({editFormData, handleEditFormChange, handleCancelClick, EditImageHandler}) =>{
    return(
        <>
            <>
				<td></td>
                <td>
                    <input type="text"required  placeholder = "Name of Indicator" name="title" 
                        value={editFormData.title}
                        onChange={handleEditFormChange}
                    />
                </td>     
            
				<td>
                    <textarea type="text" required placeholder = "Description" name="content"
                        onChange={handleEditFormChange}
                        rows="4"
                        value={editFormData.content}
                    >   
                        {editFormData.content}
                    </textarea>
                </td>
				<td>
                    <input type="file" className="form-control" required placeholder = "Indicator image" name="imagePath"
                        onChange={EditImageHandler}
                    />
                </td>
                <td></td>
                <td>	
					<div className="d-flex">
						<button className="btn btn-warning shadow btn-xs sharp me-1" type="submit"><i className="las la-check-circle scale5"></i></button>
						<button className="btn btn-danger shadow btn-xs sharp " type="button" onClick={handleCancelClick}>
							<i className="las la-times-circle scale5"></i>
						</button>
					</div>
                </td>
            </>
        </>
    )
}
export default Editable;