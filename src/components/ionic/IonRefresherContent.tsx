import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonRefresherContentElement>;

export const IonRefresherContent = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-refresher-content {...transferdProps}>
      <Slot />
    </ion-refresher-content>
  );
});
