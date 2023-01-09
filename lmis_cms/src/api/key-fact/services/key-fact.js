'use strict';

/**
 * key-fact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-fact.key-fact');
