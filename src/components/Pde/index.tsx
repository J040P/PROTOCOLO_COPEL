import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Data } from './db';

type Props = {
  id: number;
  code: string;
  dress: string;
};

export default function Pde() {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const [rotateAnimations] = useState<{ [key: number]: Animated.Value }>({});

  const toggleExpand = (id: number) => {
    // Alterna o estado de expansão
    const isExpanded = expandedItems[id];
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    // Se o item não tem uma animação definida, inicializa uma
    if (!rotateAnimations[id]) {
      rotateAnimations[id] = new Animated.Value(0);
    }

    // Animação para rotacionar o ícone
    Animated.timing(rotateAnimations[id], {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }: { item: Props }) => {
    // Interpolação para a rotação do ícone
    const rotateInterpolate = rotateAnimations[item.id]?.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    }) || '0deg'; // Valor padrão se a animação não estiver definida

    return (
      <View className='justify-center items-center mb-2'>
        <View className="w-10/12 bg-gray-200 flex-row h-16 items-center justify-between p-4 rounded-xl mx-auto">
          <View className="flex-row items-center gap-2">
            <Text className="text-black font-semibold text-xl">{item.code}</Text>
            <View className="h-1 w-1 border-2 rounded-full" />
            <Text className="text-gray-700">{item.dress}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleExpand(item.id)}>
            <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="orange" />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Conteúdo expandido renderizado aqui */}
        {expandedItems[item.id] && (
          <View className="p-4 bg-gray-200 mb-2 w-10/12 rounded-b-xl -mt-2">
            <Text className="text-sm text-gray-600">{item.dress}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      className="w-full"
      data={Data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
