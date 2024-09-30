import React from "react";
import {View, Text, FlatList} from "react-native";
import Card from "./Card";

const data = [
  {
    id: 1,
    name: "Ca nấu lẩu, nấu mì mini",
    shop: "Devang"
  },
  {
    id: 2,
    name: "1KG khô gà bơ tỏi",
    shop: "Devang"
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    shop: "Devang"
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    shop: "Devang"
  },
  {
    id: 5,
    name: "Lãnh đạo đơn giản",
    shop: "Devang"
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    shop: "Devang"
  },
  {
    id: 7,
    name: "Học cách nấu ăn",
    shop: "Devang"
  },
  {
    id: 7,
    name: "Học cách nấu ăn",
    shop: "Devang"
  },
  {
    id: 7,
    name: "Học cách nấu ăn",
    shop: "Devang"
  },
  {
    id: 7,
    name: "Học cách nấu ăn",
    shop: "Devang"
  },
  {
    id: 7,
    name: "Học cách nấu ăn",
    shop: "Devang"
  },
];

export default function Body () {
  
  return (
    <View>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem = {({item}) => <Card data={item}/>}
    />  
    </View>  
  )
}