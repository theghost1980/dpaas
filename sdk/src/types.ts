// Tipos específicos para el SDK de DPaaS

/**
 * Parámetros para registrar un servicio a través del SDK.
 * Estos podrían ser similares o idénticos a los tipos del servidor,
 * o podrían ser una versión simplificada para el cliente.
 */
export interface ServiceRegistrationParams {
  providerAccount: string;
  minHpRequired: number;
  delegationReceiverAccount: string;
  dpaasPayerAccount: string;
  description?: string;
  tag?: string;
  // Podría incluir aquí opciones de firma o autenticación si el SDK las maneja
}

export interface ConsultationParams {
  account: string; // Cuenta a consultar
  serviceId?: string; // Opcional, si se consulta un servicio específico
}

export interface DelegationParams {
  delegator: string;
  delegatee: string;
  amountHP: number;
  // Opciones de firma/keychain
}

// Añade más interfaces y tipos según las necesidades del SDK.