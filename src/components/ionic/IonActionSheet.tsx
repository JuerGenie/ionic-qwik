import type { QRL } from "@builder.io/qwik";
import {
  component$,
  useOn,
  $,
  useSignal,
  useVisibleTask$,
  Slot,
} from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type {
  IonActionSheetCustomEvent,
  OverlayEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonActionSheetCustomEvent<T>) => any>;
export type Props = ElementProps<
  Omit<HTMLIonActionSheetElement, "buttons">,
  {
    buttons$?: QRL<() => HTMLIonActionSheetElement["buttons"]>;

    onDidDismiss$?: EventArgument<OverlayEventDetail>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;

    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;

    onIonActionSheetDidDismiss$?: EventArgument<OverlayEventDetail>;
    onIonActionSheetWillDismiss$?: EventArgument<OverlayEventDetail>;

    onIonActionSheetDidPresent$?: EventArgument<void>;
    onIonActionSheetWillPresent$?: EventArgument<void>;
  }
>;

export const IonActionSheet = component$(
  ({
    onDidDismiss$,
    onWillDismiss$,
    onDidPresent$,
    onWillPresent$,
    onIonActionSheetDidDismiss$,
    onIonActionSheetDidPresent$,
    onIonActionSheetWillDismiss$,
    onIonActionSheetWillPresent$,
    buttons$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );
    useOn(
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "didPresent",
      $((evt: any) => onDidPresent$?.(evt)),
    );
    useOn(
      "willPresent",
      $((evt: any) => onWillPresent$?.(evt)),
    );
    useOn(
      "ionActionSheetDidDismiss",
      $((evt: any) => onIonActionSheetDidDismiss$?.(evt)),
    );
    useOn(
      "ionActionSheetWillDismiss",
      $((evt: any) => onIonActionSheetWillDismiss$?.(evt)),
    );
    useOn(
      "ionActionSheetDidPresent",
      $((evt: any) => onIonActionSheetDidPresent$?.(evt)),
    );
    useOn(
      "ionActionSheetWillPresent",
      $((evt: any) => onIonActionSheetWillPresent$?.(evt)),
    );

    const ref = useSignal<HTMLIonActionSheetElement>();
    useVisibleTask$(async () => {
      if (ref.value) {
        if (buttons$) {
          ref.value.buttons = (await buttons$()) ?? [];
        }
      }
    });

    return (
      <ion-action-sheet ref={ref} {...transferdProps}>
        <Slot />
      </ion-action-sheet>
    );
  },
);
