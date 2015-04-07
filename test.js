'use strict';

var expect = require('chai').expect
  , fUrl = require('./index.js');

var TEST_URL = 'https://farm3.staticflickr.com/2843/72157639326167284_' +
  '5789bed1bd_z.jpg';

var TEST_PARAMS = {
  farm: 3,
  server: '2843',
  id: '72157639326167284',
  secret: '5789bed1bd',
  size: fUrl.IMG_SIZES.MEDIUM_640,
};


describe('flickr-url', function () {

  describe('#getFarmUrl', function () {
    it('Should return a properly formatted URL', function () {
      var url = fUrl.getFarmUrl(TEST_PARAMS);
      expect(url).to.equal(TEST_URL);
      console.log(url);
    });
  });

});
