"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdeaTrpcRoute = void 0;
const zod_1 = require("zod");
const ideas_1 = require("../../lib/ideas");
const trpc_1 = require("../../lib/trpc");
exports.getIdeaTrpcRoute = trpc_1.trpc.procedure
    .input(zod_1.z.object({
    ideaNick: zod_1.z.string(),
}))
    .query(({ input }) => {
    const idea = ideas_1.ideas.find((idea) => idea.nick === input.ideaNick);
    return { idea: idea || null };
});
//# sourceMappingURL=index.js.map