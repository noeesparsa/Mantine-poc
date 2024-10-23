import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Decathlon VF, sans-serif',
  scale: 1,
  colors: {
    blue: [
      '#eef0ff',
      '#daddf7',
      '#b2b7e9',
      '#8890db',
      '#646ecf',
      '#4e59c9',
      '#414ec7',
      '#333fb0',
      '#2b389e',
      '#21308c',
    ], //7
    teal: [
      "#e6ffef",
      "#d0ffdf",
      "#9efebc",
      "#6afe98",
      "#43fe79",
      "#2efe65",
      "#22fe5b",
      "#15e34a",
      "#00c940",
      "#00ae32"
    ], //3
    gray: [
      '#fbf3f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#5c5557',
    ], //8
    green: [
      "#edfdf6",
      "#dbf8ec",
      "#b1f2d7",
      "#84ebc0",
      "#62e6ae",
      "#4ee3a1",
      "#42e19b",
      "#35c886",
      "#2ab276",
      "#149a64"
    ], //9
    red: [
      "#ffe8ed",
      "#ffcfd6",
      "#fe9dab",
      "#fc677c",
      "#fa3b55",
      "#fa213c",
      "#fb112f",
      "#e00322",
      "#c8001d",
      "#af0017"
    ], //7
  },
  primaryShade: 7,
  primaryColor: 'blue',
  white: '#ffffff',
  black: '#101010',
  autoContrast: true,
  headings: {
    fontFamily: 'Decathlon VF, sans-serif',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: '26px', lineHeight: '123%', fontWeight: '600' },
      h2: { fontSize: '22px', lineHeight: '118%', fontWeight: '600' },
      h3: { fontSize: '20px', lineHeight: '150%', fontWeight: '600' },
      h4: { fontSize: '16px', lineHeight: '150%', fontWeight: '600' },
    },
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(22),
  },
  defaultRadius: 'sm',
  radius: {
    xs: rem(0),
    sm: rem(8),
    md: rem(20),
    full: rem(999),
  },
  spacing: {
    none: rem(0),
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(24),
  },
  shadows: {
    xl: '-11px 17px 6px 0px rgba(94, 103, 201, 0.01), -7px 11px 5px 0px rgba(94, 103, 201, 0.05), -4px 6px 4px 0px rgba(94, 103, 201, 0.16), -2px 3px 3px 0px rgba(94, 103, 201, 0.27), 0px 1px 2px 0px rgba(94, 103, 201, 0.31)',
  },
});
