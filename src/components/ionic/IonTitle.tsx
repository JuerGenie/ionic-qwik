import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonTitleElement>;

export const IonTitle = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-title {...transferdProps}>
      <Slot />
    </ion-title>
  );
});
