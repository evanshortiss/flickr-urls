'use strict';

/**
 * See here for guidelines on constructing flickr URLs:
 * https://www.flickr.com/services/api/misc.urls.html
 *
 * All URLs are https://
 * farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
 * farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
 * farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
 */


var url = require('url')
  , util = require('util')
  , requiredParams = ['farm', 'server', 'id', 'secret']
  , urlTmpl = 'farm%s.staticflickr.com/%s/%s_' +
    '%s_%s.jpg'

exports.getFarmUrl = function (params) {
  var urlParams = [
    urlTmpl,
    params.farm,
    params.server,
    params.id,
    params.secret,
    params.size || ''
  ];

  return 'https://'
    .concat(util.format.apply(util, urlParams))
    .replace(/ /g, '');
};

exports.IMG_SIZES = {
  SMALL_SQAURE: 's',
  LARGE_SQAURE: 'q' ,
  THUMB: 't',
  SMALL_240: 'm',
  SMALL_320: 'n',
  MEDIUM_500: '-',
  MEDIUM_640: 'z',
  MEDIUM_800: 'c',
  LARGE_1024: 'b',
  LARGE_1600: 'h',
  LARGE_2048: 'k',
  ORIGINAL: 'o'
};
