import { holidayRoutes } from "./constants";
const getRandomRoutes = () =>{
    const routes = [...holidayRoutes];

  if (routes.length < 2) {
    throw new Error("There are not enough routes");
  }

  const randomIndices = [];

  while (randomIndices.length < 2) {
    const randomIndex = Math.floor(Math.random() * routes.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const route1 = routes[randomIndices[0]];
  const route2 = routes[randomIndices[1]];

  return [route1, route2];

}

export default getRandomRoutes;