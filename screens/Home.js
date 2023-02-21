import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useCharacterData } from '../hooks/useCharacter';
function HomeScreen({ navigation }) {
    const { data, isLoading } = useCharacterData();
    if (isLoading) {
        return <Text>Loading</Text>;
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={data.data.results}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() =>
                                navigation.navigate('Details', {
                                    id: item.id,
                                })
                            }
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontStyle: 'italic',
                                    marginVertical: 10,
                                    fontWeight: 'bold',
                                }}
                            >
                                {item.name}
                            </Text>
                            <Image
                                style={{ width: 300, height: 300 }}
                                source={{
                                    uri: item.image,
                                }}
                            />
                        </Pressable>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default HomeScreen;
