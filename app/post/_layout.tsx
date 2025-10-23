import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";

export default function _HomeLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "게시물 작성",
                    headerStyle: {
                    backgroundColor: COLORS.background,
                    } 
                }}
            />
        </Stack>
    )
}