import { StyleSheet } from "react-native";
import { colors } from "../../config/theme";
// Define Theme
const theme = {mode: 'dark'};
let activeColors = colors[theme.mode];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: activeColors.primary,
    },
    label: {
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: activeColors.secondary,
    },
    input: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: activeColors.secondary,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: activeColors.secondary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        color: activeColors.primary,
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default styles;