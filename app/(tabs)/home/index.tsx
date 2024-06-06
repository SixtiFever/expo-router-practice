import { View, Text, Button, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

const home = () => {

    const router = useRouter();

    return (
        <View>
            <Text>This is the home page</Text>
            {/* <Pressable onPress={() => router.replace('search')}>
                <Text>Go to search</Text>
            </Pressable> */}
            <Link href="/(tabs)/home/search">
                <Text>Search</Text>
            </Link>
        </View>
    )
}

export default home;