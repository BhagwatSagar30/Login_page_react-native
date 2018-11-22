import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;

export const SIZE_2 = ratioX * 2;
export const SIZE_4 = ratioX * 4;
export const SIZE_6 = ratioX * 6;
export const SIZE_8 = ratioX * 8;
export const SIZE_10 = ratioX * 10;
export const SIZE_12 = ratioX * 12;
export const SIZE_14 = ratioX * 14;
export const SIZE_16 = ratioX * 16;
export const SIZE_18 = ratioX * 18;
export const SIZE_20 = ratioX * 20;
export const SIZE_24 = ratioX * 24;
export const SIZE_26 = ratioX * 26;
export const SIZE_44 = ratioX * 44;
