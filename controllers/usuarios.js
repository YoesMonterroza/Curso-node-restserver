const { response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = "no name", apikey, page = 1, limit} = req.query;
    res.json({
        ok: true,
        msg:"get API - controlador",//'Hello World con el puerto ' + process.env.PORT
        q, 
        nombre, 
        apikey, 
        page,
        limit
    });
};

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.status(400
        ).json({
        ok: true,
        msg:"put API - controlador",
        id
    });
};

const usuariosPost =  (req, res = response) => {
    const {edad, nombre} = req.body;
    res.status(201).json({
        ok: true,
        msg:"post API - controlador",
        edad, nombre
    });
};

const usuariosDelete =  (req, res = response) => {
    res.json({
        ok: true,
        msg:"delete API - controlador"
    });
};

const usuariosPatch =  (req, res = response) => {
    res.json({
        ok: true,
        msg:"patch API - controlador"
    });
};


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}