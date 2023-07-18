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
      chat: {
        Row: {
          id: number
          owner: string
        }
        Insert: {
          id?: number
          owner?: string
        }
        Update: {
          id?: number
          owner?: string
        }
        Relationships: [
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
          chat: number
          content: string
          created_at: string | null
          id: number
          owner: string
        }
        Insert: {
          chat: number
          content: string
          created_at?: string | null
          id?: number
          owner?: string
        }
        Update: {
          chat?: number
          content?: string
          created_at?: string | null
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

