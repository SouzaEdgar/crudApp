import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    Tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    deleteTask: {
        justifyContent: 'center',
        paddingRight: 25
    },
    DescriptionTask: {
        width: '80%',
        alignContent: 'flex-start',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 20,
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
    iconButton: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default styles;