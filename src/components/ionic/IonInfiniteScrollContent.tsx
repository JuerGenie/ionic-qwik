import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonInfiniteScrollContentElement>;

export const IonInfiniteScrollContent = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-infinite-scroll-content {...transferdProps}>
      <Slot />
    </ion-infinite-scroll-content>
  );
});
