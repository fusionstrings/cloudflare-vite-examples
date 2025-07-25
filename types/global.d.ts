declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
      "x-greeting": JSX.HTMLAttributes<HTMLElement> & {
        'name'?: 'string'
      };
    }
  }
}

// This empty export is important! It tells TS to treat this as a module
export { };