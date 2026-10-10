export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  timestamp?: string;
}

export interface InquiryRecord {
  id?: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
  status?: string;
  createdAt?: string;
}

export interface SystemHealthStatus {
  status: string;
  activeMonitors: number;
  uptime: string;
  systemCheck: string;
}
