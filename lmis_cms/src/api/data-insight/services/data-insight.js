'use strict';

/**
 * data-insight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-insight.data-insight');
