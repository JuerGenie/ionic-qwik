import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonToggleCustomEvent,
  StyleEventDetail,
  ToggleChangeEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonToggleCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonToggleElement,
  {
    onIonChange$?: EventArgument<ToggleChangeEventDetail>;
    onIonFocus$?: EventArgument<void>;
    onIonBlur$?: EventArgument<void>;
    onIonStyle$?: EventArgument<StyleEventDetail>;
  }
>;

export const IonToggle = component$(
  ({ onIonChange$, onIonBlur$, onIonFocus$, onIonStyle$, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );
    useOn(
      "ionStyle",
      $((evt: any) => onIonStyle$?.(evt)),
    );

    return (
      <ion-toggle {...transferdProps}>
        <Slot />
      </ion-toggle>
    );
  },
);
