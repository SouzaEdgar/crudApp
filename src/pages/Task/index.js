import React, { useState, useEffect, cloneElement } from 'react';
import { 
    SafeAreaView, 
    View, 
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

//import database from '../../config/firebaseconfig';
import styles from './style';
import { FIREBASE_DB } from '../../config/firebaseconfig';
import { 
    collection, 
    doc, 
    setDoc, 
    onSnapshot, 
    Firestore,
    deleteDoc
} from "firebase/firestore"; 

// Use State
//  Sempre que carregar a pagina

export default function Task() {
    const [tasks, setTasks] = useState([]);


    function deleteTask(id) {
        const db = collection(FIREBASE_DB, 'Tasks');
        deleteDoc(doc(db, id))
    }

    useEffect(() => {
        const database = collection(FIREBASE_DB, 'Tasks');

        const inserido = onSnapshot(database, {
            next: (snapshot) => {
                const tasks = [];
                snapshot.docs.forEach((doc) => {
                    tasks.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
                setTasks(tasks);
            },
        });
        return () => inserido();
    }, []);
/*
    function deleteTask(id) {
        database.collection('Tasks').doc(id).delete();
    }

    useEffect(() => {
        database.collection('Tasks').onSnapshot((query)=>{
            const list = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        })
    }, []);
*/
    return (
        <View>
            <Text>Page Tasks</Text>
        </View>
    )
}

