import { View, Text, Image } from 'react-native';

import { useSingleCharacterData } from '../hooks/useCharacter';
import BaseSpinner from '../components/BaseSpinner';


function DetailsScreen({ navigation, route }) {
    const { id } = route.params;
    const { data, isLoading } = useSingleCharacterData(id);
    if (isLoading) {
        return <BaseSpinner />
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    marginVertical: 10,
                    fontWeight: 'bold',
                }}
            >{data.data.name}</Text>
            <Text
                style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                }}
            >Status is {data.data.status}</Text>
            <Image
                style={{ width: 300, height: 300 }}
                source={{
                    uri: data.data.image,
                }}
            />
        </View>
    );
}

export default DetailsScreen;
