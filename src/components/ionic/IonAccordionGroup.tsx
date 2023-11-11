import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  AccordionGroupChangeEventDetail,
  IonAccordionGroupCustomEvent,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonAccordionGroupCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonAccordionGroupElement,
  {
    onIonChange$?: EventArgument<AccordionGroupChangeEventDetail>;
    onIonValueChange$?: EventArgument<AccordionGroupChangeEventDetail>;
  }
>;

export const IonAccordionGroup = component$(
  ({ onIonChange$, onIonValueChange$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionValueChange",
      $((evt: any) => onIonValueChange$?.(evt)),
    );

    return (
      <ion-accordion-group {...transferdProps}>
        <Slot />
      </ion-accordion-group>
    );
  },
);
