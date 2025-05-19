📦 Estructura General del Proyecto
```
bash
Copy
Edit
dpaas/
├── server/                  # API y lógica principal (Express + TypeScript)
│   ├── src/
│   │   ├── index.ts         # Entrada del servidor
│   │   ├── routes/
│   │   │   ├── register.ts  # Endpoint para registrar un servicio
│   │   │   ├── status.ts    # Verifica el estado de un servicio o suscripción
│   │   ├── services/
│   │   │   ├── hive.ts      # Funciones relacionadas con Hive blockchain
│   │   │   ├── memory.ts    # Almacenamiento en memoria tipo cache temporal
│   │   │   ├── worker.ts    # Procesos de monitoreo de delegaciones
│   │   ├── types/           # Interfaces y tipos globales
│   │   │   ├── dpaas.ts     # Tipos del modelo de servicio/registro
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── sdk/                     # SDK externo en TypeScript para usar en otros sitios
│   ├── src/
│   │   ├── dpaas.ts         # Función para registrar, consultar, delegar, etc.
│   │   ├── types.ts         # Tipos del SDK
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
```

✅ Tecnologías principales
Node.js + Express

TypeScript

@hiveio/dhive y keychain-sdk

(opcional) node-cache para gestión temporal en memoria

📌 Datos que se almacenan en Hive
📥 Registro del servicio: como post de cuenta @dpaas usando metadata personalizado (JSON)

📝 Cada servicio registrado incluirá:

Cuenta del proveedor

Mínimo HP requerido

Cuenta de recepción de delegación

Cuenta que paga el uso de DPaaS (delegando a @dpaas)

Descripción y tag opcionales

📊 Las subscripciones se pueden guardar como comentarios al post original, con metadata indicando cuenta delegante y cantidad

🧠 Lógica del servidor
POST /register: recibe el formulario de registro del proveedor, lo convierte en post JSON con metadata a la cuenta @dpaas

GET /status/:account: retorna el estado de un usuario frente a un servicio (activo/inactivo/no encontrado)

Worker que monitorea delegaciones a través de dhive, guarda en memoria los datos más recientes

Validación basada en poder de delegación actual usando dhive.getVestingDelegations y account_history