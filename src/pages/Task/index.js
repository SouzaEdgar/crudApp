import React, { useState, useEffect, cloneElement } from 'react';
import { 
    SafeAreaView, 
    View, 
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import styles from './style';
import { FontAwesome } from '@expo/vector-icons';

import { FIREBASE_DB } from '../../config/firebaseconfig';
import { 
    collection, 
    doc, 
    setDoc, 
    onSnapshot, 
    Firestore,
    deleteDoc,
    getDocs
} from "firebase/firestore"; 

export default function Task({navigation}) {

    // Tentativa de Leitura #2
    //      retorna uma lista (dos itens)
    async function getTasks() {
        // db = FIREBASE_DB
        const tasksCol = collection(FIREBASE_DB, 'Tasks');
        const tasksSnapshot = await getDocs(tasksCol);
        const tasksList = tasksSnapshot.docs.map(doc => doc.data());

        return tasksList;
    }

    function deleteTask(id) {
        const taskRef = collection(FIREBASE_DB, 'Tasks');
        deleteDoc(doc(taskRef, 'Tasks', id));
    }

    // Tentativa de Leitura #1
    //   Utilizado na video aula, porem de forma atualizada
    const [tasks, setTasks] = useState([]);

    // useEffect, toda vez que for renderizado o componente Task (index.js)
    //  ocorre esta chamada, então sempre vai estar atualizado
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
                // Apos ser adicionado os valores ao array
                //  é setado nos tasks
                setTasks(tasks);
            },
        });
        return () => inserido();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                // Esconder a barra vertical da list
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity 
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name='star'
                                    size={23}
                                    color='#F92e6a'
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.DescriptionTask}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description
                                    })
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate('NewTask')}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

