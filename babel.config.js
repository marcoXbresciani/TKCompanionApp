module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        pure: true
      },
      'react-native-paper/babel'
    ]
  ]
}
