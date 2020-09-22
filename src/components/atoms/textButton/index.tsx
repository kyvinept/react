import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";

export interface TextButtonProps {
  text: string;
  onPress?: () => void;
}

const TextButton = (props: TextButtonProps) => {
  return useObserver(() => (
    <a className={"textButton"} onClick={props.onPress}>
      {props.text}
    </a>
  ));
};

export default TextButton;
