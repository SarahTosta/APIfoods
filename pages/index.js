const sobremesas = require("./sobremesas.json")
const entradas = require("./entradas.json")
const principal = require("./principal.json")

function item(request, response){

}

function Home(){
    return(<div>Home

            <Link herf="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
    </div>)
}

export default Home 