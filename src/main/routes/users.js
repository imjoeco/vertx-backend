    var Router = require("vertx-web-js/router")

    var router = Router.router(vertx)

    router.get('/:id').handler(function (ctx) {
      var req = ctx.request()
      ctx.response().putHeader("content-type", "text/plain").end("Hello " + req.getParam('id') + " from Vert.x-Web!")
    })

    module.exports = router;