import { ContactsStore } from "./contactsStore";
import { ContactStore } from "./contactStore";
import { LanguageStore } from "./languageStore";
import { ProjectsStore } from "./projectsStore";
import { ProjectStore } from "./projectStore";

export class RootStore {
  contactStore: ContactStore;
  languageStore: LanguageStore;
  contactsStore: ContactsStore;
  projectsStore: ProjectsStore;
  projectStore: ProjectStore;

  constructor() {
    this.contactStore = new ContactStore();
    this.contactsStore = new ContactsStore();
    this.languageStore = new LanguageStore();
    this.projectsStore = new ProjectsStore();
    this.projectStore = new ProjectStore();
    this.projectStore.setLanguageStore(this.languageStore);
    this.projectsStore.setLanguageStore(this.languageStore);
  }
}

const stores = new RootStore();
export default stores;
