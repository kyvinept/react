import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../components/common/styles.scss";
import SuccessRequestForm from "../../components/organisms/successRequestForm";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const TITLE = "Vladislav | Submission Success";

const SuccessRequest = () => {
  const { height, width } = useWindowDimensions();

  document.title = TITLE;

  return useObserver(() => (
    <div className={"success-request"} style={{ height, width }}>
      <SuccessRequestForm />
    </div>
  ));
};

export default SuccessRequest;
