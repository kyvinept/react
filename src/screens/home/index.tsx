import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import Header from "../../components/molecules/header";
import "../../components/common/styles.scss";
import PurpleForm from "../../components/molecules/purpleForm";
import TopWelcomeForm from "../../components/organisms/topWelcomeForm";
import FieldOfActivityForm from "../../components/organisms/fieldOfActivityForm";
import MyWorksForm from "../../components/organisms/myWorksForm";
import StartProjectForm from "../../components/organisms/startProjectForm";
import Footer from "../../components/organisms/footer";
import Stores from "../../stores";

const Home = () => {
  const projectsStore = Stores.projectsStore;
  const languageStore = Stores.languageStore;

  useEffect(() => {
    projectsStore.getProjects();
  }, []);

  return useObserver(() => (
    <div className={"center-style"}>
      <Header needToShowAnimationForSayHelloButton={true} />
      <TopWelcomeForm />
      <PurpleForm
        title={languageStore.strings.HiImVladNicetomeetyou}
        text={languageStore.strings.Description}
        needToShowBottomOffset={true}
      />
      <FieldOfActivityForm />
      <MyWorksForm />
      <StartProjectForm />
      <Footer />
    </div>
  ));
};

export default Home;
