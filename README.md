# Project Starwars - Planets Search :milky_way:
https://user-images.githubusercontent.com/87591265/148488227-e36555ac-c9ba-4ffc-ab8c-1b530db81acc.mp4
# Como acessar

1. Clone o repositório
  * `git clone https://github.com/italosergio/star-wars-search-planet`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd star-wars-search-planet`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `yarn start` ou `npm start`

3. Use os filtros de busca pra escolher seu planeta perfeito para explorar!
# Habilidades

Nesse projeto, você será capaz de:

* Utilizar a _Context API_ do **React** para gerenciar estado.
* Utilizar o _React Hook useState_;
* Utilizar o _React Hook useContext_;
* Utilizar o _React Hook useEffect_;
* Criar _React Hooks_ customizados.

# **_Status do Projeto_**
![Captura de tela de 2021-12-15 06-31-39](https://user-images.githubusercontent.com/87591265/146160874-6a9c1805-192f-46ea-be92-d5d6abb376ab.png)

**Desafio 1** [✅] ([commit](https://github.com/italosergio/star-wars-search-planet/commit/347cbd4f65eceb3f37f48525de309db70c9e75ca))
_Faça uma requisição para o endpoint `/planets` da **API** de **Star Wars** e preencha uma tabela com os dados retornados, com exceção dos da coluna residents_
  >- [x] - Realize uma requisição para a API
  >- [x] - Preencha a tabela com os dados retornados
  >- [x] - Verifique se a tabela tem 13 colunas
  >- [x] - Verifique se a tabela tem uma linha para cada planeta retornado

![Captura de tela de 2021-12-15 06-34-30](https://user-images.githubusercontent.com/87591265/146161242-f570f5ff-a1c2-4cc2-9520-47b0dc7b3a95.png)

**Desafio 2** [✅] ([commit](https://github.com/italosergio/star-wars-search-planet/commit/eb726ab01463ae24c514838d0866e11ad19884de))
_Filtre a tabela através de um texto, inserido num campo de texto, exibindo somente os planetas cujos nomes incluam o texto digitado_
  >- [x] Renderiza o campo de texto para o filtro de nomes
  >- [x] Filtra os planetas que possuem a letra "o" no nome
  >- [x] Filtra planetas que possuem a letra "oo" no nome
  >- [x] Realiza vários filtros em sequência

![Captura de tela de 2021-12-15 06-34-38](https://user-images.githubusercontent.com/87591265/146161299-17952b15-6b1f-4b74-9155-e25d86dfa498.png)

**Desafio 3** [✅] ([commit](https://github.com/italosergio/star-wars-search-planet/commit/c4e6e6e79656e67fb2c94f40211868f6b968dabc)) ([commit](https://github.com/italosergio/star-wars-search-planet/commit/f000331a43fc229e2005f2fac00f7dcad07449cb))
_Crie um filtro para valores numéricos_
  >- [x] Renderiza o filtro de coluna
  >- [x] Renderiza o filtro de comparação
  >- [x] Renderiza o campo para o valor do filtro
  >- [x] Renderiza o botão para executar a filtragem
  >- [x] Verifica valores iniciais de cada campo
  >- [x] Filtra utilizando apenas o botão de filtrar
  >- [x] Filtra utilizando a comparação "menor que"
  >- [x] Filtra utilizando a comparação "maior que"
  >- [x] Filtra utilizando a comparação "igual a"

![Captura de tela de 2021-12-15 06-34-48](https://user-images.githubusercontent.com/87591265/146161332-eb503bca-adad-4407-804b-8d8b871a606c.png)

**Desafio 4** [✅] ([commit](https://github.com/italosergio/star-wars-search-planet/commit/cfa9e5e73a98e6b215302b7f814c50011843267a)) ([commit](https://github.com/italosergio/star-wars-search-planet/commit/5c556f8b4f30d69a6f8ff15d56ed917393633426))
_Não utilize filtros repetidos_
  >- [x] Filtra por população e o remove das opções
  >- [x] Resolver filtro repetido para todos os casos 

![Captura de tela de 2021-12-15 06-40-31](https://user-images.githubusercontent.com/87591265/146162104-052c3913-ac67-4e89-bc8a-cfb734a56683.png)

**Desafio 5** [✅] ([commit](https://github.com/italosergio/star-wars-search-planet/commit/1af81e8b7eb92bbe000c387c1687f59675f2ed94))
_Apague o filtro de valores numéricos e desfaça as filtragens dos dados da tabela ao clicar no ícone de `X` de um dos filtros_
  >- [x] Adiciona um filtro e verifica se a tabela foi atualizada com as informações filtradas, depois remove o filtro e verifica se os valores da tabela voltaram ao original.
  >- [x] Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas, depois remove os filtros e verifica se os valores da tabela voltaram ao original.

![Captura de tela de 2021-12-15 06-50-50](https://user-images.githubusercontent.com/87591265/146163823-d576080e-d13d-43e2-ba67-1e3cbd384bf9.png)

[BONUS] **Desafio 6** [❌] (_no commit_)
_Ordene as colunas de forma ascendente ou descendente_
>- [ ] Verifica ordenação inicial
>- [ ] Ordena os planetas do maior período orbital para o menor período orbital
>- [ ] Ordena os planetas do menor diametro para o maior diametro
>- [ ] Ordena os planetas do mais populoso para o menos populoso

![Captura de tela de 2021-12-15 07-04-09](https://user-images.githubusercontent.com/87591265/146166122-aac06dee-266a-4695-b806-1f4a465a1e77.png)

# **_Desenvolvimento_**

- [x] Implement 🦾
  > [{ conceive: 'semantic ui framework' }](https://github.com/italosergio/star-wars-search-planet/commit/c4e6e6e79656e67fb2c94f40211868f6b968dabc)
  [{ conceive: 'Loading' }](https://github.com/italosergio/star-wars-search-planet/commit/c982c19959cdf507ee2befa7be18b8a7d6e4c9ff)
  [{ conceive: 'Next/Prev page buttons' }](https://github.com/italosergio/star-wars-search-planet/commit/dc7c7367ea233563fe3d8dab05c46f2fbc614d58)
  [{ conceive: 'csshake framework' }](https://github.com/italosergio/star-wars-search-planet/commit/5dc920b08508a945200d7d76ff69b035c8d2982e)

- [x] Styles ✨
  >[{ update: 'general styles' }](https://github.com/italosergio/star-wars-search-planet/commit/c4e6e6e79656e67fb2c94f40211868f6b968dabc)
  [{ change: 'styles' }](https://github.com/italosergio/star-wars-search-planet/commit/3f6b0ae1f5f9e61946fe132e3d72abf7a9699c38)
  [{ update: 'styles' }](https://github.com/italosergio/star-wars-search-planet/commit/c22675b23ee7d4ccff814c5f27247c0352d61aac)
  [{ create: 'filter flag',  update: 'search button style' }](https://github.com/italosergio/star-wars-search-planet/commit/44482d9e8b46525c487e3d79bf944214ea5b1f7c)
  [{ animation: 'header icon' }](https://github.com/italosergio/star-wars-search-planet/commit/cf2ad1ade119635d7513aeba6bc1cfb2286e8df8)
  [{ animation: 'shake titles and labels' }](https://github.com/italosergio/star-wars-search-planet/commit/5dc920b08508a945200d7d76ff69b035c8d2982e)
  [{ change: 'browser tab icon' }](https://github.com/italosergio/star-wars-search-planet/commit/5dc920b08508a945200d7d76ff69b035c8d2982e)

- [x] Refactor 🧬
  >[{ update: 'home title' }](https://github.com/italosergio/star-wars-search-planet/commit/73bfa3839169e79ac4dd63a9ed66d3d1c2db3dbd)
[{ update: 'context structure' }](https://github.com/italosergio/star-wars-search-planet/commit/499690f2e2a7fd1c155b7f53f748e5c8b4c75c51)
[{ update: 'context structure' }](https://github.com/italosergio/star-wars-search-planet/commit/7642cb33ffb5ab79b37b31c98f0d5a4f4651f6b1)
[{ update: 'Table, SearchPlanet' }](https://github.com/italosergio/star-wars-search-planet/commit/c4e6e6e79656e67fb2c94f40211868f6b968dabc)
[{ update: 'Table', create: 'NextPrev' }](https://github.com/italosergio/star-wars-search-planet/commit/0b182fefb864478d988654ef70306349c4ad93da)
[{ update: 'Requirement 4' }](https://github.com/italosergio/star-wars-search-planet/commit/5c556f8b4f30d69a6f8ff15d56ed917393633426)
[{ upgrade: 'GENERAL REFACTOR'}](https://github.com/italosergio/star-wars-search-planet/commit/86baab6397ef3aa51f18c2c6608c4f6c4f6ead05)
[{ exchanges: 'functions by components' }](https://github.com/italosergio/star-wars-search-planet/commit/f1c2a129b22dbaf37349a3ae671a524a29fd11b1)

- [x] Clean up code  🧹
  >[{ changes: 'SearchPlanet.jsx e Table.jsx' }](https://github.com/italosergio/star-wars-search-planet/commit/3b3f72d95916b8c4b6e788e76ee98997ebf8ebab)
[{ changes: 'Index.html' }](https://github.com/italosergio/star-wars-search-planet/commit/5dc920b08508a945200d7d76ff69b035c8d2982e)
[{ changes: 'GENERAL CLEAN UP CODE'}](https://github.com/italosergio/star-wars-search-planet/commit/86baab6397ef3aa51f18c2c6608c4f6c4f6ead05)
[{ changes: 'components return' }](https://github.com/italosergio/star-wars-search-planet/commit/512407d7f96c4c1fa03db55c3fba550f19b23584)

- [x] Code Review 🔎
  - [x] @caiojlima 
  - [x] @fernandosenacruz 
  - [x] @leonardodfelix
    >[{ codeReview: 'useEffect & clearInterval' }](https://github.com/italosergio/star-wars-search-planet/commit/cecaa5ebfcac02ff23eed1d1bdc6ff4b609b487f)
    [{ codeReview: 'kill getElementById' }](https://github.com/italosergio/star-wars-search-planet/commit/18623f79277e9a4f20fcc7c009b11d6d2bc559d7)
    [{ codeReview: 'componentization' }](https://github.com/italosergio/star-wars-search-planet/commit/f1c2a129b22dbaf37349a3ae671a524a29fd11b1)
    [{ codeReview: 'requisition function refactored' }](https://github.com/italosergio/star-wars-search-planet/commit/7f536a86b70ecda80c92e6d385053c642ef1d870)
 

> ![giphy](https://user-images.githubusercontent.com/87591265/146157482-a2fd807c-52ef-4956-90be-d86f1576ccd9.gif)
_"FINALIZAR O PROJETO, VOCÊ DEVE.."_  🖖🏼👽
