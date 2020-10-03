export interface ProjectShort {
  id: string;
  image_url: string;
  title: string;
  date: Date;
  type: 'mobile' | 'web';
}

export interface AppFeature {
  id: string;
  image_url: string;
  title: string;
  description: string;
}

export interface DevelopmentStackItem {
  id: string;
  title: string;
  text: string;
}

export interface DevelopmentStack {
  id: string;
  title: string;
  developmentStackItems: DevelopmentStackItem[];
}

export interface ProjectModel {
  id: string;
  type: 'mobile' | 'web';
  main_image_url: string;
  appstore_link?: string;
  google_play_link?: string;
  title: string;
  description: string;
  app_features: AppFeature[];
  development_stacks: DevelopmentStack[];
}
