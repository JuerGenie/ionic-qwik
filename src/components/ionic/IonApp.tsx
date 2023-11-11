import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonAppElement>;

export const IonApp = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-app {...transferdProps}>
      <Slot />
    </ion-app>
  );
});
