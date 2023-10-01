import {useState, useEffect} from 'react';

import {Appearance} from 'react-native';

const useDarkMode = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

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

export default useDarkMode;
