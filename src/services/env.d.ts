/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEON_DB_URL: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}