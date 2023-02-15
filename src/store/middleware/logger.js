const loggerMiddleware = (store) => (next) => (action) => {
  // vous faites ce que vous voulez ici
  console.log(action.type);
  console.log("store", store.getState());

  let result = next(action);

  return result;
};

export default loggerMiddleware;
