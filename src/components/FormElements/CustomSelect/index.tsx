import React, { FunctionComponent } from "react";

import './index.sass';

type CustomSelectProps = {
  field: string;
  required: boolean;
  register: Function;
  errorsMessageField: any;
  children: ChildNode;
};

const CustomSelect: FunctionComponent<CustomSelectProps> = ({
  field,
  required,
  register,
  errorsMessageField,
  children
}) => (
    <div className="custom-select-container">
      <select
        ref={register({
          required: required ? "Required" : false
        })}
        name={field}
      >
        <option value="">Select option</option>
        {children}
      </select>
      <div className="custom-select-container__message">{errorsMessageField}</div>
    </div>
  );

export default CustomSelect;

