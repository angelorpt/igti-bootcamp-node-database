import petshopRouter from "./petshop";

const routes = (app) => {
  app.use("/api/petshop", petshopRouter);
};

export default routes;
