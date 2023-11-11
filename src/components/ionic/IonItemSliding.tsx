import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonItemSlidingCustomEvent } from "@ionic/core";

export type Props = ElementProps<
  HTMLIonItemSlidingElement,
  {
    onIonDrag$: QRL<(evt: IonItemSlidingCustomEvent<any>) => any>;
  }
>;

export const IonItemSliding = component$(({ onIonDrag$, ...props }: Props) => {
  const transferdProps = transform(props);

  useOn(
    "ionDrag",
    $((evt: any) => onIonDrag$(evt)),
  );

  return (
    <ion-item-sliding {...transferdProps}>
      <Slot />
    </ion-item-sliding>
  );
});
