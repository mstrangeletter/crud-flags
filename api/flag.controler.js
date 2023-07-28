const Flags = {
    get: (req, res) => {
        res.status(200).send("conexion a endpoint GET")
    },
    list: (req, res) => {
        res.status(200).send("conexion a endpoint ok, puedo enviar datos")
    },
    create: (req, res) => {
        res.status(201).send("conexion a endpoint ok, puedo crear datos")
    },
    update: (req, res) => {
        res.status(204).send("conexion a endpoint ok, puedo actualizar datos")
    },
    destroy: (req, res) => {
        res.status(204).send("conexion a endpoint ok, puedo eliminar datos")
    },
}

module.exports = Flags;