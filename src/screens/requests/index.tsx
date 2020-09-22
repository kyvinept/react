import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import "../../components/common/styles.scss";
import Stores from "../../stores";
import TextButton from "../../components/atoms/textButton";
import { getFormattedRequestDate } from "../../helpers/getFormattedRequestDate";

const Requests = () => {
  const contactsStore = Stores.contactsStore;

  useEffect(() => {
    contactsStore.getRequests();
  }, []);

  const renderData = () => {
    const onPressDelete = (id: string) => {
      contactsStore.deleteRequest(id);
    };

    return contactsStore.requests.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.message}</td>
          <td>{getFormattedRequestDate(new Date(item.date))}</td>
          <td>
            <TextButton
              text={"Delete"}
              onPress={() => onPressDelete(item.id)}
            />
          </td>
        </tr>
      );
    });
  };

  return useObserver(() => (
    <div className={"center-style"}>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>message</th>
          <th>date</th>
          <th>
            <TextButton
              text={"Delete all"}
              onPress={contactsStore.deleteAllRequests}
            />
          </th>
        </tr>
        {renderData()}
      </table>
    </div>
  ));
};

export default Requests;
