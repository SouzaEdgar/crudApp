import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';
import { AntDesign } from '@expo/vector-icons';
// Colors
import { colors } from '../../config/theme';

import { FIREBASE_DB } from '../../config/firebaseconfig';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
// Import Context Theme
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export default function NewTask({ navigation }) {
    // Define Theme
    const {theme} = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const [description, setDescription] = useState(null);

    // Adicionar documento com ID manual
    async function addTaskManual() {
        const db = collection(FIREBASE_DB, 'Tasks');
        const taskRef = doc(db, '0');
        await setDoc(taskRef, {
            description: description,
            status: false
        });
        navigation.navigate('Task');
    }
    // Adicionar documento com ID gerado automaticamente
    async function addTask() {
        const taskRef = collection(FIREBASE_DB, 'Tasks');
        await addDoc(taskRef, {
            description: description,
            status: false
        })
        navigation.navigate('Task');
    }

    return (
        <View style={[{
            backgroundColor: activeColors.primary,
        }, styles.container]}>
            <Text style={[{
                color: activeColors.secondary,
            },styles.label]}>Description</Text>
            <TextInput
                style={[{
                    borderBottomColor: activeColors.secondary,
                    color: activeColors.tint,
                },styles.input]}
                placeholder='Ex: Estudar React Native'
                placeholderTextColor={activeColors.tintSoft}
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={[{
                    backgroundColor: activeColors.secondary,
                },styles.buttonNewTask]}
                onPress={() => {addTask()}}
            >
                <AntDesign
                    name='check'
                    color={activeColors.primary}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}

