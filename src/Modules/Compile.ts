const VM = require('vm');
const { addMiddleware } = require('redux-dynamic-middlewares');

export default function (appCode) {
    const code = `
        (function(addMiddleware) {
            return ${appCode}
        })
    `;
    const run = VM.runInThisContext(code);
    const moduleInsance = run(addMiddleware);

    return moduleInsance.default;
}
