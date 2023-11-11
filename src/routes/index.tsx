import { component$, useStyles$ } from "@builder.io/qwik";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonText,
  IonTitle,
  IonToolbar,
} from "../components/ionic";
import { PROJECT_NAME } from "..";
import styles from "./index.css?inline";

export default component$(() => {
  useStyles$(styles);
  const name = PROJECT_NAME.toUpperCase();

  return (
    <IonApp class="index-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              What's <code>{PROJECT_NAME}</code>?
            </IonCardTitle>
            <IonCardSubtitle>
              <code>qwik</code> + <code>ionic</code>!
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>{PROJECT_NAME} is a binding for Ionic in Qwik.</IonText>
            <IonText>
              Let you build Ionic apps with Qwik, a lightweight framework for
              building web apps with JSX.
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              How to use <code>{PROJECT_NAME}</code>?
            </IonCardTitle>
            <IonCardSubtitle>
              use <code>npm</code>/<code>yarn</code> or <code>pnpm</code>?
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>
              <h1>Install</h1>
            </IonText>
            <IonText>
              <code>npm install ionic-qwik</code>
            </IonText>
            <IonText>
              <code>yarn add ionic-qwik</code>
            </IonText>
            <IonText>
              <code>pnpm add ionic-qwik</code>
            </IonText>
            <hr />

            <IonText>
              <h1>Register</h1>
            </IonText>
            <IonText>
              <blockquote>/src/root.tsx</blockquote>
            </IonText>
            <IonText>
              <code>
                <pre>
                  {[
                    'import { IonicHeader } from "./index";',
                    "",
                    "export default component$(() => {",
                    "  return (",
                    "    <QwikCityProvider>",
                    "      <head>",
                    '        <meta charSet="utf-8" />',
                    "        <title>Qwik Blank App</title>",
                    "",
                    "        <ServiceWorkerRegister />",
                    "",
                    "        <!-- Add header, to register `ionic`'s web-components. -->",
                    '        <IonicHeader config$={() => ({ mode: "ios" })} />',
                    "      </head>",
                    "      <body>",
                    '        <div id="app">',
                    "          <RouterOutlet />",
                    "        </div>",
                    "      </body>",
                    "    </QwikCityProvider>",
                    "  );",
                    "});",
                  ].join("\n")}
                </pre>
              </code>
            </IonText>
            <hr />

            <IonText>
              <h1>Examples</h1>
            </IonText>
            <IonText>
              See <code>examples</code> at left side.
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter translucent collapse="fade">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton href="https://npmjs.com/package/ionic-qwik">
              <IonIcon slot="icon-only" name="logo-npm" />
            </IonButton>
            <IonButton href="https://github.com/juergenie/ionic-qwik">
              <IonIcon slot="icon-only" name="logo-github" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
});
