import { component$, useStyles$ } from "@builder.io/qwik";
import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "../../../components/ionic";
import styles from "./index.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <IonApp class="tabbar-application">
      <IonTabs>
        <IonTab tab="home">
          <div id="home-page">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Listen Now</IonTitle>
              </IonToolbar>
            </IonHeader>

            <IonContent>
              <IonCard class="example-content">
                <IonCardContent>Listen now content</IonCardContent>
              </IonCard>

              <IonCard>
                <IonCardContent>
                  <IonItem>
                    <IonInput label="Default Input" placeholder="Enter text" />
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Fixed Input"
                      label-placement="fixed"
                      placeholder="Enter text"
                    />
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Stacked Input"
                      label-placement="stacked"
                      placeholder="Enter text"
                    />
                  </IonItem>

                  <IonItem>
                    <IonInput
                      label="Floating Input"
                      label-placement="floating"
                      placeholder="Enter text"
                    />
                  </IonItem>

                  <IonItem>
                    <IonSelect label="Select" placeholder="Make a Selection">
                      <IonSelectOption value="">
                        No Game Console
                      </IonSelectOption>
                      <IonSelectOption value="nes">NES</IonSelectOption>
                      <IonSelectOption value="n64">Nintendo64</IonSelectOption>
                      <IonSelectOption value="ps">PlayStation</IonSelectOption>
                      <IonSelectOption value="genesis">
                        Sega Genesis
                      </IonSelectOption>
                      <IonSelectOption value="saturn">
                        Sega Saturn
                      </IonSelectOption>
                      <IonSelectOption value="snes">SNES</IonSelectOption>
                    </IonSelect>
                  </IonItem>

                  <IonItem>
                    <IonToggle>
                      <div>Toggle</div>
                    </IonToggle>
                  </IonItem>

                  <IonItem>
                    <IonCheckbox>
                      <div>Checkbox</div>
                    </IonCheckbox>
                  </IonItem>

                  <IonItem>
                    <IonRange label-placement="start">
                      <div slot="label">Range</div>
                    </IonRange>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonContent>
          </div>
        </IonTab>
        <IonTab tab="radio">
          <div id="radio-page">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Radio</IonTitle>
              </IonToolbar>
            </IonHeader>

            <IonContent>
              <IonCard class="example-content">
                <IonCardContent>Radio content</IonCardContent>
              </IonCard>

              <IonList inset>
                <IonItem button>
                  <IonIcon
                    color="danger"
                    slot="start"
                    name="list-circle"
                    size="large"
                  />
                  <IonLabel>General</IonLabel>
                  <IonNote slot="end">6</IonNote>
                </IonItem>
                <IonItem button>
                  <IonIcon
                    color="tertiary"
                    slot="start"
                    name="list-circle"
                    size="large"
                  />
                  <IonLabel>Shopping</IonLabel>
                  <IonNote slot="end">15</IonNote>
                </IonItem>
                <IonItem button>
                  <IonIcon
                    color="success"
                    slot="start"
                    name="list-circle"
                    size="large"
                  />
                  <IonLabel>Cleaning</IonLabel>
                  <IonNote slot="end">3</IonNote>
                </IonItem>
                <IonItem button>
                  <IonIcon
                    color="warning"
                    slot="start"
                    name="list-circle"
                    size="large"
                  />
                  <IonLabel>Reminders</IonLabel>
                  <IonNote slot="end">8</IonNote>
                </IonItem>
              </IonList>

              <IonList inset>
                <IonItem button detail={false}>
                  <div class="unread-indicator-wrapper" slot="start">
                    <div class="unread-indicator"></div>
                  </div>
                  <IonLabel>
                    <strong>Rick Astley</strong>
                    <IonText>Never Gonna Give You Up</IonText>
                    <br />
                    <IonNote color="medium" class="ion-text-wrap">
                      Never gonna give you up Never gonna let you down Never
                      gonna run...
                    </IonNote>
                  </IonLabel>
                  <div class="metadata-end-wrapper" slot="end">
                    <IonNote color="medium">06:11</IonNote>
                    <IonIcon color="medium" name="chevron-forward"></IonIcon>
                  </div>
                </IonItem>
                <IonItem button detail={false}>
                  <div class="unread-indicator-wrapper" slot="start"></div>
                  <IonLabel>
                    <strong>Ionitron</strong>
                    <IonText>I have become sentient</IonText>
                    <br />
                    <IonNote color="medium" class="ion-text-wrap">
                      That is all.
                    </IonNote>
                  </IonLabel>
                  <div class="metadata-end-wrapper" slot="end">
                    <IonNote color="medium">03:44</IonNote>
                    <IonIcon color="medium" name="chevron-forward"></IonIcon>
                  </div>
                </IonItem>
                <IonItem button detail={false}>
                  <div class="unread-indicator-wrapper" slot="start">
                    <div class="unread-indicator"></div>
                  </div>
                  <IonLabel>
                    <strong>Steam</strong>
                    <IonText>Game Store Sale</IonText>
                    <br />
                    <IonNote color="medium" class="ion-text-wrap">
                      That game you added to your wish list 2 years ago is now
                      on sale!
                    </IonNote>
                  </IonLabel>
                  <div class="metadata-end-wrapper" slot="end">
                    <IonNote color="medium">Yesterday</IonNote>
                    <IonIcon color="medium" name="chevron-forward"></IonIcon>
                  </div>
                </IonItem>
                <IonItem button detail={false}>
                  <div class="unread-indicator-wrapper" slot="start"></div>
                  <IonLabel>
                    <strong>Ionic</strong>
                    <IonText>Announcing Ionic 7.0</IonText>
                    <br />
                    <IonNote color="medium" class="ion-text-wrap">
                      This version is one more than Ionic 6!
                    </IonNote>
                  </IonLabel>
                  <div class="metadata-end-wrapper" slot="end">
                    <IonNote color="medium">Yesterday</IonNote>
                    <IonIcon color="medium" name="chevron-forward"></IonIcon>
                  </div>
                </IonItem>
              </IonList>
            </IonContent>
          </div>
        </IonTab>
        <IonTab tab="library">
          <div id="library-page">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Library</IonTitle>
              </IonToolbar>
            </IonHeader>

            <IonContent>
              <IonCard class="example-content">
                <IonCardContent>Library content</IonCardContent>
              </IonCard>
            </IonContent>
          </div>
        </IonTab>
        <IonTab tab="search">
          <div id="search-page">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Search</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonCard class="example-content">
                <IonCardContent>Search content</IonCardContent>
              </IonCard>
            </IonContent>
          </div>
        </IonTab>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home">
            <IonIcon name="play-circle"></IonIcon>
            Listen Now
          </IonTabButton>
          <IonTabButton tab="radio">
            <IonIcon name="radio"></IonIcon>
            Radio
          </IonTabButton>
          <IonTabButton tab="library">
            <IonIcon name="library"></IonIcon>
            Library
          </IonTabButton>
          <IonTabButton tab="search">
            <IonIcon name="search"></IonIcon>
            Search
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonApp>
  );
});
