const entradas = require("./../bancodedados/entradas.js")
class Entradas{
    pratos(req, res) {
        res.send(nomes)
    }

    lactose(req, res) {
        const lactose = entradas.filter(function(entrada){
            return entrada.lactose == false
            })
        res.status(200).send(lactose)
    }
    gluten(req, res) {
        const gluten = entradas.filter(function(entrada){
            return entrada.gluten == false
            })
        res.status(200).send(gluten)
    }
    vegano(req, res) {
        const vegano = entradas.filter(function(entrada){
            return entrada.vegano
            })
        res.status(200).send(vegano)
    }
    vegetariano(req, res) {
        const vegetariano = entradas.filter(function(entrada){
            return entrada.vegetariano
         })
        res.status(200).send(vegetariano)
    }
}

module.exports = Entradas
