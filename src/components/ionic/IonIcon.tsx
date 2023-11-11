import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonIconElement>;

export const IonIcon = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-icon {...transferdProps}>
      <Slot />
    </ion-icon>
  );
});
