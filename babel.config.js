module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          // '@components': './src/components',
          // '@hooks': './src/hooks',
          // '@utils': './src/utils',
          // '@assets': './src/assets',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
