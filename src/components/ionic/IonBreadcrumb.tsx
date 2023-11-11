import type { QRL } from "@builder.io/qwik";
import { Slot, component$, useOn, $ } from "@builder.io/qwik";
import { transform, type ElementProps } from "./common";
import {
  BreadcrumbCollapsedClickEventDetail,
  IonBreadcrumbCustomEvent,
} from "@ionic/core";

type EventArgument<T> = QRL<(evt: IonBreadcrumbCustomEvent<T>) => any>;
export type Props = ElementProps<
  HTMLIonBreadcrumbElement,
  {
    onIonBlur$?: EventArgument<void>;
    onIonFocus$?: EventArgument<void>;
    onCollapsedClick?: EventArgument<BreadcrumbCollapsedClickEventDetail>;
  }
>;

export const IonBreadcrumb = component$(
  ({ onIonBlur$, onIonFocus$, onCollapsedClick, ...props }: Props) => {
    const transferdProps = transform(props);

    useOn(
      "ionBlur",
      $((evt: any) => onIonBlur$?.(evt)),
    );
    useOn(
      "ionFocus",
      $((evt: any) => onIonFocus$?.(evt)),
    );
    useOn(
      "collapsedClick",
      $((evt: any) => onCollapsedClick?.(evt)),
    );

    return (
      <ion-breadcrumb {...transferdProps}>
        <Slot />
      </ion-breadcrumb>
    );
  },
);
