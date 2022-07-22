function changeObjectKey(object, oldKey, newKey) {
  delete Object.assign(object, { [newKey]: object[oldKey] })[oldKey];
}

module.exports = {
  changeObjectKey,
};
