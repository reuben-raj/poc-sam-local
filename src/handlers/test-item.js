const { initLayer } = require("/opt/nodejs/test-layer");
const generalParam = process.env.GENERAL_PARAM;
const functionParam = process.env.FUNCTION_PARAM;
const globalParamString = process.env.GLOBAL_PARAM_STRING;
const globalParamJson = process.env.GLOBAL_PARAM_JSON;

exports.testHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    console.info('received:', event);
    console.info('generalParam:', generalParam);
    console.info('functionParam:', functionParam);
    console.info('globalParamString:', globalParamString);
    console.info('globalParamJson:', globalParamJson);

    const body = JSON.parse(event.body);
    const id = body.id;
    const name = body.name;
    const responseBody = {};
    responseBody.eventBody = body;
    responseBody.generalParam = generalParam;
    responseBody.functionParam = functionParam;
    responseBody.globalParamString = globalParamString;
    responseBody.globalParamJson = globalParamJson;

    let layerParam = initLayer();
    console.info('layerParam:', layerParam);

    responseBody.layerParam = layerParam;

    let response = {};
    response = {
        statusCode: 200,
        body: responseBody
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
