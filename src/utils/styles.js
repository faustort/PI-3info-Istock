import { StyleSheet } from "react-native";

const defaultMargin = 10;
const defaultPadding = 10;
const defaultBorderRadius = 20;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: defaultPadding
    },
    containerInner:
    {
        flex: 1,
        alignSelf: 'stretch',
        border: "1px solid #000",
    },
    containerCenter: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    surface: {
        flexDirection: "row",
        padding: defaultPadding,
        borderRadius: defaultBorderRadius,
    },
    surfaceTouch: {
        borderRadius: defaultBorderRadius,
        marginHorizontal: defaultMargin,
        marginTop: defaultMargin,
    },
    surfaceInnerLeft: {
        flex: 0.3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 78,
        paddingRight: defaultPadding
    },
    surfaceInnerRight: {
        flex: 0.7,
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "flex-start",
    },
});