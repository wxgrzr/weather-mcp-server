import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
// Create server instructions
const server = new McpServer({
    name: "weather",
    version: "1.0.0",
});
export { server };
