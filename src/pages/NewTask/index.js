import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';
import { FIREBASE_DB } from '../../config/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState(null);

    async function addTask() {
        const taskRef = await addDoc(collection(FIREBASE_DB, 'Tasks'), {
            description: description,
            status: false
        })
        navigation.navigate('Task');
    }
    /*
    function addTask() {
        FIREBASE_DB.collection('Tasks').add({
            description: description,
            status: false
        });
        navigation.navigate('Task');
    }
    */

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Estudar React Native'
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {addTask()}}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

