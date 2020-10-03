import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import FieldOfActivityItem from "../../molecules/fieldOfActivityItem";
import { Images } from "../../../styles";
import Stores from "../../../stores";

const FieldOfActivityForm = () => {
  const languageStore = Stores.languageStore;

  return useObserver(() => (
    <div className={"field-of-activity-form"}>
      <div className={"column"}>
        <FieldOfActivityItem
          image={Images.ios}
          title={languageStore.strings.iOSDeveloper}
          text={
            languageStore.strings
              .IwriteclearnativecodetocreategreatappsforAppleplatform
          }
          subtitle={languageStore.strings.LanguagesIspeak}
          subtext={"Swift, Objective-C"}
          toolsTitle={languageStore.strings.DevTools}
          tools={[
            "Xcode",
            "Github",
            "Gitlab",
            "Gitlab CI",
            "Bitbucket",
            "Git",
            "Terminal",
          ]}
        />
        <div className={"horizontal-spacer"} />
        <FieldOfActivityItem
          image={Images.reactnative}
          title={languageStore.strings.ReactNativeDeveloper}
          text={
            languageStore.strings
              .IuseReactNativefordevelopingcrossplatformappsIadjustedtocustomersrequeststosavemoneyforcreatingasimpleapp
          }
          subtitle={languageStore.strings.DesigntoolsIworkwith}
          subtext={"Zeplin, Figma"}
          toolsTitle={languageStore.strings.Technology}
          tools={["MobX", "Redux", "Redux Saga", "Firebase", "TypeScript"]}
        />
      </div>
      <div className={"horizontal-spacer-between-columns"} />
      <div className={"column"}>
        <FieldOfActivityItem
          image={Images.web}
          title={languageStore.strings.ReactDeveloper}
          text={
            languageStore.strings
              .Iliketocodethingsfromscratchandenjoybringingideastolifeinthebrowser
          }
          subtitle={languageStore.strings.TechnologyIuse}
          subtext={"HTML, CSS, JS, React"}
          toolsTitle={languageStore.strings.DevTools}
          tools={[
            "Visual Studio Code",
            "Github",
            "Gitlab",
            "Bitbucket",
            "Git",
            "Terminal",
          ]}
        />
        <div className={"horizontal-spacer"} />
        <FieldOfActivityItem
          image={Images.nodejs}
          title={languageStore.strings.NodeJSDeveloper}
          text={
            languageStore.strings
              .IdevelopasimpleBackendpartformybeatifulwebandmobileapps
          }
          subtitle={languageStore.strings.Databases}
          subtext={"MongoDB, PostgreSQL, MSSQL, MySQL"}
          toolsTitle={languageStore.strings.Technology}
          tools={[
            "Redis",
            "AWS",
            "Docker",
            "Express",
            "Websockets",
            "RESTful API",
          ]}
        />
      </div>
    </div>
  ));
};

export default FieldOfActivityForm;
