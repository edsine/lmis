import React from 'react';

const Editable = ({editFormData, handleEditFormChange, handleCancelClick}) =>{
    return(
        <>
            <>
				<td></td>
                <td>
                    <input type="text" required = "required" placeholder = "Enter full name ..." name="fullname" 
                        value={editFormData.fullname}
                        onChange={handleEditFormChange}
                    />
                </td>   
            
				<td>
                    <input type="text" required = "required" placeholder = "Enter a phone number" name="phone"
                        value={editFormData.phone}
                        onChange={handleEditFormChange}
                    />
                </td>
				<td>
                    <input type="text" required = "required" placeholder = "Enter a email" name="email"
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                <select  className="form-control"
														name="role_id"
														onChange={handleEditFormChange}>
														<option value="">Select Role</option>
														<option value="2" selected={editFormData.role_id === 2}>User</option>
														<option value="1" selected={editFormData.role_id === 1}>Admin</option>
													</select>  
                </td>
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