export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          user_id: string;
        };
        Insert: {
          user_id: string;
        };
        Update: {
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "admins_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      chat_messages: {
        Row: {
          attachments: string[];
          chat: number;
          content: string;
          created_at: string;
          id: number;
          owner: string;
          reply: number | null;
        };
        Insert: {
          attachments?: string[];
          chat: number;
          content: string;
          created_at?: string;
          id?: number;
          owner?: string;
          reply?: number | null;
        };
        Update: {
          attachments?: string[];
          chat?: number;
          content?: string;
          created_at?: string;
          id?: number;
          owner?: string;
          reply?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "chat_messages_chat_fkey";
            columns: ["chat"];
            referencedRelation: "chats";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_messages_owner_fkey";
            columns: ["owner"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_messages_reply_fkey";
            columns: ["reply"];
            referencedRelation: "chat_messages";
            referencedColumns: ["id"];
          },
        ];
      };
      chats: {
        Row: {
          id: number;
          owner: string;
        };
        Insert: {
          id?: number;
          owner?: string;
        };
        Update: {
          id?: number;
          owner?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chats_owner_fkey";
            columns: ["owner"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      commissions: {
        Row: {
          chat: number | null;
          complete: boolean;
          created_at: string;
          deadline: string | null;
          description: string | null;
          id: number;
          owner: string;
          value: number;
        };
        Insert: {
          chat?: number | null;
          complete?: boolean;
          created_at?: string;
          deadline?: string | null;
          description?: string | null;
          id?: number;
          owner?: string;
          value?: number;
        };
        Update: {
          chat?: number | null;
          complete?: boolean;
          created_at?: string;
          deadline?: string | null;
          description?: string | null;
          id?: number;
          owner?: string;
          value?: number;
        };
        Relationships: [
          {
            foreignKeyName: "commissions_chat_fkey";
            columns: ["chat"];
            referencedRelation: "chats";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "commissions_owner_fkey";
            columns: ["owner"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      earnings: {
        Row: {
          amount: number;
          commission: string | null;
          date: string;
          id: number;
        };
        Insert: {
          amount: number;
          commission?: string | null;
          date?: string;
          id?: number;
        };
        Update: {
          amount?: number;
          commission?: string | null;
          date?: string;
          id?: number;
        };
        Relationships: [];
      };
      invoices: {
        Row: {
          amount: number;
          commission: number;
          id: number;
          stripe_id: string | null;
          url: string | null;
        };
        Insert: {
          amount: number;
          commission: number;
          id?: number;
          stripe_id?: string | null;
          url?: string | null;
        };
        Update: {
          amount?: number;
          commission?: number;
          id?: number;
          stripe_id?: string | null;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "invoices_commission_fkey";
            columns: ["commission"];
            referencedRelation: "commissions";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          chat_notification: boolean;
          deadline_notification: boolean;
          full_name: string | null;
          id: string;
          notification_token: string | null;
          reviews_notification: boolean;
          updated_at: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          chat_notification?: boolean;
          deadline_notification?: boolean;
          full_name?: string | null;
          id: string;
          notification_token?: string | null;
          reviews_notification?: boolean;
          updated_at?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          chat_notification?: boolean;
          deadline_notification?: boolean;
          full_name?: string | null;
          id?: string;
          notification_token?: string | null;
          reviews_notification?: boolean;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      reviews: {
        Row: {
          code: string | null;
          comment: string | null;
          id: number;
          name: string | null;
          rating: number | null;
        };
        Insert: {
          code?: string | null;
          comment?: string | null;
          id?: number;
          name?: string | null;
          rating?: number | null;
        };
        Update: {
          code?: string | null;
          comment?: string | null;
          id?: number;
          name?: string | null;
          rating?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
