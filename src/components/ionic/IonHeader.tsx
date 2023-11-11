import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonHeaderElement>;

export const IonHeader = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-header {...transferdProps}>
      <Slot />
    </ion-header>
  );
});
