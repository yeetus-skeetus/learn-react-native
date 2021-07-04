import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    main: {
        marginTop: '5%'
    },

    question: {
        fontSize: 25,
        textAlign: 'center',
        color: '#d5d9e0',
        marginBottom: '5%'
    },

    item: {
        borderColor: '#d5d9e0',
        borderWidth: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    
    title: {
        color: '#d5d9e0',
        fontSize: 32,
    },

    description: {
        marginTop: '5%',
        color: '#d5d9e0'
    }
});

const list = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Instant-runoff',
      description: 'Voters rank their favorites, losers are eliminated in multiple rounds. Losers\' votes follow the ranking.\n\nVote third party, guilt-free.'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Approval',
      description: 'Voters select multiple options, most votes wins.\n\nFind the most okay option.'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Plurality',
      description: 'Voters select one option, most votes wins.\n\nPlain and simple.'
    },
];
  
  const Item = ({ title, description }) => (
    <TouchableHighlight onPress={() => alert("clicked")}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableHighlight>
);

export default function CreateView() {

    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} />
    );

    return (
    <View style={styles.main}>
        <Text style={styles.question}>Choose your favorite:</Text>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>);
}