/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAITLIST_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
