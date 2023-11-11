import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonRouterLinkElement>;

export const IonRouterLink = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-router-link {...transferdProps}>
      <Slot />
    </ion-router-link>
  );
});
