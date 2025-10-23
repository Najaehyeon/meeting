import { COLORS } from '@/constants/theme';
import { styles } from '@/styles/home.styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { createClient } from '@supabase/supabase-js';
import { Checkbox } from 'expo-checkbox';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const generateDates = () => {
  const datesArray = [];
  const today = new Date();
  
  for (let i = 0; i < 21; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    date.setHours(0, 0, 0, 0);

    const dayIndex = date.getDay();
    const dateNumber = date.getDate();

    datesArray.push({
      day: DAYS_OF_WEEK[dayIndex],
      date: dateNumber,
      isToday: i === 0,
      fullDate: date.toISOString(),
    });
  }
  return datesArray;
};

const formatPostDate = (isoDateString) => {
  if (!isoDateString) return "";

  const date = new Date(isoDateString);

  const dateOptions = {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    timeZone: 'Asia/Seoul'
  };

  const datePart = date.toLocaleDateString('ko-KR', dateOptions);

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Seoul'
  }

  let timePart = date.toLocaleTimeString('ko-KR', timeOptions);

  const parts = datePart.replace(/\s+/g, '').replace(/\./g, '/').split('/');
  const monthDay = parts[0] + '/' + parts[1];
  const weekday = parts[2] ? `${parts[2].replace(/[요일]/, '일')}` : '';

  return `${monthDay}${weekday} ${timePart}`;
}

