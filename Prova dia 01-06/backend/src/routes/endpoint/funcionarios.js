import express, {response, Router} from "express"
import * as control from "../../controllers/funcionariosController.js"
import * as middle from "../../middleware/funcionariosMiddleware.js"

const router = express.Router()

router
    .post("/register", control.register) // OKAY
    .get('/', control.view) // OKAY
    .delete("/delete/:id", middle.validateDelete, control.erase) // OKAY
    .put("/update/:id", middle.validateUpdate, control.update) // OKAY
    .get('/:sector', middle.validateGetFuncionarioBySector, control.viewBySector) // OKAY

export default router