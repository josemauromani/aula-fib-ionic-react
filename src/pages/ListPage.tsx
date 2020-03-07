import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react'
import ContextualNameList from '../components/ContextuaNameList'
import { useHistory } from 'react-router'

const ListPage: React.FC = () => {
    const history = useHistory()
    const handleInsert = () => {
        history.push('/add')
    }
    return (
         <IonPage id="List">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lista de Nomes</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleInsert}>
                            <IonIcon></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameList />
            </IonContent>
        </IonPage>
    )
}

export default ListPage