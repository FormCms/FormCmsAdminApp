export const configs = {
    apiURL: import.meta.env.VITE_REACT_APP_API_URL ??'/api',
    entityRouterPrefix: import.meta.env.VITE_REACT_APP_ENTITY_ROUTER_PREFIX ?? '/admin/entities',
    authRouterPrefix:  import.meta.env.VITE_REACT_APP_AUTH_ROUTER_PREFIX ?? '/admin/auth',
    auditLogRouterPrefix:  import.meta.env.VITE_REACT_APP_AUDIT_LOG_ROUTER_PREFIX ?? '/admin/audit',
    schemaBuilderRouter: '/schema',
}
console.log({configs})