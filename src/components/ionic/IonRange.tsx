import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonRangeCustomEvent,
  RangeChangeEventDetail,
  RangeKnobMoveEndEventDetail,
  RangeKnobMoveStartEventDetail,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonRangeCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonRangeElement,
  {
    onIonChange$?: EventArgument<RangeChangeEventDetail>;
    onIonInput$?: EventArgument<RangeChangeEventDetail>;
    onIonStyle$?: EventArgument<StyleEventDetail>;
    onIonFocus$?: EventArgument<void>;
    onIonBlur$?: EventArgument<void>;
    onIonKnobMoveStart$?: EventArgument<RangeKnobMoveStartEventDetail>;
    onIonKnobMoveEnd$?: EventArgument<RangeKnobMoveEndEventDetail>;
  }
>;

export const IonRange = component$(
  ({
    onIonBlur$,
    onIonChange$,
    onIonFocus$,
    onIonInput$,
    onIonKnobMoveEnd$,
    onIonKnobMoveStart$,
    onIonStyle$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );
    useOn(
      "ionInput",
      $((evt: any) => onIonInput$?.(evt)),
    );
    useOn(
      "ionKnobMoveEnd",
      $((evt: any) => onIonKnobMoveEnd$?.(evt)),
    );
    useOn(
      "ionKnobMoveStart",
      $((evt: any) => onIonKnobMoveStart$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );

    return (
      <ion-range {...transferdProps}>
        <Slot />
      </ion-range>
    );
  },
);
