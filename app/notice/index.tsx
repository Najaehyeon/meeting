import { COLORS } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Notice() {
    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}>알림이 없습니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: 'center',
    },
    defaultText: {
        fontSize: 16,
        bottom: "10%",
    }
})