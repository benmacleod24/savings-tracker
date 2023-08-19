export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      savings_goals: {
        Row: {
          amount_to_save: number | null
          completion_date: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          amount_to_save?: number | null
          completion_date?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          amount_to_save?: number | null
          completion_date?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
