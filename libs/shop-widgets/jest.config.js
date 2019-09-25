module.exports = {
  name: 'shop-widgets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shop-widgets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
