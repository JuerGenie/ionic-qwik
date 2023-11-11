import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonTabElement>;

export const IonTab = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-tab {...transferdProps}>
      <Slot />
    </ion-tab>
  );
});
