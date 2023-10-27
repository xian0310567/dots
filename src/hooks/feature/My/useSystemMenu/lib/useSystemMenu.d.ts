export type SystemMenuCallback = {
  systemMenus: SystemMenus[];
};

export type SystemMenus = {
  title: string;
  directionType: 'url' | 'route';
  url: string;
};
