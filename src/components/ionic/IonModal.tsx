import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import {
  IonSplitPaneCustomEvent,
  ModalBreakpointChangeEventDetail,
  OverlayEventDetail,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonSplitPaneCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonModalElement,
  {
    onIonModalDidPresent$?: EventArgument<void>;
    onIonModalWillPresent$?: EventArgument<void>;
    onIonModalWillDismiss$?: EventArgument<OverlayEventDetail>;
    onIonModalDidDismiss$?: EventArgument<OverlayEventDetail>;
    onIonBreakpointDidChange$?: EventArgument<ModalBreakpointChangeEventDetail>;
    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;
    onDidDismiss$?: EventArgument<OverlayEventDetail>;
    onIonMount$?: EventArgument<void>;
  }
>;

export const IonModal = component$(
  ({
    onIonBreakpointDidChange$,
    onIonModalDidDismiss$,
    onIonModalDidPresent$,
    onIonModalWillDismiss$,
    onIonModalWillPresent$,
    onIonMount$,
    onDidDismiss$,
    onDidPresent$,
    onWillDismiss$,
    onWillPresent$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBreakpointDidChange",
      $((evt: any) => onIonBreakpointDidChange$?.(evt)),
    );
    useOn(
      "ionModalDidDismiss",
      $((evt: any) => onIonModalDidDismiss$?.(evt)),
    );
    useOn(
      "ionModalDidPresent",
      $((evt: any) => onIonModalDidPresent$?.(evt)),
    );
    useOn(
      "ionModalWillDismiss",
      $((evt: any) => onIonModalWillDismiss$?.(evt)),
    );
    useOn(
      "ionModalWillPresent",
      $((evt: any) => onIonModalWillPresent$?.(evt)),
    );
    useOn(
      "ionMount",
      $((evt: any) => onIonMount$?.(evt)),
    );
    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );
    useOn(
      "didPresent",
      $((evt: any) => onDidPresent$?.(evt)),
    );
    useOn(
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "willPresent",
      $((evt: any) => onWillPresent$?.(evt)),
    );

    return (
      <ion-modal {...transferdProps}>
        <Slot />
      </ion-modal>
    );
  },
);
