import { Stack } from "expo-router"


const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'Home',
            }}
            />
            <Stack.Screen name="search" />
        </Stack>
    )
}

export default Layout;