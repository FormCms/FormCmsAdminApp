const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Set environment variables
const envVars = {
    VITE_REACT_APP_API_URL: "/api",
    VITE_REACT_APP_ENTITY_ROUTER_PREFIX: "/_content/FormCMS/admin/entities",
    VITE_REACT_APP_AUTH_ROUTER_PREFIX: "/_content/FormCMS/admin/auth",
    VITE_REACT_APP_AUDIT_LOG_ROUTER_PREFIX: "/_content/FormCMS/admin/audit",
};

// Set environment variables dynamically for cross-platform compatibility
const env = { ...process.env, ...envVars };

// Build the project
execSync("tsc && vite build --base /_content/FormCMS/admin/", { stdio: "inherit", env });

// Remove the old admin folder
const adminPath = path.resolve("../formCms/server/FormCMS/wwwroot/admin");
fs.rmSync(adminPath, { recursive: true, force: true });

// Copy new build files
execSync(`rsync -azv --progress dist/* ${adminPath}`, { stdio: "inherit" });

// Git add changes
execSync("git add .", { cwd: adminPath, stdio: "inherit" });

console.log("✅ Publish completed!");