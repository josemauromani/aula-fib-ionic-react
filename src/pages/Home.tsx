import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from "@ionic/react";
import React from "react";
import ContextualNameSetter from "../components/ContextualNameSetter";
import ContextualNameList from "../components/ContextuaNameList";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ContextualNameSetter
          initialValue="Meu nome é"
          placeholder="Seu nome"
          buttonTitle="Definir seu nome"
        />
        <ContextualNameList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
