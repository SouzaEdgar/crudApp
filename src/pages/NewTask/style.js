import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
    },
    input: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;
