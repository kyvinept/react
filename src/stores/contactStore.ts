import { access } from "fs";
import { action, decorate, observable } from "mobx";
import { SendRequestModel } from "../models/SendRequestModel";
import ContactAPIService from "../services/API/ContactAPIService/ContactAPIService";
import NavigationManager, {
  NavigationType,
  Page,
} from "../services/NavigationManager";

export class ContactStore {
  private contactAPIService = new ContactAPIService();

  sendRequestModel: SendRequestModel = {
    name: "",
    email: "",
    message: "",
  };

  setName(name: string) {
    this.sendRequestModel.name = name;
  }

  setEmail(email: string) {
    this.sendRequestModel.email = email;
  }

  setMessage(message: string) {
    this.sendRequestModel.message = message;
  }

  sendRequest = () => {
    this.contactAPIService.createRequest(this.sendRequestModel).then(() => {
      NavigationManager.open(Page.successRequest, NavigationType.currentTab);
    });
  };
}

const contactStore = new ContactStore();
export default contactStore;

decorate(ContactStore, {
  sendRequestModel: observable,

  sendRequest: action,
});
