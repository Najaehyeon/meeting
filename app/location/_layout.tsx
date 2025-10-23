import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";

export default function _HomeLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "지역 설정",
                    headerStyle: {
                        backgroundColor: COLORS.background,
                    } 
                }}
            />
        </Stack>
    )
}