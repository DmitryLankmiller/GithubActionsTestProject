"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const trpc_1 = require("./lib/trpc");
const router_1 = require("./router");
const expressApp = (0, express_1.default)();
expressApp.use((0, cors_1.default)());
expressApp.get('/ping', (req, res) => {
    res.send('pong');
});
(0, trpc_1.applyTrpcToExpressApp)(expressApp, router_1.trpcRouter);
expressApp.listen(3000, () => {
    console.info('Listening at http://localhost:3000');
});
//# sourceMappingURL=index.js.map