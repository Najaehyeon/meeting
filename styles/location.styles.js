import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.background,
    },
    province: {
        flex: 1,
        backgroundColor: COLORS.background,
        borderRightColor: COLORS.grey,
        borderRightWidth: 0.2,
    },
    district: {
        flex: 2,
        backgroundColor: COLORS.white
    },
    provinceList: {
        height: 50,
        justifyContent: "center",
    },
    provinceListSelected: {
        backgroundColor: COLORS.white,
        borderLeftColor: COLORS.primary,
        borderLeftWidth: 3,
    },
    provinceText: {
        marginLeft: 10,
        fontSize: 16,
    },
    provinceTextSelected: {
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    districtList: {
        height: 50,
        justifyContent: "center",
    },
    districtListSelected: {
        backgroundColor: COLORS.background, // 선택된 시/군/구는 약간 다른 배경색
    },
    districtText: {
        marginLeft: 10,
        fontSize: 16,
    },
    districtTextSelected: {
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    bottomButtonContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
        backgroundColor: COLORS.white, // 배경색을 흰색으로 설정하여 하단에 붙어 보이도록
        borderTopWidth: 0.2,
        borderTopColor: COLORS.grey, // 상단 경계선 추가
    },
    selectedDistrictCard: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    completeButton: {
        backgroundColor: COLORS.primary, // 버튼 배경색
        height: 50,
        borderRadius: 8, // 모서리 둥글게
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // 하단 여백
    },
    completeButtonText: {
        color: COLORS.white, // 텍스트 색상
        fontSize: 18,
        fontWeight: 'bold',
    },
})