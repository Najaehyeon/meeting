import { COLORS } from '@/constants/theme';
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Post() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.thumbnail}
                >
                    <Entypo name="camera" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.titleGroup}>
                    <Text style={styles.title}>제목</Text>
                    <TextInput
                        style={styles.titleInput}
                        placeholder="제목을 입력하세요."
                    />
                </View>
                <View>
                    <Text style={styles.content}>설명</Text>
                    <TextInput
                        style={styles.contentInput}
                        placeholder="설명을 입력하세요."
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: COLORS.background,
    },
    thumbnail: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 24,
    },
    titleGroup: {
        marginBottom: 24,
    },
    title: {
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
    },
    content: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    contentInput: {
        width: "100%",
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        textAlignVertical: "top",
    }
});
