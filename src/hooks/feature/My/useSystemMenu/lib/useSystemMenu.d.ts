export type SystemMenuCallback = {
  systemMenus: SystemMenus[];
};

export type SystemMenus = {
  key: number | string;
  title: string;
  directionType: 'url' | 'route';
  url: string;
};
