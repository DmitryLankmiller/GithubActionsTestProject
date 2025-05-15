"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpcRouter = void 0;
const trpc_1 = require("../lib/trpc");
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
const createIdea_1 = require("./createIdea");
const getIdea_1 = require("./getIdea");
const getIdeas_1 = require("./getIdeas");
// @endindex
exports.trpcRouter = trpc_1.trpc.router({
    // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
    createIdea: createIdea_1.createIdeaTrpcRoute,
    getIdea: getIdea_1.getIdeaTrpcRoute,
    getIdeas: getIdeas_1.getIdeasTrpcRoute,
    // @endindex
});
//# sourceMappingURL=index.js.map