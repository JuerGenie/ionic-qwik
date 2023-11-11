import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonRouterOutletElement>;

export const IonRouterOutlet = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-router-outlet {...transferdProps}>
      <Slot />
    </ion-router-outlet>
  );
});
