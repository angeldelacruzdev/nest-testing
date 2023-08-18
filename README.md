# Guía de Pruebas Unitarias en NestJS 10

## Paso 1: Configuración del Entorno de Pruebas

> Asegúrate de tener las dependencias necesarias instaladas para Jest:

```
npm install --save-dev jest @nestjs/testing ts-jest
```

## Paso 2: Crear la Entidad y el Servicio

> Supongamos que tienes una entidad User y un servicio UsersService que quieres probar. El servicio podría tener métodos para crear, encontrar, actualizar y eliminar usuarios.

## Paso 3: Escribir Pruebas Unitarias

> En el archivo  **users.service.spec.ts**, puedes escribir pruebas unitarias para cada método del servicio.

> Importaciones y Configuración Inicial: 
```
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });
});
```
>Prueba para Crear un Usuario

```
it('should create a user', () => {
  const user = new User(1, 'John Doe', 'john.doe@example.com');
  service.create(user);
  expect(service.findOne(1)).toEqual(user);
});
```

> Prueba para Eliminar un Usuario

```
it('should delete a user', () => {
  const user1 = new User(1, 'John Doe', 'john.doe@example.com');
  const user2 = new User(2, 'Jane Doe', 'jane.doe@example.com');
  service.create(user1);
  service.create(user2);

  service.remove(1);

  expect(service.findAll()).toEqual([user2]);
  expect(service.findOne(1)).toBeUndefined();
});
```

## Paso 4: Ejecutar las Pruebas

>Puedes ejecutar las pruebas utilizando el comando de Jest:
```
npx jest
```
>O agregar un script en tu package.json:
```
"scripts": {
  "test": "jest"
}
```

>Y luego ejecutarlo con:

```
npm test
```

## Conclusión
>Las pruebas unitarias son una parte esencial del desarrollo de software moderno y ayudan a asegurar que tu código funcione como se espera. Esta guía te ha mostrado cómo escribir y ejecutar pruebas unitarias en NestJS 10. Puedes expandir estas pruebas para cubrir todos los aspectos de tu aplicación y asegurar una base de código robusta y mantenible.