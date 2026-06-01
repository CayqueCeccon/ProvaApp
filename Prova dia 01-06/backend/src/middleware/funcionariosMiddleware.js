export function validateDelete(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }
    next()
}

export function validateUpdate(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    const { name, sobrenome, setor, funcao } = req.body

    if(!name || name.trim() === '') {
        return res.status(400).send({
            error : "Invalid name"
        })
    }

    if(!sobrenome || sobrenome.trim() === '') {
        return res.status(400).send({
            error : "Invalid lastname"
        })
    }

    if(!setor || setor.trim() === '') {
        return res.status(400).send({
            error : "Invalid sector"
        })
    }

    if(!funcao || funcao.trim() === '') {
        return res.status(400).send({
            error : "Invalid function"
        })
    }

    next()
}

export function validateGetFuncionarioBySector(req, res, next) {
    let {sector} = req.params

    if (!sector) {
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    next()
}
