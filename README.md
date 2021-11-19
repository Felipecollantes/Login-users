# Login-users

Aplicación en Angular con una pantalla de login, registro mediante Firebase y una pequeña tabla de usuario procedente de la Api https://reqres.in/

# Proceso para hacerla funcionar en local

Si por cualquier motivo no se pudiera levantar el proyecto en local, hay una versión subida al hosting de firebase.
Para acceder a este hosting, haz click en este enlace: https://login-usuarios-b72fc.firebaseapp.com/

### Clonar

Clonar la rama principal en el ordenador mediante el siguiente comando:

```
git clone https://github.com/Felipecollantes/Login-users.git
```

### Instalar dependencias

Dentro de la ruta del proyecto hay que instalar los paquetes de node_modules con el siguiente comando:

```
npm install
```

### Levantar el proyecto

Una vez instalados todos los paquetes, procedemos a levantar el proyecot en localhost:4200

```
npm start
```

Una vez levantado el proyecto accedemos a http://localhost:4200/login

# Pasos en la aplicación

- Para logearse en la aplicación habrá que registrarse previamente con un correo y contraseña (puede ser inventado).
- La primera vez que se registra te envía directamente a la tabla de usuarios.
- Se puede cerrar sesión con el boton del navbar "logout" y posteriormente hacer un login.
- Si el usuario ya existe (correo) no podrá registrarse de nuevo. 
- Si el usuario no existe, no podrá logearse ni acceder a la ruta de la tabla de usuarios ya que hay cread un Guard.
- La sesión se mantiene hasta que no se haga "logout".
- El registro/login de firebase trae como objeto un usuario con un uid propio, token y demás...


