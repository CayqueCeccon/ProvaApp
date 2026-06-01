import { response } from "express"
import connection from "../database/db.js"
import { parse } from "dotenv"

export function register(req, res) {
    const { name, sobrenome, setor,
        funcao } = req.body

    connection.query(`INSERT INTO usera 
                    VALUES
                    (default, ?, ?, ?, ?)`,
        [name, sobrenome, setor, funcao],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Employee registered sucesfully"
            })
        })
}

export function view(req, res) {
    connection.query(`SELECT * FROM usera`,
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send(response)
        }
    )
}

export function erase(req, res) {
    let { id } = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error: "Invalid provided index"
        })
    }

    connection.query(`DELETE FROM usera
                    WHERE id = ?`,
        [id], (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Employee deleted sucesfully"
            })
        })
}

export function update(req, res) {
    let { id } = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error: "Invalid provided index"
        })
    }

    const { name, sobrenome, setor, funcao } = req.body

    connection.query(`UPDATE usera
                    SET
                    nome = ?,
                    sobrenome = ?,
                    setor = ?,
                    funcao = ?
                    WHERE
                    id = ?`,
        [name, sobrenome, setor, funcao, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Employee updated sucesfully"
            })
        })
}

export function viewBySector(req, res) {
    let { sector } = req.params

    connection.query(`SELECT * FROM usera WHERE setor = ?`,
        [sector], (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send(response)
        })
}