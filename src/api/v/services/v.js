'use strict';

/**
 * v service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::v.v');
