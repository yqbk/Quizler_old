export function deleteProperty(obj, prop) {
    const newObj = Object.assign({}, obj);
    delete newObj[prop];
    return newObj;
}

export function mapObject(obj, callback) {
    return Object.keys(obj).map(key => callback(key, obj[key]));
}
