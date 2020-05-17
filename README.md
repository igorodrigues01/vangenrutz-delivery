Modelo "Default" com gulp
=======
***

> ### Primeiros passos

- 1º Passo: abra o terminal dentro do diretorio do modelo e use o comando para baixar todas as dependências necessarias para o funcionamento do modelo<br>
````
npm install
````

- 2º Passo: Para iniciar as tarefas do gulp dentro do terminal use o comando abaixo, em seguida o gulp ficará<br> escutando os ``./css/*.css`` e ``./js/*.js``arquivos setados no arquivo ``gulpfile.js`` os arquivos otimizados estão na pasta `` dist/ `` <br>
````
gulp
````

- 3º Passo: Para otimizar as images do projeto use comando abaixo, as imagens serão otimizadas dentro da pasta  ````images/````<br>
````
gulp images
````

> ### Extras

- Minifica e junta todos os arquivos .css das pastas e arquivos dentro do diretório /css;<br>
````
gulp css
````

- Minifica, junta e transpila todos os arquivos .js das pastas e arquivos dentro do diretório /js;<br>
````
gulp js
````