import {useState} from 'react';
import {ColorsCallback} from './lib/useColors';

const useColors = (): ColorsCallback => {
  const colorList = [
    {
      name: 'lightRed',
      color: '#FF7F7F',
    },
    {
      name: 'lightOrange',
      color: '#FFD8A0',
    },
    {
      name: 'lightYellow',
      color: '#FFFFB3',
    },
    {
      name: 'lightGreen',
      color: '#90EE90',
    },
    {
      name: 'lightBlue',
      color: '#ADD8E6',
    },
    {
      name: 'lightPurple',
      color: '#D8BFD8',
    },
    {
      name: 'lightPink',
      color: '#FFB6C1',
    },
    {
      name: 'lightLimeGreen',
      color: '#BFFF80',
    },
    {
      name: 'lightSkyBlue',
      color: '#B0E0E6',
    },
    {
      name: 'navyBlue',
      color: '#000080',
    },
    {
      name: 'darkBrown',
      color: '#8B4513',
    },
    {
      name: 'darkGray',
      color: '#A9A9A9',
    },
  ];

  const [selectedColor, setSelectedColor] = useState(colorList[0].color);

  return {colorList, selectedColor, setSelectedColor};
};

export default useColors;
