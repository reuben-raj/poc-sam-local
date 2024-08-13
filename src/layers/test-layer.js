const layerParam = process.env.LAYER_PARAM;

exports.initLayer = () => {
    console.info('initLayer-layerParam:', layerParam);
    return layerParam;
};