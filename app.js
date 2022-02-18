//importa um módulo do express
const express = require('express')
//constante inicializar o módulo express
const app = express()
//contante porta 
const port = 3000
//cria um servidor (app) e escuta as requisições HTTP na porta 3000
app.listen(port, () => {
  // imprime que o servidor está rodando e a porta mandando uma mensagem o console
  console.log(`Servidor rodando na porta ${port}`) 
})
//serve para usar as informações de configurações
app.use(express.urlencoded())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/html', (req, res) => {
  res.sendFile(__dirname+ "/html/index.html")
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname+ "/html/formulario/cadastro_pessoa.html")
  })

app.get('/formulario/cadastro_produtos', (req, res) => {
    res.sendFile(__dirname+ "/html/formulario/cadastro_produtos/cadastro_produto.html")
  })

app.post("/produto_cadastrado",(req, res)=>{// não consigo acessar pela url
    res.send(`Nome do produto: ${req.body.nome} Quantidade de produto: ${req.body.qntProduto} Valor do produto: ${req.body.valor} Marca do produto: ${req.body.marca} `)
    //res.send("FORMULARIO RECEBIDO")
})

app.post("/listar_dados_formulario",(req, res)=>{// não consigo acessar pela url
  res.send(`Nome : ${req.body.nome} ${req.body.sobreNome} \nIdade: ${req.body.Idade} \nCPF: ${req.body.cpf} \nTelefone: ${req.body.telefone} \nProfissao: ${req.body.profissao} \nE-mail: ${req.body.email} `)
  //res.send("FORMULARIO RECEBIDO")
})


