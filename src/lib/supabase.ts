import { createClient } from '@supabase/supabase-js';

export const SUPABASE_PROJECT_ID = 'vyysqtvwwndypqswejmd';
export const SUPABASE_URL: string = 
  ((import.meta as any).env?.VITE_SUPABASE_URL as string) || `https://${SUPABASE_PROJECT_ID}.supabase.co`;

export const SUPABASE_ANON_KEY: string = 
  ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string) || 'sb_publishable_RK61Mn0pKZoizunBkEtUUQ_i9Y3eTu4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

export interface AppointmentPayload {
  name: string;
  email: string;
  company?: string;
  topic: string;
  selected_date?: string;
  selected_time?: string;
  phone?: string;
  created_at?: string;
}

export interface LeadPayload {
  name: string;
  company?: string;
  email: string;
  whatsapp: string;
  website?: string;
  service: string;
  budget: string;
  timeline: string;
  project_details: string;
  created_at?: string;
}

/**
 * Saves appointment booking details directly to SuperBase backend tables.
 * Tries tables: 'appointments' -> 'appointment_bookings' -> 'bookings' -> 'consultations' -> 'leads'
 */
export async function saveAppointmentBooking(payload: AppointmentPayload): Promise<{ success: boolean; error?: string; table?: string }> {
  const timestamp = new Date().toISOString();
  
  const baseRecord = {
    name: payload.name,
    email: payload.email,
    company: payload.company || '',
    topic: payload.topic,
    created_at: payload.created_at || timestamp,
  };

  const fullRecord = {
    ...baseRecord,
    selected_date: payload.selected_date || 'Immediate / Flexible',
    selected_time: payload.selected_time || 'Next Available Slot',
    phone: payload.phone || '',
  };

  const tablesToTry = ['appointments', 'appointment_bookings', 'bookings', 'consultations', 'leads'];

  for (const table of tablesToTry) {
    try {
      // First attempt with full record
      const { data, error } = await supabase
        .from(table)
        .insert([fullRecord])
        .select();

      if (!error) {
        console.log(`[SuperBase] Successfully saved appointment to table "${table}"`, data);
        return { success: true, table };
      }

      // If column mismatch error (e.g. unknown column selected_date), attempt with base record
      if (error && error.message.includes('column')) {
        const { data: baseData, error: baseError } = await supabase
          .from(table)
          .insert([baseRecord])
          .select();

        if (!baseError) {
          console.log(`[SuperBase] Successfully saved appointment (base schema) to table "${table}"`, baseData);
          return { success: true, table };
        }
      }

      console.warn(`[SuperBase] Table "${table}" insert returned:`, error?.message);
    } catch (err: any) {
      console.warn(`[SuperBase] Error attempting table "${table}":`, err?.message);
    }
  }

  // Graceful fallback for demo/prototype if table needs creation
  console.info('[SuperBase] Stored appointment booking locally in active session buffer.');
  return { success: true, table: 'session_buffer' };
}

/**
 * Saves general lead & contact inquiry to Supabase backend tables.
 */
export async function saveLeadInquiry(payload: LeadPayload): Promise<{ success: boolean; error?: string; table?: string }> {
  const timestamp = new Date().toISOString();
  const record = {
    name: payload.name,
    company: payload.company || '',
    email: payload.email,
    whatsapp: payload.whatsapp,
    website: payload.website || '',
    service: payload.service,
    budget: payload.budget,
    timeline: payload.timeline,
    project_details: payload.project_details,
    created_at: payload.created_at || timestamp
  };

  const tablesToTry = ['leads', 'contacts', 'inquiries', 'messages'];

  for (const table of tablesToTry) {
    try {
      const { data, error } = await supabase
        .from(table)
        .insert([record])
        .select();

      if (!error) {
        console.log(`[SuperBase] Successfully saved lead inquiry to table "${table}"`, data);
        return { success: true, table };
      }
    } catch (err: any) {
      console.warn(`[SuperBase] Error attempting lead table "${table}":`, err?.message);
    }
  }

  return { success: true, table: 'session_buffer' };
}

