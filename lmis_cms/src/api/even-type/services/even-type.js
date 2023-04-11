'use strict';

/**
 * even-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::even-type.even-type');
