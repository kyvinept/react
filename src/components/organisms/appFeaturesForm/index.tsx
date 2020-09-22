import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import AppFeature from "../../molecules/appFeature";
import Stores from "../../../stores";

const AppFeaturesForm = () => {
  const projectStore = Stores.projectStore;
  const languageStore = Stores.languageStore;

  return useObserver(() => (
    <div className={"app-features-form center-style"}>
      <h2>{languageStore.strings.AppFeatures}</h2>

      {projectStore.project?.app_features.map((item, index) => {
        return (
          <AppFeature
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
            reverse={index % 2 == 1}
          />
        );
      })}
    </div>
  ));
};

export default AppFeaturesForm;
