import express, { Request, Response } from "express"
const route = express()
import { controllers } from "../../controller/controllers"

route.route("/")
    .get((req: Request, res: Response) => controllers.rawData(req, res))

route.route("/control")
    .post((req: Request, res: Response) => controllers.saveNewItem(req, res))
    .delete((req: Request, res: Response) => controllers.deleteControl(req, res))

route.route("/dashboard")
    .get((req: Request, res: Response) => controllers.getDashboard(req, res))

export { route }