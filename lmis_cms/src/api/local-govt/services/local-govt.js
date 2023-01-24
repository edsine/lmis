'use strict';

/**
 * local-govt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-govt.local-govt');
