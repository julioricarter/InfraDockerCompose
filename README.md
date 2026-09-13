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

