function ApiException(code, json) {
    this.code = code;
    this.json = json;
}

export { ApiException }