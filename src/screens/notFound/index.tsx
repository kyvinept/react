import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import FullScreenInformationForm from "../../components/organisms/fullScreenInformationForm";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import Stores from "../../stores";
import { Images } from "../../styles";

const TITLE = "Page not found";

const NotFound = () => {
  const languageStore = Stores.languageStore;

  const { height, width } = useWindowDimensions();

  document.title = TITLE;

  return useObserver(() => (
    <div className={"not-found"} style={{ height, width }}>
      <FullScreenInformationForm
        image={Images.robot}
        title={languageStore.strings.error404}
        description={
          languageStore.strings.Thisisntthedroidorpageyourelookingfor
        }
      />
    </div>
  ));
};

export default NotFound;
