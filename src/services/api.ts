import { ContactFormData, ApiResponse, SystemHealthStatus, InquiryRecord } from '../types';

const API_BASE_URL = '/api/v1';

export async function submitContactInquiry(formData: ContactFormData): Promise<ApiResponse<InquiryRecord>> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error (${response.status})`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error (submitContactInquiry):', error);
    return {
      success: false,
      message: error.message || 'Failed to submit transmission to server. Please try again.',
    };
  }
}

export async function getSystemHealth(): Promise<ApiResponse<SystemHealthStatus>> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Health check failed (${response.status})`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error (getSystemHealth):', error);
    return {
      success: false,
      message: 'System monitoring offline or unreachable',
      data: {
        status: 'OFFLINE',
        activeMonitors: 0,
        uptime: '0%',
        systemCheck: 'Standby mode',
      },
    };
  }
}
