import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import ContextualNameList from "../components/ContextuaNameList";
import { useHistory } from "react-router";

const ListPage: React.FC = () => {
  const history = useHistory();

  const handleInsert = () => {
    history.push("/insert");
  };

  return (
    <IonPage id="list">
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Lista de Nomes</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleInsert}>
              <IonIcon icon={addCircle} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContextualNameList></ContextualNameList>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
