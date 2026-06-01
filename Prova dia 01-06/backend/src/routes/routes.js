import express from "express"
import funcionarios from "./endpoint/funcionarios.js"

export default function(app) {
    app
    .use(express.json())
    .use("/funcionarios", funcionarios)
}