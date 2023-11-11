import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonItemOptionsCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonItemOptionsElement,
  {
    onIonSwipe$: QRL<(evt: IonItemOptionsCustomEvent<any>) => any>;
  }
>;

export const IonItemOptions = component$(({ onIonSwipe$, ...props }: Props) => {
  const transferdProps = transform(props);

  useOn(
    "ionSwipe",
    $((evt: any) => onIonSwipe$(evt)),
  );

  return (
    <ion-item-options {...transferdProps}>
      <Slot />
    </ion-item-options>
  );
});
