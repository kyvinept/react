import React, { useEffect, useState } from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import Tada from "react-reveal/Tada";

const ANIMATION_DELAY = 2500;

export interface BordereToFilledButtonProps {
  text: string;
  textStyle?: string;
  disableAnimation?: boolean;
  onPress?: () => void;
}

const BordereToFilledButton = (props: BordereToFilledButtonProps) => {
  const [tadaCount, setTadaCount] = useState(0);

  useEffect(() => {
    !props.disableAnimation && showTadaEffect();
  }, []);

  useEffect(() => {
    !props.disableAnimation &&
      setTimeout(() => {
        showTadaEffect();
      }, ANIMATION_DELAY);
  }, [tadaCount]);

  const showTadaEffect = () => {
    setTadaCount(tadaCount + 1);
  };

  return useObserver(() => (
    <Tada spy={tadaCount}>
      <a
        className={"borderToFilledButton " + props.textStyle}
        onClick={props.onPress}
      >
        {props.text}
      </a>
    </Tada>
  ));
};

export default BordereToFilledButton;
