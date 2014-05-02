'use strict';

var loadImage = require('frozen/plugins/loadImage');

exports.create = create;

function create (context) {
  var info = {
    name: 'frozen/plugins/loadImage',
    module: loadImage
  };
  if (!context.amdPluginMap) context.amdPluginMap = {};
  context.amdPluginMap['loadImage'] = context.amdPluginMap['frozen/plugins/loadImage'] = info;
}
