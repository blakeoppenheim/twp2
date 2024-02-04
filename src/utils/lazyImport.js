export const pageLoader = (loadComponent) => () =>
  new Promise((resolve, reject) => {
    loadComponent()
      .then((module) => resolve(module))
      .catch((error) => {
        reject(error);
      });
  });
