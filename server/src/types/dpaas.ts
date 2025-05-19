// Tipos del modelo de servicio/registro para DPaaS

export interface ServiceRegistrationData {
  providerAccount: string;        // Cuenta del proveedor del servicio
  minHpRequired: number;          // Mínimo HP requerido para usar el servicio
  delegationReceiverAccount: string; // Cuenta que recibe la delegación para el servicio
  dpaasPayerAccount: string;      // Cuenta que paga el uso de DPaaS (delegando a @dpaas)
  description?: string;           // Descripción opcional del servicio
  tag?: string;                   // Tag opcional para categorizar el servicio
}

export interface SubscriptionData {
  delegatorAccount: string;       // Cuenta que delega HP
  serviceProviderAccount: string; // Cuenta del proveedor del servicio al que se suscribe
  delegatedAmountHP: number;      // Cantidad de HP delegado
}

// Puedes añadir más interfaces y tipos según los necesites.