export default function Home() {
  const supabase = createClient('https://kkzhsaqigwpuzgvszvuz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtremhzYXFpZ3dwdXpndnN6dnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTE4NTMsImV4cCI6MjA3NTEyNzg1M30.2_EvGzGXY9dPZrvh4hphWdMYv2miSs0oEBgY8-TVnJQ');
  const insets = useSafeAreaInsets();
  const datesData = useMemo(() => generateDates(), []);
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const {province, districts: districtsString} = params;

  const [posts, setPosts] = useState([]);
  const [filterAgeClicked, setFilterAgeClicked] = useState(false);
  const [filterHeadcountClicked, setFilterHeadcountClicked] = useState(false);
  const [filterByMyAge, setFilterByMyAge] = useState(false);
  const [filterByHeadcount, setFilterByHeadCount] = useState([0]);
  const [filterDate, setFilterDate] = useState([-1]);

  const CURRENT_USER_BIRTH_YEAR = 2000;
  const headcounts = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  let districts = [];
  if (districtsString) {
    try {
      districts = JSON.parse(districtsString); // JSON 문자열 파싱
    } catch (e) {
      console.error("Failed to parse districts:", e);
      districts = [];
    }
  }

  const selectDate = (indexNum) => {
    if (!filterDate.includes(indexNum)){
      let newDate = filterDate.filter((index) => index !== -1);
      setFilterDate([...newDate, indexNum]);
    } else {
      let newDate = filterDate.filter((index) => index !== indexNum);
      if (newDate.length === 0) {
        setFilterDate([-1]);
      } else {
        setFilterDate(newDate);
      }
    }
  }

  useEffect(() => {
    const getPosts = async () => {
      let query = supabase
        .from('posts')
        .select();

      if (province && province !== "전체") {
        query = query.eq('province', province);
      }

      if (districts && districts.length > 0) {
        const filterableDistricts = districts.filter(d => d !== '전체' && d !== '모든 지역');
        if (filterableDistricts.length > 0) {
          query = query.in('district', filterableDistricts);
        }
      }
      
      if (filterByMyAge) {
        query = query
          .lte('max_age', CURRENT_USER_BIRTH_YEAR)
          .gte('min_age', CURRENT_USER_BIRTH_YEAR);
      }

      const selectedHeadcounts = filterByHeadcount.filter(count => count !== 0);

      if (filterByHeadcount.length > 1) {
        const maxBoyCounts = selectedHeadcounts.map(number => number / 2);

        query = query
          .in('boy_count_max', maxBoyCounts);
      }

      const selectedDateIndices = filterDate.filter(index => index !== -1);

      if (selectedDateIndices.length > 0) {
        const dateFilters = selectedDateIndices.map(index => {
          const startDateISO = datesData[index].fullDate;
          const startDate = new Date(startDateISO);

          const endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + 1);
          const endDateISO = endDate.toISOString();

          return `and(date.gte.${startDateISO}, date.lt.${endDateISO})`;
        });

        const orFilterString = `or(${dateFilters.join(',')})`;
        query = query.or(orFilterString);
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
        return;
      }
      setPosts(data || []);
    }
    getPosts();
  }, [
    filterByMyAge,
    filterByHeadcount,
    filterDate,
    datesData,
  ])

  return (
    <View style={[styles.container, {paddingTop: insets.top + 12}]}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
      />

      {/* 헤드 */}
      <View style={styles.header}>
        <View style={{flexDirection: "row"}}>
          <MaterialCommunityIcons name="fruit-grapes" size={48} color={COLORS.primary} style={{transform: [{rotate: '54deg'}]}} />
          <Text style={styles.title}>PODO</Text>
        </View>
        <TouchableOpacity style={styles.alarmButton} onPress={() => navigation.navigate('notice')}>
          <FontAwesome name='bell-o' size={24} />
        </TouchableOpacity>
      </View>

      { (filterAgeClicked || filterHeadcountClicked) && (
        <TouchableOpacity
          style={styles.hideAllFilter}
          activeOpacity={1} // 터치 시 시각적 피드백 없음
          onPress={() => {
            // 열려있는 모든 필터 닫기
            setFilterAgeClicked(false);
            setFilterHeadcountClicked(false);
          }}
        />
      )}

      {/* 필터 메뉴 */}
      <View style={styles.filterContainer}>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>나이</Text>
          <TouchableOpacity onPress={() => {
            setFilterAgeClicked(!filterAgeClicked)
            setFilterHeadcountClicked(false);
            }}
          >
            <FontAwesome name='angle-down' size={24}/>
          </TouchableOpacity>
          { filterAgeClicked
            ? <View style={styles.filterContent}>
                <View style={styles.filterContentList}>
                  <Text style={styles.filterContentText}>내 나이</Text>
                  <Checkbox
                    value={filterByMyAge}
                    onValueChange={(newValue) => {
                      setFilterByMyAge(newValue)
                    }}
                  />
                </View>
              </View>
            : null
          }
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>인원</Text>
          <TouchableOpacity onPress={() => {
            setFilterHeadcountClicked(!filterHeadcountClicked);
            setFilterAgeClicked(false);
          }}
          >
            <FontAwesome name='angle-down' size={24}/>
          </TouchableOpacity>
          
            { filterHeadcountClicked
                ? <View style={styles.filterContent}>
                    {headcounts.map((item, index) => (
                      <View style={styles.filterContentList} key={index}>
                        <Text style={styles.filterContentText}>{item}명</Text>
                        <Checkbox
                          value={filterByHeadcount.includes(item)}
                          onValueChange={(newValue) => {
                              setFilterByHeadCount(prevCounts => {
                                if (newValue) {
                                  return [...prevCounts, item];
                                } else {
                                  return prevCounts.filter(count => count !== item);
                                }
                              })
                          }}
                        />
                      </View>
                ))}
                </View>
                : null
            }
        </View>
        <View style={styles.filterMenu}>
          <Text style={styles.filterMenuText}>지역</Text>
          <TouchableOpacity onPress={() => navigation.navigate('location')}>
            <AntDesign name='arrow-right' size={16}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* 날짜 */}
      <View style={styles.dateContainer}>
        <TouchableOpacity
          style={[
            styles.showAllDateButton,
            filterDate[0] === -1 && styles.showAllDateButtonSelected
          ]}
          activeOpacity={0.4}
          onPress={()=>{
            setFilterDate([-1]);
          }}
        >
          <Text
            style={[
              styles.showAllDateButtonText,
              filterDate[0] === -1 && styles.showAllDateButtonTextSelected
            ]}
          >
            전체
          </Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.dateContentContainer}
          style={styles.dates}
        >
          {
            datesData.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={index}
                onPress={() => {
                  selectDate(index);
                }}
              >
                <View
                  style={[
                    styles.dateItem,
                    filterDate.includes(index) && styles.todayDateTime
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      filterDate.includes(index) && styles.todayDayText
                    ]}
                  >
                    {item.day}
                  </Text>
                  <Text
                    style={[
                      styles.dateText,
                      filterDate.includes(index) && styles.todayDateText
                    ]}
                  >
                    {item.date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>

      {/* 게시물 리스트 */}
      <ScrollView style={{flex: 1}}>
        {
          posts.map((post) => (
            <TouchableOpacity style={styles.post} activeOpacity={0.8} key={post.id}>
              <TouchableOpacity style={styles.postLike}>
                <FontAwesome name='heart-o' size={20} color={COLORS.white}/>
              </TouchableOpacity>
              <Image
                style={styles.postImg}
                source={post.image}
                contentFit="cover"
              />
              <View style={styles.postContent}>
                <Text
                  style={styles.postTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                {post.title}
                </Text>
                <View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>일시</Text>
                    <Text style={styles.postConditionText}>{formatPostDate(post.date)}</Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>위치</Text>
                    <Text style={styles.postConditionText}>{post.location}</Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>나이</Text>
                    <Text style={styles.postConditionText}>
                      {`${String(post.max_age).slice(-2)}년생~${String(post.min_age).slice(-2)}년생`}
                    </Text>
                  </View>
                  <View style={styles.postCondition}>
                    <Text style={styles.postConditionTitle}>인원</Text>
                    <Text style={styles.postConditionText}>{`남자 ${post.boy_count}/${post.boy_count_max} | 여자 ${post.girl_count}/${post.girl_count_max} 참여중`}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.FAB} activeOpacity={0.7} onPress={() => navigation.navigate('post')}>
        <AntDesign name='plus' size={24} color={COLORS.white}/>
      </TouchableOpacity>
    </View>
  );
}