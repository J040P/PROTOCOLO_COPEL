import React, { useState, useEffect } from 'react';
import { View, FlatList, Animated, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Data } from './db';
import Header from '../Header';

type Props = {
  id: number;
  code: string;
  dress: string;
  status: string;
};

export default function Pde() {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const [rotateAnimations] = useState<{ [key: number]: Animated.Value }>({});
  const [filteredData, setFilteredData] = useState<Props[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filtra os dados quando o componente é montado ou quando o termo de pesquisa muda
    const filterData = Data.filter(item =>
      item.status === 'Iniciar' &&
      (item.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.dress.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filterData);
  }, [searchTerm]);

  const toggleExpand = (id: number) => {
    const isExpanded = expandedItems[id];
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    if (!rotateAnimations[id]) {
      rotateAnimations[id] = new Animated.Value(0);
    }

    Animated.timing(rotateAnimations[id], {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }: { item: Props }) => {
    const rotateInterpolate = rotateAnimations[item.id]?.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    }) || '0deg';

    return (
      <View className='justify-center items-center mb-2'>
        <View className="w-10/12 bg-gray-200 flex-row h-16 items-center justify-between p-4 rounded-xl mx-auto">
          <TouchableOpacity className='w-full bg-gray-200 flex-row h-16 items-center justify-between rounded-xl' onPress={() => toggleExpand(item.id)}>
            <View className="flex-row items-center gap-2">
              <Text className="text-black font-semibold text-xl">{item.code}</Text>
              <View className="h-1 w-1 border-2 rounded-full" />
              <Text className="text-gray-700">{item.dress}</Text>
            </View>
            <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="orange" />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {expandedItems[item.id] && (
          <View className="p-4 bg-gray-200 mb-2 w-10/12 rounded-b-xl -mt-3">
            <Text className="text-sm text-gray-600">{item.dress}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        className="w-full"
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
