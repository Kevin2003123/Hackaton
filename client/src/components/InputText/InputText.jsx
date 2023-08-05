import React from 'react';
import { useField } from 'formik';
import style from "../InputText/InputText.module.css"

export function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='mb-2'>
        <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
        <input placeholder={props.placeholder} value={props.value} className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={`${style["error"]} mt-1`}>{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};


