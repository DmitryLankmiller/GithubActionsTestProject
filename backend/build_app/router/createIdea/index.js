"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdeaTrpcRoute = void 0;
const ideas_1 = require("../../lib/ideas");
const trpc_1 = require("../../lib/trpc");
const input_1 = require("./input");
exports.createIdeaTrpcRoute = trpc_1.trpc.procedure.input(input_1.zCreateIdeaTrpcInput).mutation(({ input }) => {
    if (ideas_1.ideas.find((idea) => idea.nick === input.nick)) {
        throw Error('Idea with this nick already exists');
    }
    ideas_1.ideas.unshift(input);
    return true;
});
//# sourceMappingURL=index.js.map