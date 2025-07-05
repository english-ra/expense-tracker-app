import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="all-expenses"
                options={{
                    title: "All Expenses",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="recent-expenses"
                options={{
                    title: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
