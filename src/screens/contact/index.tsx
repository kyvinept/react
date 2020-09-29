import React from "react";
import { useObserver } from "mobx-react";
import "../../components/common/styles.scss";
import ContactForm from "../../components/organisms/contactForm";
import Header from "../../components/molecules/header";

const TITLE = "Vladislav | Contact";

const Contact = () => {
  document.title = TITLE;

  return useObserver(() => (
    <div className={"center-style"}>
      <Header />
      <ContactForm />
    </div>
  ));
};

export default Contact;
