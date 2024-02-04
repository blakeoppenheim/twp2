export const objectDestruction = (headers) => {
  const headersArray = [];
  for (const key in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, key)) {
      headersArray.push({ key, value: headers[key] });
    }
  }
  return headersArray;
};
