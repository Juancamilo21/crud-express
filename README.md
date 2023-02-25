# Crud Básico con Express.js, TypeScript, MySQL, TypeORM y POO

El siguiente crud está realizado con una tabla en la base de datos de MySQL que estará gestionada por el ORM [TypeORM](https://typeorm.io/), se ha realizado bajo un control de productos.

![imgage-crud](readme-img.png)

## Tabla

|             | product      |     |                |
| ----------- | ------------ | --- | -------------- |
| id          | int(11)      | Key | auto_increment |
| name        | varchar(100) |     |
| description | varchar(500) |     |
| price       | int(11)      |     |

## Despues de haber clonado el proyecto realice lo siguiente:

```bash
#Acceda al directorio donde se encuentra el servicio
$ cd api-crud-products
```

```bash
#Instalacion de las dependencias
$ npm install
```

## Ejecución 

```bash
#Modo de desarrollo
$ npm run start
```

```bash
#Modo watch
$ npm run start:dev
```

```bash
#Modo build
$ npm run start:build
```
