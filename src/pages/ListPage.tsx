import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import ContextualNameList from '../components/ContextuaNameList'

const ListPage: React.FC = () => {
    return (
         <IonPage id="List">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lista de Nomes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameList />
            </IonContent>
        </IonPage>
    )
}

export default ListPage