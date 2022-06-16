const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        'ts',
        'tsx',
    ],
    preset: 'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|react-native-iphone-x-helper|react-native-vector-icons)/)',
    ],
};
