const principais = require("./../bancodedados/principais.js")
class Principais{
    pratos(req, res) {
        res.send(nomes)
    }

    lactose(req, res) {
        const lactose = principais.filter(function(principal){
            return principal.lactose == false
            })
        res.status(200).send(lactose)
    }
    gluten(req, res) {
        const gluten = principais.filter(function(principal){
            return principal.gluten == false
            })
        res.status(200).send(gluten)
    }
    vegano(req, res) {
        const vegano = principais.filter(function(principal){
            return principal.vegano
            })
        res.status(200).send(vegano)
    }
    vegetariano(req, res) {
        const vegetariano = principais.filter(function(principal){
            return principal.vegetariano
         })
        res.status(200).send(vegetariano)
    }
}

module.exports = Principais