import {
  type QRL,
  component$,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import { type IonicConfig, setupConfig } from "@ionic/core";
import styles from "@ionic/core/css/ionic.bundle.css?url";
import script from "@ionic/core/dist/ionic/ionic.esm.js?url";

export interface Props {
  config$?: QRL<() => IonicConfig>;
}

export const IonicHeader = component$(({ config$ }: Props) => {
  const loaded = useSignal(false);

  useVisibleTask$(async () => {
    if (config$) {
      const config = await config$();
      setupConfig(config);
    }
    loaded.value = true;
  });

  return (
    <>
      <link rel="stylesheet" href={styles} />
      {loaded.value && <script type="module" src={script} />}
    </>
  );
});
