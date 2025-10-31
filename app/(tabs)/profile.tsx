import { COLORS } from '@/constants/theme';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// 아이콘 렌더링을 위한 헬퍼 함수
const renderIcon = (icon, type, highlight) => {
    const IconComponent = 
        type === 'Ionicons' ? Ionicons : 
        type === 'Feather' ? Feather : 
        AntDesign;

    return (
        <IconComponent 
            name={icon} 
            size={24} 
            color={highlight ? COLORS.primary : COLORS.darkGrey} 
        />
    );
};


// 메뉴 항목 렌더링 로직을 Profile 내부에서 직접 사용
const renderMenuItem = (name, icon, type, highlight, onPress) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} key={name}>
        <View style={styles.menuLeft}>
            {renderIcon(icon, type, highlight)}
            <Text style={[
                styles.menuText, 
                highlight && styles.highlightText
            ]}>
                {name}
            </Text>
        </View>
        <AntDesign name="right" size={16} color={COLORS.grey} />
    </TouchableOpacity>
);


export default function Profile() {
    const insets = useSafeAreaInsets();
    const isLoggedIn = false; 

    return (
        <ScrollView style={styles.container}>
            {/* 1. 상단 프로필 / 로그인 UX 영역 */}
            <View style={[styles.profileCard, {marginTop: insets.top + 20, marginHorizontal: 10}]}>
                <View style={styles.avatarPlaceholder}>
                    <Ionicons 
                        name="person-circle-outline" 
                        size={80} 
                        color={COLORS.grey} 
                    />
                </View>
                
                {/* 로그인이 안된 경우 */}
                {!isLoggedIn && (
                    <View style={styles.loginSection}>
                        <Text style={styles.welcomeText}>
                            로그인 필요
                        </Text>
                        <Text style={styles.subText}>
                            내 프로필을 관리하고 새로운 만남을 시작해보세요!
                        </Text>
                        <TouchableOpacity style={styles.loginButton} 
                                            onPress={() => console.log('로그인 화면으로 이동')}>
                            <Text style={styles.loginButtonText}>
                                로그인 하기
                            </Text>
                            <AntDesign name="arrow-right" size={18} color={COLORS.white} style={{marginLeft: 8}} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            
            {/* 2. 메뉴 목록 (모든 로직을 Profile 내부에서 직접 호출) */}
            <View style={styles.menuContainer}>
                {/* 앱 설정 */}
                {renderMenuItem(
                    "앱 설정",
                    "settings-outline",
                    "Ionicons",
                    false,
                    () => console.log('앱 설정 클릭')
                )}

                {/* 프리미엄 혜택 구독 (강조) */}
                {renderMenuItem(
                    "프리미엄 혜택 구독",
                    "star-outline",
                    "Ionicons",
                    true,
                    () => console.log('프리미엄 혜택 구독 클릭')
                )}

                {/* 매칭/신고 내역 */}
                {renderMenuItem(
                    "매칭/신고 내역",
                    "file-text-o",
                    "Feather",
                    false,
                    () => console.log('매칭/신고 내역 클릭')
                )}

                {/* 공지사항 */}
                {renderMenuItem(
                    "공지사항",
                    "megaphone-outline",
                    "Ionicons",
                    false,
                    () => console.log('공지사항 클릭')
                )}

                {/* 도움말/FAQ */}
                {renderMenuItem(
                    "도움말/FAQ",
                    "help-circle-outline",
                    "Ionicons",
                    false,
                    () => console.log('도움말/FAQ 클릭')
                )}

                {/* 로그인/회원가입 */}
                {renderMenuItem(
                    "로그인/회원가입",
                    "log-in-outline",
                    "Ionicons",
                    false,
                    () => console.log('로그인/회원가입 클릭')
                )}
            </View>

            {/* 3. 하단 버전 정보 및 회사 정보 */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>버전 1.0.0</Text>
                <Text style={styles.footerText}>© 2025 미팅하자. All rights reserved.</Text>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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