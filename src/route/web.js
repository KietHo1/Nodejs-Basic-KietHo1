import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();
//web quản lý các route
const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", (req, res) => {
    res.send(`I'm Eric!`);
  });
  //Thêm tiền tố vào phía trước các route - vd: /api/v1/
  return app.use("/", router);
};

export default initWebRoute;
