export function createImgixUrl(
  appId = undefined,
  filename,
  params = undefined
) {
  if (appId === undefined) {
    appId = extractAppIdFromUrl(filename);
    if (appId === undefined) {
      return undefined;
    }
  }
  const imgixBaseUrl = "https://travprocdn.imgix.net/";
  if (appId === undefined || filename === undefined || filename === null) {
    // return `${imgixBaseUrl}778/1630670952-travprologo.png?height=100`; // Sample travpro logo
    return undefined;
  }
  let url = `${imgixBaseUrl}${appId}/${filename.split("/").pop()}`;
  if (params !== undefined) {
    url += "?";
    Object.keys(params).map((keyName) => {
      url += `${keyName}=${params[keyName]}&`;
    });
  }
  return url;
}

export function extractAppIdFromUrl(filename) {
  const parts = filename.split("/");
  if (parts.length > 1) {
    const appIdSegment = parts[parts.length - 2];
    let appIdReg = /^\d{3,4}$/;
    if (appIdReg.test(String(appIdSegment))) {
      return appIdSegment;
    }
  }
  return undefined;
}
