import { Tabs } from "expo-router"


const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name="home" options={{
                tabBarLabel: "Home",
            }} />
            <Tabs.Screen name="camera" options={{
                tabBarLabel: "Camera",
            }} />
            <Tabs.Screen name="account" options={{
                tabBarLabel: "Account",
            }} />
        </Tabs>
    )
}

export default TabLayout;