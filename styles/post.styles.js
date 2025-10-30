import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: COLORS.background,
    },
    thumbnail: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    },
    title: {
        marginTop: 24,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    titleInput: {
        width: "100%",
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    contentInput: {
        width: "100%",
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        textAlignVertical: "top",
        backgroundColor: "white",
    },
    timeSetGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    timeSetText: {
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    locationSetGroup: {
        flex: 1,
        flexDirection: "row",
    },
    locationSetColumn: {
        flex: 4,
    },
    locationDetailSetColumn: {
        flex: 5,
    },
    locationInput: {
        justifyContent: "center",
        width: "90%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    locationDetailInput: {
        width: "100%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 12,
        backgroundColor: "white",
        fontSize: 12,
    },
    ageSetGroup: {
        flex: 1,
        flexDirection: "row",
    },
    ageSetColumn: {
        flex: 1,
    },
    minAgeInput: {
        justifyContent: "center",
        width: "90%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    maxAgeInput: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    bottomButtonContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: COLORS.white,
    },
    postButton: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    postText: {
        color: COLORS.white, // 텍스트 색상
        fontSize: 18,
        fontWeight: 'bold',
    }
});
