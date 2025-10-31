import { COLORS } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    // 1. 상단 프로필 카드 스타일
    profileCard: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: COLORS.darkGrey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    avatarPlaceholder: {
        marginBottom: 10,
    },
    loginSection: {
        alignItems: 'center',
        width: '100%',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.darkGrey,
        marginBottom: 4,
    },
    subText: {
        fontSize: 14,
        color: COLORS.grey,
        textAlign: 'center',
        marginBottom: 15,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 10,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    loginButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
    
    // 2. 메뉴 컨테이너 스타일
    menuContainer: {
        backgroundColor: COLORS.white,
        marginHorizontal: 10,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: COLORS.darkGrey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.background,
    },
    menuLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 16,
        color: COLORS.darkGrey,
        marginLeft: 15,
    },
    highlightText: {
        fontWeight: '700',
        color: COLORS.primary,
    },

    // 3. 푸터 스타일
    footer: {
        alignItems: 'center',
        padding: 20,
    },
    footerText: {
        fontSize: 12,
        color: COLORS.grey,
        marginTop: 5,
    }
});