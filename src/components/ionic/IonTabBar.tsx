import { Slot, component$ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";

export type Props = ElementProps<HTMLIonTabBarElement>;

export const IonTabBar = component$((props: Props) => {
  const transferdProps = transform(props);

  return (
    <ion-tab-bar {...transferdProps}>
      <Slot />
    </ion-tab-bar>
  );
});
