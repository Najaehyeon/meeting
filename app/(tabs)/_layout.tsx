import { COLORS } from '@/constants/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import * as Haptics from 'expo-haptics'; // 👈 Haptics 라이브러리 임포트
import { Tabs } from 'expo-router';
import { useCallback } from 'react'; // 👈 useCallback 임포트
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const triggerHapticFeedback = useCallback(() => {
    // Light 진동 효과를 사용합니다. 필요에 따라 다른 효과(Medium, Heavy)로 변경 가능합니다.
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  }, []);
  
  return (
    <Tabs
      screenListeners={{
        tabPress: () => {
          triggerHapticFeedback();
        },
      }}
      screenOptions={{    
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8,
          backgroundColor: 'white',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: "홈",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <Octicons name="home" focused={focused} color={color} size={24} />
            else return <Octicons name="home-fill" focused={focused} color={color} size={24} />
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarLabel: "채팅",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
            else return <Ionicons name="chatbubble-ellipses" size={24} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: 'Bookmarks',
          tabBarLabel: "저장",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <FontAwesome name="heart-o" size={24} color={color} />
            else return <FontAwesome name="heart" size={24} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: "마이페이지",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) return <FontAwesome name="user-o" focused={focused} color={color} size={24} />
            else return <FontAwesome name="user" focused={focused} color={color} size={24} />
          },
        }}
      />
    </Tabs>
  );
}