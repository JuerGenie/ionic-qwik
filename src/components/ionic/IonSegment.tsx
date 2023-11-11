import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonSegmentCustomEvent,
  SegmentChangeEventDetail,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonSegmentCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonSegmentElement,
  {
    onIonChange$?: EventArgument<SegmentChangeEventDetail>;
    onIonSelect$?: EventArgument<SegmentChangeEventDetail>;
    onIonStyle$?: EventArgument<StyleEventDetail>;
  }
>;

export const IonSegment = component$(
  ({ onIonChange$, onIonSelect$, onIonStyle$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionSelect",
      $((evt: any) => onIonSelect$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );

    return (
      <ion-segment {...transferdProps}>
        <Slot />
      </ion-segment>
    );
  },
);
