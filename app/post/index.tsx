import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/post.styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Post() {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "white"}}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                    <View style={styles.container}>
                        <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <TouchableOpacity
                                style={styles.thumbnail}
                                activeOpacity={0.6}
                            >
                                <Entypo name="camera" size={24} color="black" />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>제목</Text>
                                <TextInput
                                    style={styles.titleInput}
                                    placeholder="제목을 입력하세요."
                                />
                            </View>
                            <View>
                                <Text style={styles.title}>설명</Text>
                                <TextInput
                                    style={styles.contentInput}
                                    placeholder="설명을 입력하세요."
                                />
                            </View>
                            <View>
                                <Text style={styles.title}>시간</Text>
                                <View style={styles.timeSetGroup}>
                                    <TouchableOpacity>
                                        <Text style={styles.timeSetText}>2025-12-25 (목)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.timeSetText}>8:00 PM</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.title}>장소</Text>
                                <View style={styles.locationSetGroup}>
                                    <View style={styles.locationSetColumn}>
                                        <Text style={{fontSize: 16, marginBottom: 4}}>지역</Text>
                                        <TouchableOpacity
                                            style={styles.locationInput}
                                        >
                                            <Text style={{fontSize: 12, color: COLORS.grey}}>지역을 선택해주세요</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.locationDetailSetColumn}>
                                        <Text style={{fontSize: 16, marginBottom: 4}}>상세 지역 </Text>
                                        <TextInput
                                            style={styles.locationDetailInput}
                                            placeholder='상세 지역을 작성해주세요'
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={styles.title}>인원</Text>
                                <View style={{marginTop: 24, flexDirection: "row"}}>
                                    <Text style={{fontSize: 20, marginRight: 8}}>남 4명 | 여 4명</Text>
                                    <TouchableOpacity>
                                        <FontAwesome name='angle-down' size={28}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.title}>나이</Text>
                                <View style={styles.ageSetGroup}>
                                    <View style={styles.ageSetColumn}>
                                        <Text style={{fontSize: 16, marginBottom: 4}}>최소 나이 생년</Text>
                                        <TextInput
                                            style={styles.minAgeInput}
                                            placeholder='ex) 2005'
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={styles.ageSetColumn}>
                                        <Text style={{fontSize: 16, marginBottom: 4}}>최대 나이 생년</Text>
                                        <TextInput
                                            style={styles.maxAgeInput}
                                            placeholder='ex) 2000'
                                        >
                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                <View style={[styles.bottomButtonContainer, { paddingBottom: insets.bottom }]}>
                    <TouchableOpacity
                        style={styles.postButton}
                    >
                        <Text style={styles.postText}>게시하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

