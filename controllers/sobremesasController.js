const sobremesas = require("./../bancodedados/sobremesas.js")
class Sobremesas{
    pratos(req, res) {
        res.send(nomes)
    }
    lactose(req, res) {
        const lactose = sobremesas.filter(function(sobremesa){
            return sobremesa.lactose == false
           })
        res.status(200).send(lactose)
    }
    gluten(req, res) {
        const gluten = sobremesas.filter(function(sobremesa){
            return sobremesa.gluten == false
           })
        res.status(200).send(gluten)
    }
    vegano(req, res) {
        const vegano = sobremesas.filter(function(sobremesa){
            return sobremesa.vegano
           })
        res.status(200).send(vegano)
    }
    vegetariano(req, res) {
        const vegetariano = sobremesas.filter(function(sobremesa){
            return sobremesa.vegetariano
           })
        res.status(200).send(vegetariano)
    }
}





module.exports = Sobremesas
