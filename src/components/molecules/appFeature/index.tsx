import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import Fade from "react-reveal/Fade";

export interface AppFeatureProps {
  reverse?: boolean;
  imageUrl?: string;
  title?: string;
  description?: string;
  needShadow?: boolean;
}

const AppFeature = (props: AppFeatureProps) => {
  return useObserver(() => (
    <div
      className={"app-feature" + (props.reverse ? " app-feature-reverse" : "")}
    >
      <div className={"left-part"}>
        <Fade {...(props.reverse ? { right: true } : { left: true })}>
          <img className={props.needShadow ? "shadow" : ""} src={props.imageUrl} />
        </Fade>
      </div>

      <div className={"right-part"}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  ));
};

export default AppFeature;
