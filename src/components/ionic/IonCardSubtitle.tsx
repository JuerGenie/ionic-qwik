import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonCardSubtitleElement>;

export const IonCardSubtitle = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-card-subtitle {...transferdProps}>
      <Slot />
    </ion-card-subtitle>
  );
});
