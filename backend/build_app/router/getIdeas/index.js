"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdeasTrpcRoute = void 0;
const lodash_1 = __importDefault(require("lodash"));
const ideas_1 = require("../../lib/ideas");
const trpc_1 = require("../../lib/trpc");
exports.getIdeasTrpcRoute = trpc_1.trpc.procedure.query(() => {
    return { ideas: ideas_1.ideas.map((idea) => lodash_1.default.pick(idea, ['nick', 'name', 'description'])) };
});
//# sourceMappingURL=index.js.map