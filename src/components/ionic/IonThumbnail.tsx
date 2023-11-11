import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonThumbnailElement>;

export const IonThumbnail = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-thumbnail {...transferdProps}>
      <Slot />
    </ion-thumbnail>
  );
});
