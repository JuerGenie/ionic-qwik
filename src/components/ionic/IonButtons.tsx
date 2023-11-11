import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonButtonsElement>;

export const IonButtons = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-buttons {...transferdProps}>
      <Slot />
    </ion-buttons>
  );
});
