import ENV from 'front-end/config/environment';

export const getData = async (url) => {
  const response = await fetch(`${ENV.apiURL}${url}`);
  if (response.status < 400) {
    const json = await response.text();
    const data = await JSON.parse(json);
    return { status: response.status, data };
  } else {
    return response;
  }
};
