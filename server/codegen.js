"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: "./src/schema.ts",
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",
                mappers: {
                    Track: "./models#TrackModel",
                    Author: "./models#AuthorModel"
                },
            },
        },
    },
};
exports.default = config;
