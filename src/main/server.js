var Router = require("vertx-web-js/router")
var userRoutes = require("./routes/users");

var server = vertx.createHttpServer()

var router = Router.router(vertx)

router.mountSubRouter('/users', userRoutes)

server.requestHandler(router.accept).listen(8080)