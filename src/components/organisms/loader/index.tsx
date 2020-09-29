import React from "react";
import { useObserver } from "mobx-react";
import "../../../components/common/styles.scss";
import "./styles.scss";
import LoaderComponent from "react-loader-spinner";
import { Colors } from "../../../styles";
import Stores from "../../../stores";
import { LoaderType } from "../../../stores/containerStore";

export interface LoaderProps {
  type?: LoaderType;
  size?: number;
}

const Loader = (props: LoaderProps) => {
  const languageStore = Stores.languageStore;

  let text = "";
  switch (props.type) {
    case LoaderType.loading:
      text = languageStore.strings.Loading;
      break;

    case LoaderType.translating:
      text = languageStore.strings.Translating;
      break;
  }

  return useObserver(() => (
    <div className={"project-loader"}>
      <LoaderComponent
        type="Watch"
        color={Colors.applicationColor}
        height={props.size}
        width={props.size}
        visible={true}
      />
      <h2>{text}</h2>
    </div>
  ));
};

export default Loader;
