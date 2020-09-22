export enum Page {
  contact = "/contact",
  requests = "/requests",
  successRequest = "/success",
  home = "/",
  projects = "/projects/:id",
}

export enum NavigationType {
  currentTab = "_self",
}

class NavigationManager {
  open = (page: Page, type: NavigationType, params?: Object) => {
    let url = page.toString();

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        url = url.replace(":" + key, value);
      }
    }

    window.open(url, type);
  };

  openLink = (link: string) => {
    window.open(link);
  };
}

export default new NavigationManager();
