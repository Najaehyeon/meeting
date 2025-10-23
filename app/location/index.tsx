import { COLORS } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LOCATION_DATA = [
    {
        province: "전체",
        districts: ["모든 지역"]
    },
    {
        province: '서울',
        districts: ['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    },
    {
        province: '인천',
        districts: ['전체', '계양구', '미추홀구', '남동구', '동구', '부평구', '서구', '연수구', '중구', '강화군', '옹진군'],
    },
    {
        province: '경기',
        districts: ['전체', '수원시', '성남시', '고양시', '용인시', '부천시', '안산시', '안양시', '화성시', '평택시', '의정부시', '시흥시', '파주시', '광명시', '김포시', '군포시', '광주시', '이천시', '양주시', '오산시', '구리시', '안성시', '포천시', '의왕시', '하남시', '여주시', '동두천시', '과천시', '가평군', '양평군', '연천군'],
    },
    {
        province: '강원',
        districts: ['전체', '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
    },
    {
        province: '충북',
        districts: ['전체', '청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '진천군', '괴산군', '음성군', '단양군', '증평군'],
    },
    {
        province: '충남',
        districts: ['전체', '천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
    },
    {
        province: '대전',
        districts: ['전체', '대덕구', '동구', '서구', '유성구', '중구'],
    },
    {
        province: '세종',
        districts: ['전체'],
    },
    {
        province: '전북',
        districts: ['전체', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'],
    },
    {
        province: '전남',
        districts: ['전체', '목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
    },
    {
        province: '광주',
        districts: ['전체', '광산구', '남구', '동구', '북구', '서구'],
    },
    {
        province: '경북',
        districts: ['전체', '포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '영양군', '영덕군', '청송군', '울릉군'],
    },
    {
        province: '대구',
        districts: ['전체', '남구', '달서구', '동구', '북구', '서구', '수성구', '중구', '달성군', '군위군'],
    },
    {
        province: '울산',
        districts: ['전체', '남구', '동구', '북구', '중구', '울주군'],
    },
    {
        province: '경남',
        districts: ['전체', '창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'],
    },
    {
        province: '부산',
        districts: ['전체', '강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군'],
    },
    {
        province: '제주',
        districts: ['전체', '제주시', '서귀포시'],
    },
];

export default function Location() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const [selectedProvinceIndex, setselectedProvinceIndex] = useState(0);
    const [selectedDistricts, setSelectedDistricts] = useState([LOCATION_DATA[0].districts[0]]);

    const selectedProvince = LOCATION_DATA[selectedProvinceIndex];
    const districts = selectedProvince.districts;

    const selectDistrict = (districtName) => {
        if (districtName === '전체' || districtName === '모든 지역') {
            setSelectedDistricts([districtName]);
            return;
        }

        let newSelected = selectedDistricts.filter(
            (district) => district !== "전체" && district !== "모든 지역"
        );
        
        if (newSelected.includes(districtName)) {
            newSelected = newSelected.filter((district) => district !== districtName);
        } else {
            newSelected = [...newSelected, districtName];
        }

        if (newSelected.length === 0) {
            setSelectedDistricts([districts[0]]);
        } else {
            setSelectedDistricts(newSelected);
        }
    };

    const filterDistrict = (districtIndex) => {
        if (selectedDistricts[districtIndex] === "전체" || selectedDistricts[districtIndex] === "모든 지역") {
            return
        }
        else {
            if (selectedDistricts.length === 1) {
                setSelectedDistricts(["전체"]);
            }
            else {
                let newSelected = selectedDistricts.filter((district) => district !== selectedDistricts[districtIndex]);
                setSelectedDistricts(newSelected);
            }
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.container}>
                <View style={styles.province}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {LOCATION_DATA.map((item, index) => (
                            <TouchableOpacity
                                style={[
                                    styles.provinceList,
                                    selectedProvinceIndex === index && styles.provinceListSelected
                                ]}
                                key={index}
                                onPress={() => {
                                    setselectedProvinceIndex(index);
                                    setSelectedDistricts([item.districts[0]]);
                                }}
                            >
                                <Text style={[
                                    styles.provinceText,
                                    selectedProvinceIndex === index && styles.provinceTextSelected
                                ]}
                                >
                                    {item.province}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.district}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {districts.map((districtName, index) => (
                            <TouchableOpacity
                                style={[
                                    styles.districtList,
                                    selectedDistricts.includes(districtName) && styles.districtListSelected
                                ]}
                                key={index}
                                onPress={() => selectDistrict(districtName)}
                            >
                                <Text
                                    style={[
                                        styles.districtText,
                                        selectedDistricts.includes(districtName) && styles.districtTextSelected
                                    ]}
                                >
                                    {districtName}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={[styles.bottomButtonContainer, { paddingBottom: insets.bottom }]}>
                <View style={{flexDirection: "row"}}>
                {
                    selectedDistricts.map((districts, index)=> (
                        <TouchableOpacity
                            style={styles.selectedDistrictCard}
                            key={index}
                            onPress={() => {filterDistrict(index)}}
                        >
                            <Text style={{marginRight: 4}}>
                                {
                                    districts === "모든 지역"
                                        ? "모든 지역"
                                        : `${selectedProvince.province} ${districts}`
                                }
                            </Text>
                            <AntDesign name="close" />
                        </TouchableOpacity>
                    ))
                }
                </View>
                <TouchableOpacity
                    style={styles.completeButton}
                    onPress={() => {
                        const dataToSend = {
                            province: selectedProvince.province,
                            districts: selectedDistricts,
                        };
                        const districtsString = JSON.stringify(dataToSend.districts);

                        navigation.navigate('(tabs)', {
                            screen: 'index',
                            params: {
                                province: dataToSend.province,
                                districts: districtsString,
                            }
                        });
                    }}
                >
                    <Text
                        style={styles.completeButtonText}
                    >
                        선택 완료
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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