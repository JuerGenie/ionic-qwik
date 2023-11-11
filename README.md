# What's `ionic-qwik`?

`ionic-qwik` is a binding for Ionic in Qwik. It lets you build Ionic apps with Qwik, a lightweight framework for building web apps with JSX.

# How to use `ionic-qwik`?

You can use npm, yarn or pnpm.

## Install

```bash
npm install ionic-qwik
yarn add ionic-qwik
pnpm add ionic-qwik
```

## Register

In your `/src/root.tsx` file, add the following code:

```jsx
import { IonicHeader } from "./index";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>

        <ServiceWorkerRegister />

        <!-- Add header, to register `ionic`'s web-components and styles. -->
        <IonicHeader config$={() => ({ mode: "ios" })} />
      </head>
      <body>
        <div id="app">
          <RouterOutlet />
        </div>
      </body>
    </QwikCityProvider>
  );
});
```

## Examples

See [`examples`](https://github.com/juergenie/ionic-qwik).
