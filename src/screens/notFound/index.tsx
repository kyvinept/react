import React from "react";
import { useObserver } from "mobx-react";

const TITLE = "Page not found";

const NotFound = () => {
  document.title = TITLE;

  return useObserver(() => <div />);
};

export default NotFound;
