import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';
import { AntDesign } from '@expo/vector-icons';
// Colors
import { colors } from '../../config/theme';

import { FIREBASE_DB } from '../../config/firebaseconfig';
import { collection, doc, updateDoc } from 'firebase/firestore';

// Com o route conseguimos pegar os parametros de outra pagina (montando uma rota)
export default function Details({navigation, route}) {
    // Define Theme
    const theme = {mode: 'dark'};
    let activeColors = colors[theme.mode];

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    async function editTask(edit, id) {
        const db = collection(FIREBASE_DB, 'Tasks');
        await updateDoc(doc(db, id), {
            description: edit
        });
        navigation.navigate('Task');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Estudar React Native'
                placeholderTextColor={activeColors.tintSoft}
                color={activeColors.tint}
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {editTask(descriptionEdit, idTask)}}
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

