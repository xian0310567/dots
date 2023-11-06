export type SystemMenuCallback = {
  systemMenus: SystemMenus[];
};

export type SystemMenus = {
  key: number | string;
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
