# Laboratorio 02

Hoy utilizaremos docker compose para poder desplegar su trabajo. Servicio web y una base de datos

## Stack
API
  - Minimal API
    - Debe retornar un mensaje incluyendo mi nombre
  - Docker
- docker run -d --rm -p 3000:3000 nmatsui/hello-world-api.  e721dfb68a22 elegant_boyd
docker run -d --rm -p 3001:3000 nmatsui/hello-world-api.  b9ed8e16dfea optimistic_tu

BD
  - PostgreSQL
- $ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
- revisar postgresql docker exec -it db psql -U postgres -d postgres

VOLUMENES

- En mi caso aplique volumenes en la base de datos
    ¿Por qué? se preguntaran 
    La base de datos guarda información que debe persistir como ejemplo se guardan tablas, registros. Sin un volumen, si el contenedor se borra o se recrea, se pierden todos los datos. Las APIs, en cambio, no guardan nada propio: solo ejecutan código y responden, así que no necesitan volumen.



# Indicaciones

## Comandos

```bash
docker compose up -d
```

## Configuración por entorno

```
MESSAGE=<Hola, mi nombre es Julio Vasquez>
```


# Creditos
- Julio Ricarter Vasquez Aliaga

# NOTAS
- Lo mas recomendable para cambiar el texto en 

```bash
return process.env.MESSAGE || this.DEFAULT_MESSAGE;
```
es con el uso de variables

Si sale al error al momento de ejecutar 
```bash
docker compose up --build
```
es debido a que el puerto asignado ya este en uso, en esa caso lo recomendables es buscar quien lo esta ocupando y desactivarlo

 - No es recomendable poner el noombre de la variable de entorno del .env en este README, pero como por ahora no es ningun dato sensible que se pueda usar de manera mal intencionada ira aqui, aunque en el example haya una parte
  MESSAGE = Hola, mi nombre es Julio Vasquez

- .env puesto en el .gitignore


### Tipos de Redes

Los tipos de redes mas comunes son las siguiente
- **bridge:** La red por defecto que permite la comunicación entre contenedores del mismo host
- **host:** Permite que los contenedores compartan la red del host, hay que tener cuidado con la seguridad porque los contenedores pueden ver la red del host anfitrión
- **overlay:** Red que permite la comunicación entre contenedores en diferentes hosts
- **macvlan:** Red que permite asignar una dirección MAC a un contenedor y que se comporte como un dispositivo físico en la red
- **none:** Sin red, el contenedor no tendrá acceso a la red

## Tipos de Volumen

Los volumenes aportan una forma de persistir archivos mas alla de lo que es el ciclo de vida de un contenedor Docker

- **Volumen:** El mas recomendable, los volumenes son independientes del host y se gestiona a travez del directorio donde trabaja Docker

- **Bind Mouth:** Se encarga de montar un directorio del sistema de archivos del host

- **TMPFS Mouth:** Sirve para gestionar archivos en memoria
 
![image alt](https://github.com/julioricarter/InfraDockerCompose/blob/f76ce565fdf86f35b9216609f249ae59efeba2bf/Repo_desplegado.jpeg)
