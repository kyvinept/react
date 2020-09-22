import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";

export interface FieldOfActivityItemProps {
  image?: string;
  title?: string;
  text?: string;
  subtitle?: string;
  subtext?: string;
  toolsTitle?: string;
  tools?: string[];
}

const FieldOfActivityItem = (props: FieldOfActivityItemProps) => {
  return useObserver(() => (
    <div className={"center-style field-of-activity-item"}>
      {props.image && <img height={45} src={props.image} />}
      {props.title && <h2>{props.title}</h2>}
      {props.text && <p>{props.text}</p>}
      {props.subtitle && <h3>{props.subtitle}</h3>}
      {props.subtext && <p>{props.subtext}</p>}
      {props.toolsTitle && <h3>{props.toolsTitle}</h3>}
      {props.tools && (
        <ul>
          {props.tools.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  ));
};

export default FieldOfActivityItem;
