flickr-url
==========

Construct flickr CDN URLs for images from API responses. 

## API

#### getFarmUrl(params)
Get the farm url for an image e.g: *https://farm3.staticflickr.com/2843/72157639326167284_5789bed1bd_z.jpg*


#### IMG_SIZES
Contains proprties to easily specify image sizes listed as listed 
[here](https://www.flickr.com/services/api/misc.urls.html).

* SMALL_SQAURE
* LARGE_SQAURE
* THUMB
* SMALL_240
* SMALL_320
* MEDIUM_500
* MEDIUM_640
* MEDIUM_800
* LARGE_1024
* LARGE_1600
* LARGE_2048
* ORIGINAL

## Example Usage:

```javascript
var fUrl = require('flickr-url');

var params = {
	server: '2843',
	secret: '5789bed1bd',
	id: '72157639326167284',
	farm: '3',
	size: fUrl.IMG_SIZES.LARGE_1024
};

var url = fUrl.getFarmUrl(params);
```
