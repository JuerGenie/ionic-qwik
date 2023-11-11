import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonReorderGroupCustomEvent,
  ItemReorderEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonReorderGroupCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonReorderElement,
  {
    onIonItemReorder$: EventArgument<ItemReorderEventDetail>;
  }
>;

export const IonReorderGroup = component$(
  ({ onIonItemReorder$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionItemReorder",
      $((evt: any) => onIonItemReorder$?.(evt)),
    );

    return (
      <ion-reorder-group {...transferdProps}>
        <Slot />
      </ion-reorder-group>
    );
  },
);
