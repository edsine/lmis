module.exports = {
  afterCreate(event) {
    const { result, params } = event;
    strapi.entityService.create("api::audit-trail.audit-trail", {
      data: {
        contentType: event.model.tableName,
        action: "Create Content",
        content: result,
        author: result.createdBy, authorEmail: result.createdBy.email,
        params: params,
        request: event,
      },
    });
  },

  afterUpdate(event) {
    const { result, params } = event;
    strapi.entityService.create("api::audit-trail.audit-trail", {
      data: {
        contentType: event.model.tableName,
        action: "Update Content",
        content: result,
        author: result.updatedBy, authorEmail: result.updatedBy.email,
        params: params,
        request: event,
      },
    });
  },

  afterDelete(event) {
    const { result, params } = event;
    strapi.entityService.create("api::audit-trail.audit-trail", {
      data: {
        contentType: event.model.tableName,
        action: "Delete Content",
        content: result,
        // author: result.createdBy, authorEmail: result.createdBy.email,
        params: params,
        request: event,
      },
    });
  },

  // afterFindOne(event) {
  //   const { result, params } = event;
  //   strapi.entityService.create("api::audit-trail.audit-trail", {
  //     data: {
  //       contentType: "Indicator",
  //       action: "Single Content Search",
  //       content: result.Content,
  //       author: result.createdBy, authorEmail: result.createdBy.email,
  //       params: params,
  //       request: event,
  //     },
  //   });
  // },

  // afterFindMany(event) {
  //   const { result, params } = event;
  //   strapi.entityService.create("api::audit-trail.audit-trail", {
  //     data: {
  //       contentType: "Indicator",
  //       action: "Multiple Content Search",
  //       content: result.Content,
  //       author: result.createdBy, authorEmail: result.createdBy.email,
  //       params: params,
  //       request: event,
  //     },
  //   });
  // },
};
