import {useState, useEffect} from 'react';

import {Appearance} from 'react-native';

const useDarkMode = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  const isDarkMode = () => {
    useEffect(() => {
      if (colorScheme == 'light') {
        setColorScheme('dark');
        Appearance.setColorScheme('dark');
      }
      Appearance.addChangeListener(({colorScheme}) =>
        setColorScheme(colorScheme),
      );
    }, []);

    return colorScheme == 'dark';
  };

  return {isDarkMode};
};

export default useDarkMode;
