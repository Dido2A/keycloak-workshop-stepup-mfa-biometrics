window.config = {
    VUE_APP_OIDC_PROVIDER_DOMAIN: "https://dido.zapto.org/realms/bank",
    VUE_APP_OIDC_CLIENT_ID: "bank-loan",
    VUE_APP_OIDC_CLIENT_REDIRECT_URI: "https://dido.zapto.org/bankloan/callback",
    VUE_APP_OIDC_SCOPES: "openid profile roles",
    VUE_APP_OIDC_CLIENT_POST_LOGOUT_REDIRECT_URI: "https://dido.zapto.org/bankloan/home?action=logout"
}