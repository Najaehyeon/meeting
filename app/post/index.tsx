import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/post.styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Post() {
    const insets = useSafeAreaInsets();
    const [selectedImage, setSelectedImage] = useState(null);
    const [headcounts, setHeadcounts] = useState(1);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const formatDate = (rawDate) => {
        const d = new Date(rawDate);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const dayName = days[d.getDay()];
        return `${year}-${month}-${day} (${dayName})`;
    };

    const formatTime = (rawDate) => {
        const d = new Date(rawDate);
        return d.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if ( status !== 'granted') {
            alert('사진 라이브러리 접근 권한이 필요합니다!');
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setSelectedImage(result.assets[0].uri);
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "white"}}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
                    <View style={styles.container}>
                        <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <TouchableOpacity
                                style={[styles.thumbnail, selectedImage && {padding: 0}]}
                                activeOpacity={0.6}
                                onPress={pickImage}
                            >
                                {
                                    selectedImage ? (
                                        <Image
                                            source={{ uri: selectedImage }}
                                            style={styles.thumbnail}
                                        />
                                    ) : (
                                        <Entypo name="camera" size={24} color="black" />
                                    )
                                }
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
                                    <TouchableOpacity
                                        onPress={showDatepicker}
                                    >
                                        <Text style={styles.timeSetText}>{formatDate(date)}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={showTimepicker}
                                    >
                                        <Text style={styles.timeSetText}>{formatTime(date)}</Text>
                                        {show && (
                                            <DateTimePicker
                                                testID="dateTimePicker"
                                                value={date}
                                                mode={mode}
                                                is24Hour={false}
                                                onChange={onChange}
                                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            />
                                        )}
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
                                    <Text style={{fontSize: 20, marginRight: 8}}>남 {headcounts}명 | 여 {headcounts}명</Text>
                                    <TouchableOpacity
                                        style={{marginRight: 8}}
                                        onPress={() => {headcounts !== 1 ? setHeadcounts(headcounts - 1) : null}}
                                    >
                                        <FontAwesome name='angle-down' size={28}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {headcounts === 10 ? null : setHeadcounts(headcounts + 1)}}
                                    >
                                        <FontAwesome name='angle-up' size={28}/>
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
        </KeyboardAvoidingView>
    )
}