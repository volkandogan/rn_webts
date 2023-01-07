import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';

const DATA = [
    {
        id: 1,
        name: 'Luke Skywalker',
        birth_year: '19BBY',
    },
    {
        id: 2,
        name: 'C-3PO',
        birth_year: '112BBY',
    },
    {
        id: 3,
        name: 'R2-D2',
        birth_year: '33BBY',
    },
    {
        id: 4,
        name: 'Darth Vader',
        birth_year: '41.9BBY',
    },
    {
        id: 5,
        name: 'Leia Organa',
        birth_year: '19BBY',
    },
];

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();


    const renderListItems = ({ item }: any) => {
        return (
            <Pressable
                onPress={() =>
                    navigation.navigate('Details', {
                        name: item.name,
                        birthYear: item.birth_year,
                    })
                }
            >
                <Text
                    style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}
                >
                    {item.name}
                </Text>
                <View
                    style={{
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#ccc',
                    }}
                />
            </Pressable>
        );
    };

    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            <FlatList data={DATA} renderItem={renderListItems} />
        </View>
    );
};

export default HomeScreen;