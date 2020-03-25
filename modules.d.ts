declare module 'twin.macro'

declare namespace React {
  interface HTMLAttributes {
    tw?: string
  }
}

// minimal typings for tailwind.config.js theme
declare namespace tailwindcss {
  interface Theme {
    colors: { [K: string]: string }
  }
}

declare module 'tailwindcss/resolveConfig' {
  export default function resolveConfig(
    config: any
  ): {
    theme: Theme
  }
}
