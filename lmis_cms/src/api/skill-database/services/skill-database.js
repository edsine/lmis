'use strict';

/**
 * skill-database service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skill-database.skill-database');
