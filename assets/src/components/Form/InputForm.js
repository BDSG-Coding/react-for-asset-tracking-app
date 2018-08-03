import React from "react";

const InputForm = props => (
  <div className="form-group">
    <label type="input-form">{}</label>
    <input className="form-control" {...props} />
 </div>
);

export default InputForm;