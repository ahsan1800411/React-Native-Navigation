import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';

function LogoTitle() {
    return (
        <>
            <View style={{ justifyContent: 'space-between', marginRight: 30, flexDirection: 'row', flex: 1 }}>
                <Icon name='menu' size={30} color='grey' />
                <Text style={{ textAlign: 'center', marginTop: 4, fontWeight: 'bold', fontSize: 18 }}>Rick And Morty</Text>
                <Feather name='settings' size={30} color='grey' onPress={() => alert('Alert Added')} />
            </View>
        </>
    );
}

export default LogoTitle;
