import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        top: 150,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 0,
        height: 600,
        borderRadius: 15,
        backgroundColor: "rgba(0,0,0,0)",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    info: {
        flex: 0,
        position: "relative",
        top: 28,
        height: 130,
        width: 320,
        backgroundColor: "#000"
    },
    image: {
        flex: 0.3,
        position: "relative",
        bottom: 100,
        justifyContent: "center",
        marginBottom: -130,
        width: 320,
        height: 500,
    },
    title: {
        fontWeight: "800",
        fontSize: 35,
        marginTop: 20,
        marginBottom: 5,
        color: "#493d8a",
        textAlign: "center",
    },
    description: {
        fontWeight: "300",
        fontSize: 20,
        color: "#62656b",
        textAlign: "center",
        paddingHorizontal: 64,
    }
})