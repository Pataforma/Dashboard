export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      endereco: {
        Row: {
          bairro: string | null
          cep: string | null
          complemento: string | null
          id_endereco: number
          id_municipio: number | null
          numero: string | null
          rua: string | null
        }
        Insert: {
          bairro?: string | null
          cep?: string | null
          complemento?: string | null
          id_endereco?: number
          id_municipio?: number | null
          numero?: string | null
          rua?: string | null
        }
        Update: {
          bairro?: string | null
          cep?: string | null
          complemento?: string | null
          id_endereco?: number
          id_municipio?: number | null
          numero?: string | null
          rua?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "endereco_id_municipio_fkey"
            columns: ["id_municipio"]
            isOneToOne: false
            referencedRelation: "municipio"
            referencedColumns: ["id_municipio"]
          },
        ]
      }
      estado: {
        Row: {
          id_estado: number
          nome: string
          sigla: string
        }
        Insert: {
          id_estado?: number
          nome: string
          sigla: string
        }
        Update: {
          id_estado?: number
          nome?: string
          sigla?: string
        }
        Relationships: []
      }
      historico_alimentacao: {
        Row: {
          id: string
          metodo: string
          pet_detectado: boolean | null
          pet_id: string | null
          quantidade: number
          timestamp: string
        }
        Insert: {
          id?: string
          metodo: string
          pet_detectado?: boolean | null
          pet_id?: string | null
          quantidade: number
          timestamp?: string
        }
        Update: {
          id?: string
          metodo?: string
          pet_detectado?: boolean | null
          pet_id?: string | null
          quantidade?: number
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "historico_alimentacao_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      horarios_alimentacao: {
        Row: {
          ativo: boolean
          created_at: string
          dias_semana: number[] | null
          horario: string
          id: string
          pet_id: string | null
          quantidade: number
          updated_at: string
        }
        Insert: {
          ativo?: boolean
          created_at?: string
          dias_semana?: number[] | null
          horario: string
          id?: string
          pet_id?: string | null
          quantidade: number
          updated_at?: string
        }
        Update: {
          ativo?: boolean
          created_at?: string
          dias_semana?: number[] | null
          horario?: string
          id?: string
          pet_id?: string | null
          quantidade?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "horarios_alimentacao_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      leituras_rfid: {
        Row: {
          id: string
          timestamp: string | null
          uid: string
        }
        Insert: {
          id: string
          timestamp?: string | null
          uid?: string
        }
        Update: {
          id?: string
          timestamp?: string | null
          uid?: string
        }
        Relationships: []
      }
      municipio: {
        Row: {
          id_estado: number | null
          id_municipio: number
          nome: string
        }
        Insert: {
          id_estado?: number | null
          id_municipio?: number
          nome: string
        }
        Update: {
          id_estado?: number | null
          id_municipio?: number
          nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "municipio_id_estado_fkey"
            columns: ["id_estado"]
            isOneToOne: false
            referencedRelation: "estado"
            referencedColumns: ["id_estado"]
          },
        ]
      }
      pets: {
        Row: {
          created_at: string
          foto_url: string | null
          id: string
          idade: number | null
          nfc_id: string | null
          nome: string
          peso: number | null
          raca: string | null
          updated_at: string
          usuario_id: string | null
        }
        Insert: {
          created_at?: string
          foto_url?: string | null
          id?: string
          idade?: number | null
          nfc_id?: string | null
          nome: string
          peso?: number | null
          raca?: string | null
          updated_at?: string
          usuario_id?: string | null
        }
        Update: {
          created_at?: string
          foto_url?: string | null
          id?: string
          idade?: number | null
          nfc_id?: string | null
          nome?: string
          peso?: number | null
          raca?: string | null
          updated_at?: string
          usuario_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pets_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id_usuario"]
          },
        ]
      }
      status_sistema: {
        Row: {
          bomba_ativa: boolean | null
          id: string
          nfc_ativo: boolean | null
          nivel_agua: number
          nivel_racao: number
          temperatura_agua: number | null
          ultima_leitura: string
          updated_at: string
          wifi_conectado: boolean | null
        }
        Insert: {
          bomba_ativa?: boolean | null
          id?: string
          nfc_ativo?: boolean | null
          nivel_agua?: number
          nivel_racao?: number
          temperatura_agua?: number | null
          ultima_leitura?: string
          updated_at?: string
          wifi_conectado?: boolean | null
        }
        Update: {
          bomba_ativa?: boolean | null
          id?: string
          nfc_ativo?: boolean | null
          nivel_agua?: number
          nivel_racao?: number
          temperatura_agua?: number | null
          ultima_leitura?: string
          updated_at?: string
          wifi_conectado?: boolean | null
        }
        Relationships: []
      }
      usuario: {
        Row: {
          data_atualizacao: string | null
          data_criacao: string | null
          email: string
          id_endereco: number | null
          id_usuario: string
          nome: string
          status: Database["public"]["Enums"]["status_enum"] | null
          telefone: string | null
          tipo_usuario: Database["public"]["Enums"]["tipo_usuario_enum"]
        }
        Insert: {
          data_atualizacao?: string | null
          data_criacao?: string | null
          email: string
          id_endereco?: number | null
          id_usuario?: string
          nome?: string
          status?: Database["public"]["Enums"]["status_enum"] | null
          telefone?: string | null
          tipo_usuario: Database["public"]["Enums"]["tipo_usuario_enum"]
        }
        Update: {
          data_atualizacao?: string | null
          data_criacao?: string | null
          email?: string
          id_endereco?: number | null
          id_usuario?: string
          nome?: string
          status?: Database["public"]["Enums"]["status_enum"] | null
          telefone?: string | null
          tipo_usuario?: Database["public"]["Enums"]["tipo_usuario_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "usuario_id_endereco_fkey"
            columns: ["id_endereco"]
            isOneToOne: false
            referencedRelation: "endereco"
            referencedColumns: ["id_endereco"]
          },
        ]
      }
      veterinario: {
        Row: {
          especialidade: string | null
          id_usuario: string | null
          id_veterinario: number
          tipo_atendimento:
            | Database["public"]["Enums"]["tipo_atendimento_enum"]
            | null
        }
        Insert: {
          especialidade?: string | null
          id_usuario?: string | null
          id_veterinario?: number
          tipo_atendimento?:
            | Database["public"]["Enums"]["tipo_atendimento_enum"]
            | null
        }
        Update: {
          especialidade?: string | null
          id_usuario?: string | null
          id_veterinario?: number
          tipo_atendimento?:
            | Database["public"]["Enums"]["tipo_atendimento_enum"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "veterinario_id_usuario_fkey"
            columns: ["id_usuario"]
            isOneToOne: false
            referencedRelation: "usuario"
            referencedColumns: ["id_usuario"]
          },
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
      status_enum: "ativo" | "inativo"
      tipo_atendimento_enum: "presencial" | "domiciliar" | "telemedicina"
      tipo_usuario_enum: "tutor" | "veterinario" | "parceiro" | "pendente"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      status_enum: ["ativo", "inativo"],
      tipo_atendimento_enum: ["presencial", "domiciliar", "telemedicina"],
      tipo_usuario_enum: ["tutor", "veterinario", "parceiro", "pendente"],
    },
  },
} as const
