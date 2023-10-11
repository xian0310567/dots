export type ColorsCallback = {
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  colorList: Colors[];
};

export type Colors = {
  name: string;
  color: string;
};
