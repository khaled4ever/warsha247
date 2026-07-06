/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'Cpu' | 'Zap' | 'BatteryCharging';
  features: string[];
}

export interface Symptom {
  id: string;
  label: string;
  description: string;
  recommendedServiceId: string;
  iconType: 'battery' | 'engine' | 'temperature' | 'ac' | 'dent' | 'general';
}

export interface Neighborhood {
  name: string;
  region: 'north' | 'east' | 'west' | 'south_central';
  timeMin: number;
}

export interface Testimonial {
  id: string;
  name: string;
  carModel: string;
  rating: number;
  comment: string;
  date: string;
  neighborhood: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BookingRequest {
  carBrand: string;
  carModel: string;
  symptom: string;
  neighborhood: string;
  phone: string;
  notes?: string;
}
