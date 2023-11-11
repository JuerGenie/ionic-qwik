import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonListHeaderElement>;

export const IonListHeader = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-list-header {...transferdProps}>
      <Slot />
    </ion-list-header>
  );
});
