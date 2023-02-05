Challenge Mercado Libre Frontend.

Host: https://meli-ddu.herokuapp.com/

* Tecnologias para el desarrollo:
- El FrontEnd se realizó en React JS.
- El Backend se realizó en Node JS.

* Al ser un challenge individual solo se maneja un branch (master).

* La aplicación ha sido desplegada sobre un servidor Heroku, el cual se encarga de alojar los request a la api de MELI.

* El código hecho en Node, actúa como una especie de MIDDLEWARE entre el Frontend y la api de MELI, ya que se encarga de recibir la petición y de
  esta manera enmascara la petición real a MELI; recibe la respuesta, la formatea y la devuelve al FrontEnd.

CORRER LOCALMENTE LA APP:

1. Instalar todas las dependencias requeridas: 
 - Git.
 - Express.
 - Node Js.
 - Npm.
 - Nodemon.
2. Es necesario tener el servidor local corriendo, para esto, desde la linea de comandos es necesario ubicarse en la raiz del proyect: react-node-app
3. Correr el comando: nodemon server/index.js
4. En otra consola diferente correr el FrontEnd ubicandose en el folder `Client`.
5. Correr el comando `npm start`.

ARQUITECTURA A ALTO NIVEL:
<img width="764" alt="image" src="https://user-images.githubusercontent.com/23347754/216803540-00b69aa9-394c-4598-a112-8054a108c00e.png">
