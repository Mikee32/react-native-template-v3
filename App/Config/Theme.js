import React from 'react';
import {extendTheme} from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const colors = {
  primary: {
    50: '#ffefde',
    100: '#fbd5b6',
    200: '#f3bb8b',
    300: '#eda05f',
    400: '#e68532',
    500: '#cd6c19',
    600: '#a05411',
    700: '#733b0b',
    800: '#462302',
    900: '#1d0900',
  },

  primaryAccent: {
    50: '#ffe9e9',
    100: '#f0c8c6',
    200: '#dea5a2',
    300: '#cf827d',
    400: '#c05f59',
    500: '#a6463f',
    600: '#823530',
    700: '#5e2622',
    800: '#3a1513',
    900: '#1b0401',
  },

  secondary: {
    50: '#e2f7ff',
    100: '#c3e2ec',
    200: '#a1cddc',
    300: '#7fbacd',
    400: '#5da6bd',
    500: '#448ca4',
    600: '#326d80',
    700: '#214e5d',
    800: '#0e3039',
    900: '#001217',
  },

  secondaryAccent: {
    50: '#e2f7fe',
    100: '#c4e3ed',
    200: '#a1cfde',
    300: '#7dbccf',
    400: '#5ca7c1',
    500: '#438fa7',
    600: '#326f83',
    700: '#214f5e',
    800: '#0f3039',
    900: '#001218',
  },
};

export default extendTheme({config, colors});
