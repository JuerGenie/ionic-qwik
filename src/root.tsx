import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { IonicHeader } from "./index";
import "./root.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>

        <ServiceWorkerRegister />
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
