const getHassUrl = () => window.localStorage.getItem('hass-minimal-ui/hassUrl');
const setHassUrl = (url) => window.localStorage.setItem('hass-minimal-ui/hassUrl', url);

export {
  getHassUrl,
  setHassUrl,
};