module.exports = {
  name: 'elements-shop-widgets',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/elements/shop-widgets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
