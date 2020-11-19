"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const restify = require("restify");
const mongoose = require("mongoose");
const environment_1 = require("../common/environment");
const merge_patch_parser_1 = require("./merge-patch.parser");
class Server {
    initializeDb() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(environment_1.environment.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.app = restify.createServer({
                    name: 'restful-api',
                    version: '1.0.0'
                });
                this.app.use(restify.plugins.queryParser());
                this.app.use(restify.plugins.bodyParser());
                this.app.use(merge_patch_parser_1.mergePatchBodyParser);
                //routes
                for (let router of routers) {
                    router.applyRoutes(this.app);
                }
                this.app.listen(environment_1.environment.server.port, () => {
                    resolve(this.app);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initializeDb().then(() => this.initRoutes(routers).then(() => this));
    }
}
exports.Server = Server;
