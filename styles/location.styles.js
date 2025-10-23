import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white, // 배경색을 흰색으로 변경
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    provinceListContainer: {
        flex: 1, // 시/도 목록 1/3 너비
        backgroundColor: COLORS.background, // 시/도 목록 배경색 (연한 회색)
    },
    districtListContainer: {
        flex: 2, // 시/군/구 목록 2/3 너비
        backgroundColor: COLORS.white,
    },
    regionItem: {
        paddingVertical: 18,
        paddingHorizontal: 16,
        // 시/군/구 목록에는 구분선 추가
        borderBottomWidth: 0,
    },
    selectedRegionItem: {
        backgroundColor: COLORS.white, // 선택된 시/도의 배경색은 시/군/구 배경색과 동일하게
        // 오른쪽에 구분선 추가하여 선택된 느낌 강조
        borderLeftWidth: 3, 
        borderLeftColor: COLORS.primary, // 강조색
        paddingLeft: 13, // border width 때문에 패딩 조정
    },
    regionText: {
        fontSize: 15,
        color: COLORS.text,
    },
    selectedRegionText: {
        fontWeight: 'bold',
        color: COLORS.primary, // 선택된 텍스트 색상
    },
    placeholderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 15,
        color: COLORS.gray,
    },
    selectedDistrictsTagContainer: {
        height: 50, // 적절한 높이 설정
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white, // 배경색
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightgray,
    },
    tagScrollContent: {
        alignItems: 'center',
    },
    districtTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightgray, // 카드 배경색
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 8,
        borderWidth: 1,
        borderColor: COLORS.mediumgray,
    },
    districtTagText: {
        fontSize: 14,
        color: COLORS.darkgray,
        marginRight: 4,
    },
    closeIcon: {
        marginLeft: 4,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: COLORS.white, // 바닥 배경
        // 그림자 효과 (iOS)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        // 그림자 효과 (Android)
        elevation: 10,
    },
    confirmButton: {
        width: '100%',
        height: 56, // 높이 증가 (터치 영역 확보)
        borderRadius: 12, // 둥근 모서리
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // safe area inset과 버튼 사이 여백
    },
    confirmButtonActive: {
        backgroundColor: COLORS.primary, // 활성 상태
    },
    confirmButtonInactive: {
        backgroundColor: COLORS.mediumgray, // 비활성 상태 (선택된 시/도가 없거나 구/군이 없는 경우)
    },
    confirmButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
})