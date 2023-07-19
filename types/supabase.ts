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
      admins: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      chat: {
        Row: {
          commission: number | null
          id: number
          owner: string
        }
        Insert: {
          commission?: number | null
          id?: number
          owner?: string
        }
        Update: {
          commission?: number | null
          id?: number
          owner?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_commission_fkey"
            columns: ["commission"]
            referencedRelation: "commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      chat_messages: {
        Row: {
          attachments: string[]
          chat: number
          content: string
          created_at: string
          id: number
          owner: string
        }
        Insert: {
          attachments?: string[]
          chat: number
          content: string
          created_at?: string
          id?: number
          owner?: string
        }
        Update: {
          attachments?: string[]
          chat?: number
          content?: string
          created_at?: string
          id?: number
          owner?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_chat_fkey"
            columns: ["chat"]
            referencedRelation: "chat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      commissions: {
        Row: {
          complete: boolean
          created_at: string
          id: number
          owner: string
          value: number
        }
        Insert: {
          complete?: boolean
          created_at?: string
          id?: number
          owner: string
          value?: number
        }
        Update: {
          complete?: boolean
          created_at?: string
          id?: number
          owner?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "commissions_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      earnings: {
        Row: {
          amount: number
          commission: string | null
          date: string
          id: number
        }
        Insert: {
          amount: number
          commission?: string | null
          date?: string
          id?: number
        }
        Update: {
          amount?: number
          commission?: string | null
          date?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
