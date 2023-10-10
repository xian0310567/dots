import {ColorsCallback} from './lib/useColors';

const useColors = (): ColorsCallback => {
  const colorList = [
    {
      name: 'peach',
      color: '#F4BFBF',
    },
    {
      name: 'beige',
      color: '#FFD9C0',
    },
    {
      name: 'cream',
      color: '#FAF0D7',
    },
    {
      name: 'sea',
      color: '#8CC0DE',
    },
  ];

  return {colorList};
};

export default useColors;
