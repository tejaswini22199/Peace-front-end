
import React,{ useState }  from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const Hours = [
  {
    id: '1',
    title: '01',
  },
  {
    id: '2',
    title: '02',
  },
  {
    id: '3',
    title: '03',
  },
  {
    id: '4',
    title: '04',
  },
  {
    id: '5',
    title: '05',
  },
  {
    id: '6',
    title: '06',
  },
  {
    id: '7',
    title: '07',
  },
  {
    id: '8',
    title: '08',
  },
  {
    id: '9',
    title: '09',
  },
  {
    id: '10',
    title: '10',
  },
  {
    id: '11',
    title: '11',
  },
  {
    id: '12',
    title: '12',
  },
  {
    id: '13',
    title: '13',
  },
  {
    id: '14',
    title: '14',
  },
  {
    id: '15',
    title: '15',
  },
  {
    id: '16',
    title: '16',
  },
  {
    id: '17',
    title: '17',
  },
  {
    id: '18',
    title: '18',
  },
  {
    id: '19',
    title: '19',
  },
  {
    id: '20',
    title: '20',
  },
  {
    id: '21',
    title: '21',
  },
  {
    id: '22',
    title: '22',
  },
  {
    id: '23',
    title: '23',
  },
  {
    id: '24',
    title: '24',
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
<Text style={[styles.title, textColor]}>{item.title}</Text>
</TouchableOpacity>
);

const Timer = ({getHours}) => {
const [selectedId, setSelectedId] = useState(null);
const renderItem = ({ item }) => {
const backgroundColor = item.id === selectedId ? "#99ccff" : "#6666ff";
const color = item.id === selectedId ? 'black' : 'white';

return (
  <Item
    item={item}
    onPress={() => {setSelectedId(item.id); getHours(item.value); console.log(item.value)}}
    backgroundColor={{ backgroundColor }}
    textColor={{ color }}
  />
);
};

return (
<SafeAreaView style={styles.container}>
  <FlatList
    data={Hours}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    extraData={selectedId}
  />
</SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    height:"100px",
    flexGrow: 0,
    width:"130px",
    
  },
  item: {
    backgroundColor: "#6666ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  list:{
    
  },
});

export default Timer;