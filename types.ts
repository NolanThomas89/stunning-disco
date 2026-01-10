export interface EquipmentStatusResult {
  success: boolean;
  message: string;
  status?: 'OK' | 'DUE';
  maintenance_date?: string;
  location?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ReportPayload {
  equipment_id: string;
  type: string;
  description: string;
}