# 🐝 DPaaS - Delegation Powered as a Service

DPaaS es una propuesta de microservicio construida sobre la blockchain de Hive que permite ofrecer y consumir servicios digitales utilizando **delegaciones de Hive Power (HP)** como método de pago. Este enfoque busca expandir las formas de monetización en Web3 sin necesidad de tokens líquidos, incentivando el uso del poder de voto y la infraestructura descentralizada de Hive.

---

## 🎯 Propósito

El objetivo principal de DPaaS es permitir que:

* 🧑‍💻 Creador\@s y desarrollador\@s ofrezcan servicios premium y cobren a través de **delegaciones temporales de HP**
* 🐝 El ecosistema Hive tenga una nueva capa de economía basada en reputación, poder de voto y compromiso
* ⚙️ Servicios de terceros integren un método sencillo para verificar suscripciones activas basado únicamente en delegaciones

---

## 🧩 ¿Cómo funciona?

1. **Registro del Servicio**

   * Un proveedor de servicio (por ejemplo, una app de artículos premium) se registra usando un formulario o vía SDK.
   * Este registro se guarda como un **post en la cuenta `@dpaas`**, incluyendo información en los metadatos:

     * Nombre del servicio
     * Cuenta que ofrece el servicio
     * Cuenta que recibirá la delegación
     * Monto mínimo de HP requerido
     * Cuenta que cubrirá el uso de DPaaS (delegación mínima a `@dpaas`)
     * Descripción, duración sugerida, entre otros

2. **Subscripción por delegación**

   * Un usuario visita el sitio web del proveedor del servicio y ve la opción de “Pagar con HP”.
   * El SDK de DPaaS facilita el proceso para delegar la cantidad requerida a la cuenta destino.
   * El acto de delegar HP activa el acceso al servicio. No se transfiere dinero, solo delegación de poder.

3. **Monitoreo**

   * Un worker en el backend consulta regularmente la blockchain para validar:

     * Si la cuenta usuaria mantiene una delegación activa suficiente
     * Si la cuenta proveedora sigue registrada correctamente
   * El estado puede ser `activo`, `inactivo`, o `no encontrado`.

---

## 🛠️ Componentes del Proyecto

* **Servidor Express (Node + TypeScript)**: ofrece los endpoints principales para registrar servicios y consultar estados.
* **Worker de monitoreo**: revisa en tiempo real las delegaciones usando la API de Hive.
* **SDK de cliente (TypeScript)**: se puede integrar fácilmente en sitios web para permitir pagos con delegación.

---

## 🔐 ¿Dónde se guarda la información?

Todo se almacena en la blockchain de Hive:

| Elemento                   | Ubicación en Hive                              |
| -------------------------- | ---------------------------------------------- |
| Registro del servicio      | Post bajo la cuenta `@dpaas`                   |
| Subscripciones de usuarios | Comentarios en el post del servicio (opcional) |
| Delegaciones activas       | API RPC de Hive (lectura en tiempo real)       |

Este enfoque **evita el uso de bases de datos centralizadas**, usando Hive como repositorio público y verificable.

---

## 🧪 Casos de uso posibles

* Aplicaciones premium o herramientas Web3 que quieran evitar fricción con pagos HBD o Hive
* Servicios de curación, suscripción, bots de automatización, generación de contenido, etc.
* Donaciones o acceso limitado a funciones específicas en función del HP delegado

---

## 🚀 Primeros pasos

1. Clona el repositorio y ejecuta el servidor en local
2. Usa `/register` para registrar un servicio
3. Usa el SDK en tu web/app para integrar el botón de suscripción vía HP
4. Consulta el endpoint `/status/:user` para verificar si un usuario tiene acceso

---

## 🧑‍🔧 Requisitos

* Node.js 18+
* Conocimiento básico de Hive
* Cuenta Hive con acceso a Keychain (para firmar acciones)

---

En progreso....