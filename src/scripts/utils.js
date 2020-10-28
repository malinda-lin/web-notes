export const setStorage = (myKey, myValue, callback = null) => {
  const key = myKey;
  const value = myValue;
  const jsonfile = {};
  jsonfile[key] = value;
  chrome.storage.sync.set(jsonfile, callback);
};

export const getStorage = (key, callback) => {
  try {
    const res = chrome.storage.sync.get([key], callback);
    return res;
  } catch (error) {
    return null;
  }
}