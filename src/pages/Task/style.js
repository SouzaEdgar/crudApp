import { StyleSheet } from "react-native";
// Colors
import { colors } from '../../config/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: activeColors.primary,
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
        //backgroundColor: activeColors.tertiary,
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginLeft: 20,
        //color: activeColors.tint,
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        //backgroundColor: activeColors.secondary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        //color: activeColors.primary,
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default styles;