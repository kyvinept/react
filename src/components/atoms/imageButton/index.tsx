import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";

export interface ImageButtonProps {
  image: string;
  onPress?: () => void;
}

const ImageButton = (props: ImageButtonProps) => {
  return useObserver(() => (
    <div className={"imageButton"}>
      <button className={"button"} onClick={props.onPress}>
        <img height={48} src={props.image} />
      </button>
    </div>
  ));
};

export default ImageButton;
