import React, { useState, useEffect } from 'react';
import {  
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { FIREBASE_DB } from '../../config/firebaseconfig';
import { 
    collection,
    doc,
    onSnapshot,
    deleteDoc,
    getDocs
} from "firebase/firestore"; 
// Import Colors
import { colors } from '../../config/theme';
// Import Context Theme
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';


export default function Task({navigation}) {
    // Define Theme
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    //console.log(theme.mode)

    // Tentativa de Leitura #2
    //      retorna uma lista (dos itens)
    async function getTasks() {
        const tasksCol = collection(FIREBASE_DB, 'Tasks');
        const tasksSnapshot = await getDocs(tasksCol);
        const tasksList = tasksSnapshot.docs.map(doc => doc.data());
        return tasksList;
    }

    // Funcional
    function deleteTask(id) {
        const taskRef = collection(FIREBASE_DB, 'Tasks');
        deleteDoc(doc(taskRef, id));
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
        <View style={[{
            backgroundColor: activeColors.primary
        },styles.container]}>
            <FlatList
                // Esconder a barra vertical da list
                showsVerticalScrollIndicator={false}
                data={tasks}
                // Como o data esta obtendo as tasks, ao renderizar um item
                //  é obtido uma task por vez, dessa forma ao pegar item.id
                //  você consegue o id relativo ao item propriamente dito
                renderItem={({item}) => {
                    return (
                        <View style={styles.Tasks}>
                            <Text
                                style={[{
                                    backgroundColor: activeColors.tertiary,
                                    color: activeColors.tint,
                                },styles.DescriptionTask]}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        id: item.id,
                                        description: item.description
                                    })
                                }}
                            >
                                {item.description}
                            </Text>
                            <TouchableOpacity 
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name='trash'
                                    size={23}
                                    color= {activeColors.secondary}
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <TouchableOpacity 
                style={[{
                    backgroundColor: activeColors.secondary,
                },styles.buttonNewTask]}
                onPress={() => navigation.navigate('NewTask')}
            >
                <Text style={[{
                    color: activeColors.primary
                },styles.iconButton]}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
