import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonSelectCustomEvent,
  SelectChangeEventDetail,
  StyleEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonSelectCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonSelectElement,
  {
    onIonChange$?: EventArgument<SelectChangeEventDetail>;
    onIonCancel$?: EventArgument<void>;
    onIonDismiss$?: EventArgument<void>;
    onIonFocus$?: EventArgument<void>;
    onIonBlur$?: EventArgument<void>;
    onIonStyle$?: EventArgument<StyleEventDetail>;
  }
>;

export const IonSelect = component$(
  ({
    onIonBlur$,
    onIonCancel$,
    onIonChange$,
    onIonDismiss$,
    onIonFocus$,
    onIonStyle$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionCancel",
      $((evt: any) => onIonCancel$?.(evt)),
    );
    useOn(
      "ionChange",
      $((evt: any) => onIonChange$?.(evt)),
    );
    useOn(
      "ionDismiss",
      $((evt: any) => onIonDismiss$?.(evt)),
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
      <ion-select {...transferdProps}>
        <Slot />
      </ion-select>
    );
  },
);
