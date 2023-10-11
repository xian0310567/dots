import {Colors} from '@/hooks/feature/days/useColors';

export type ColorPickerProps = {
  colors: Colors[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
};
