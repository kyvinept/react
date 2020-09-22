import React from "react";
import { useObserver } from "mobx-react";

const NotFound = () => {
  return useObserver(() => <div />);
};

export default NotFound;
