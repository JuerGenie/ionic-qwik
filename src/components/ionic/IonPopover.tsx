import type { QRL } from "@builder.io/qwik";
import { $, Slot, component$, useOn } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import type { IonPopoverCustomEvent, OverlayEventDetail } from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonPopoverCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonPopoverElement,
  {
    onIonPopoverDidPresent$?: EventArgument<void>;
    onIonPopoverWillPresent$?: EventArgument<void>;
    onIonPopoverWillDismiss$?: EventArgument<OverlayEventDetail>;
    onIonPopoverDidDismiss$?: EventArgument<OverlayEventDetail>;
    onDidPresent$?: EventArgument<void>;
    onWillPresent$?: EventArgument<void>;
    onWillDismiss$?: EventArgument<OverlayEventDetail>;
    onDidDismiss$?: EventArgument<OverlayEventDetail>;
    onIonMount$?: EventArgument<void>;
  }
>;

export const IonPopover = component$(
  ({
    onIonPopoverDidPresent$,
    onIonPopoverWillPresent$,
    onIonPopoverWillDismiss$,
    onIonPopoverDidDismiss$,
    onDidPresent$,
    onWillPresent$,
    onWillDismiss$,
    onDidDismiss$,
    onIonMount$,
    ...props
  }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionPopoverDidPresent",
      $((evt: any) => onIonPopoverDidPresent$?.(evt)),
    );
    useOn(
      "ionPopoverWillPresent",
      $((evt: any) => onIonPopoverWillPresent$?.(evt)),
    );
    useOn(
      "ionPopoverWillDismiss",
      $((evt: any) => onIonPopoverWillDismiss$?.(evt)),
    );
    useOn(
      "ionPopoverDidDismiss",
      $((evt: any) => onIonPopoverDidDismiss$?.(evt)),
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
      "willDismiss",
      $((evt: any) => onWillDismiss$?.(evt)),
    );
    useOn(
      "didDismiss",
      $((evt: any) => onDidDismiss$?.(evt)),
    );
    useOn(
      "ionMount",
      $((evt: any) => onIonMount$?.(evt)),
    );

    return (
      <ion-popover {...transferdProps}>
        <Slot />
      </ion-popover>
    );
  },
);
