import React,{ useState }  from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


const Minutes = [
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
  {
    id: '24',
    title: '24',
  },
  {
    id: '24',
    title: '24',
  },
  {
    id: '24',
    title: '24',
  },
  {
    id: '25',
    title: '25',
  },
  {
    id: '26',
    title: '26',
  },
  {
    id: '27',
    title: '27',
  },
  {
    id: '28',
    title: '28',
  },
  {
    id: '29',
    title: '29',
  },
  {
    id: '30',
    title: '30',
  },
  {
    id: '31',
    title: '31',
  },

  {
    id: '32',
    title: '32',
  },

  {
    id: '33',
    title: '33',
  },

  {
    id: '34',
    title: '34',
  },

  {
    id: '35',
    title: '35',
  },
  {
    id: '36',
    title: '36',
  },
  {
    id: '37',
    title: '37',
  },
  {
    id: '38',
    title: '38',
  },
  {
    id: '39',
    title: '39',
  },
  {
    id: '40',
    title: '40',
  },
  {
    id: 41,
    title: 41
    },
    {
    id: 42,
    title: 42
    },
    {
    id: 43,
    title: 43
    },
    {
    id: 44,
    title: 44
    },
    {
    id: 45,
    title: 45
    },
    {
    id: 46,
    title: 46
    },
    {
    id: 47,
    title: 47
    },
    {
    id: 48,
    title: 48
    },
    {
    id: 49,
    title: 49
    },
    {
    id: 50,
    title: 50
    },
    {
    id: 51,
    title: 51
    },
    {
    id: 52,
    title: 52
    },
    {
    id: 53,
    title: 53
    },
    {
    id: 54,
    title: 54
    },
    {
    id: 55,
    title: 55
    },
    {
    id: 56,
    title: 56
    },
    {
    id: 57,
    title: 57
    },
    {
    id: 58,
    title: 58
    },
    {
    id: 59,
    title: 59
    }    
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
<Text style={[styles.title, textColor]}>{item.title}</Text>
</TouchableOpacity>
);

const TimerMinutes = ({getMinutes}) => {
const [selectedId, setSelectedId] = useState(null);

const renderItem = ({ item }) => {
const backgroundColor = item.id === selectedId ? "#99ccff" : "#6666ff";
const color = item.id === selectedId ? 'black' : 'white';

return (
  <Item
    item={item}
    onPress={() => {setSelectedId(item.id); getMinutes(item.value) ;console.log(item.value)}}
    backgroundColor={{ backgroundColor }}
    textColor={{ color }}
  />
);
};

return (
<SafeAreaView style={styles.container}>
  <FlatList
    data={Minutes}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    extraData={selectedId}
  />
</SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    height:100,
    flexGrow: 0,
    width:130,

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



export default TimerMinutes 
