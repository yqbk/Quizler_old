import { Platform } from 'react-native';

export const colors = {
    mainRed: 'rgb(217, 53, 35)',
    mainBlack: 'rgb(0,0,0)',
    mainPink: 'rgb(238, 9, 116)',
    transparentPink: 'rgba(255, 0, 119, 0.2)',
    mainPurple: 'rgb(103, 036, 147)',
    mainGrey: 'rgb(105, 107, 114)',
    borderGrey: 'rgb(189, 189, 189)',
    loaderGrey: 'rgb(242, 242, 242)',
    black: 'rgb(51, 51, 51)',
    dropShadow: 'rgba(0, 0, 0, 0.1)',
};

export const fontSizes = {
    peta: 30,
    giga: 24,
    kilo: 18,
    base: 14,
    mini: 12,
};

export const fontWeights = {
    medium: (Platform.OS === 'ios') ? '500' : '400',
    semiBold: (Platform.OS === 'ios') ? '600' : '500',
};
