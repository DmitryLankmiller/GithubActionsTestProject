"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ideas = void 0;
const lodash_1 = __importDefault(require("lodash"));
exports.ideas = lodash_1.default.times(100, (i) => ({
    nick: `cool-idea-nick-${i}`,
    name: `Idea ${i}`,
    description: `Description of idea ${i}...`,
    text: lodash_1.default.times(100, (j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join(''),
}));
//# sourceMappingURL=ideas.js.map