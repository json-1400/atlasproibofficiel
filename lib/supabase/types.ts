export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type OrderStatus = "pending" | "paid" | "delivered" | "failed";
export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          phone: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          phone?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          phone?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          id: string;
          order_number: number;
          customer_id: string | null;
          customer_name: string | null;
          customer_email: string;
          customer_phone: string | null;
          country: string | null;
          contact_preference: string | null;
          plan_slug: string;
          amount: number;
          currency: string;
          device_type: string | null;
          mac_address: string | null;
          app_used: string | null;
          devices_count: number;
          preferred_payment: string | null;
          status: string;
          activation_code: string | null;
          customer_notes: string | null;
          admin_notes: string | null;
          payment_ref: string | null;
          activation_start: string | null;
          activation_end: string | null;
          reminder_sent: boolean;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number?: number;
          customer_id?: string | null;
          customer_name?: string | null;
          customer_email?: string;
          customer_phone?: string | null;
          country?: string | null;
          contact_preference?: string | null;
          plan_slug: string;
          amount: number;
          currency?: string;
          device_type?: string | null;
          mac_address?: string | null;
          app_used?: string | null;
          devices_count?: number;
          preferred_payment?: string | null;
          status?: string;
          activation_code?: string | null;
          customer_notes?: string | null;
          admin_notes?: string | null;
          payment_ref?: string | null;
          activation_start?: string | null;
          activation_end?: string | null;
          reminder_sent?: boolean;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_number?: number;
          customer_id?: string | null;
          customer_name?: string | null;
          customer_email?: string;
          customer_phone?: string | null;
          country?: string | null;
          contact_preference?: string | null;
          plan_slug?: string;
          amount?: number;
          currency?: string;
          device_type?: string | null;
          mac_address?: string | null;
          app_used?: string | null;
          devices_count?: number;
          preferred_payment?: string | null;
          status?: string;
          activation_code?: string | null;
          customer_notes?: string | null;
          admin_notes?: string | null;
          payment_ref?: string | null;
          activation_start?: string | null;
          activation_end?: string | null;
          reminder_sent?: boolean;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey";
            columns: ["customer_id"];
            isOneToOne: false;
            referencedRelation: "customers";
            referencedColumns: ["id"];
          }
        ];
      };
      tickets: {
        Row: {
          id: string;
          ticket_number: string | null;
          customer_name: string | null;
          email: string;
          phone: string | null;
          order_number: string | null;
          category: string | null;
          device_type: string | null;
          subject: string | null;
          message: string;
          status: TicketStatus;
          priority: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          ticket_number?: string | null;
          customer_name?: string | null;
          email: string;
          phone?: string | null;
          order_number?: string | null;
          category?: string | null;
          device_type?: string | null;
          subject?: string | null;
          message: string;
          status?: TicketStatus;
          priority?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          ticket_number?: string | null;
          customer_name?: string | null;
          email?: string;
          phone?: string | null;
          order_number?: string | null;
          category?: string | null;
          device_type?: string | null;
          subject?: string | null;
          message?: string;
          status?: TicketStatus;
          priority?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      order_status: OrderStatus;
      ticket_status: TicketStatus;
    };
    CompositeTypes: Record<string, never>;
  };
}
