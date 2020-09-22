import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";

export interface InputFieldSingleLineProps {
  title: string;
  type: "email" | "text";
  value?: string;
  isMultiline?: false | undefined;
  onChange?: (text: string) => void;
}

export interface InputFieldMultiLineProps {
  title: string;
  type: "email" | "text";
  value?: string;
  isMultiline: true;
  rows: number;
  onChange?: (text: string) => void;
}

export type InputFieldProps =
  | InputFieldSingleLineProps
  | InputFieldMultiLineProps;

const InputField = (props: InputFieldProps) => {
  return useObserver(() => (
    <div className={"input-field"}>
      <p>{props.title}</p>
      {props.isMultiline ? (
        <textarea
          rows={props.rows}
          value={props.value}
          onChange={(evt) => {
            props.onChange && props.onChange(evt.target.value);
          }}
        />
      ) : (
        <input
          type={props.type}
          value={props.value}
          onChange={(evt) => {
            props.onChange && props.onChange(evt.target.value);
          }}
        />
      )}
    </div>
  ));
};

export default InputField;
