import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonFabListElement>;

export const IonFabList = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-fab-list {...transferdProps}>
      <Slot />
    </ion-fab-list>
  );
});
