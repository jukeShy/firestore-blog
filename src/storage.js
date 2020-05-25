const storage = () => {
  const STORAGE_UID = 'STORAGE_UID';
  const STORAGE_DISPLAY_NAME = 'STORAGE_DISPLAY_NAME';

  const populateName = (name) =>
    localStorage.setItem(STORAGE_DISPLAY_NAME, name);

  const populateUID = (uid) => localStorage.setItem(STORAGE_UID, uid);

  const populateStorage = (uid, displayName) => {
    populateUID(uid);
    populateName(displayName);
  };

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_UID);
    localStorage.removeItem(STORAGE_DISPLAY_NAME);
  };

  return {
    STORAGE_DISPLAY_NAME,
    STORAGE_UID,
    populateStorage,
    clearStorage,
    populateName,
    populateUID,
  };
};

const Storage = storage();

export { Storage };
