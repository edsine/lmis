'use strict';

/**
 * comment-reply service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-reply.comment-reply');
