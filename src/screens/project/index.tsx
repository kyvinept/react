import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import Header from "../../components/molecules/header";
import "../../components/common/styles.scss";
import { RouteComponentProps } from "react-router";
import PurpleForm from "../../components/molecules/purpleForm";
import AppFeaturesForm from "../../components/organisms/appFeaturesForm";
import Footer from "../../components/organisms/footer";
import DevelopmentStackForm from "../../components/organisms/developmentStackForm";
import StartProjectForm from "../../components/organisms/startProjectForm";
import Stores from "../../stores";

interface ProjectProps {
  id: string;
}

const Project = (props: RouteComponentProps<ProjectProps>) => {
  const projectStore = Stores.projectStore;
  const languageStore = Stores.languageStore;

  const id = props.match.params.id;

  useEffect(() => {
    projectStore.getProject(id);

    languageStore.setOnChangeLanguageCallback(onChangeLanguageCallback);
  }, []);

  const onChangeLanguageCallback = () => {
    projectStore.getProject(id);
  };

  return useObserver(() => (
    <div className={"center-style"}>
      <Header needToShowAnimationForSayHelloButton={true} />
      <PurpleForm
        title={projectStore.project?.title}
        text={projectStore.project?.description}
      />
      <AppFeaturesForm />
      {projectStore.project?.development_stacks.map((item) => {
        return (
          <DevelopmentStackForm
            title={item.title}
            developmentStackItems={item.developmentStackItems}
          />
        );
      })}
      <StartProjectForm />
      <Footer />
    </div>
  ));
};

export default Project;
