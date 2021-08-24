import React, { useRef, useState } from "react";
import { View, SectionList, Text, Button, Animated, FlatList } from "react-native";
import { styles } from "./PuzzleCarouselStyle";
import DATA from "../Blocks";
import Items from "../Items/Items";


export default function Carousel (){
const [page, setPage] = useState(1);

let listViewRef;

const paginate = (blocks, page) => {
    const random = Math.floor(Math.random())   
    const firstBlockIndex = lastBlockIndex - 4;
    const lastBlockIndex = page * blocks.length;
    const blockselect = blocks.map((elem)=>{
        return{...elem, data: [elem.data[random]]}
    }) 
    return blockselect.slice(firstBlockIndex, lastBlockIndex);
};

 const handleNextPress = () => {
   setPage(page + 1);
   listViewRef.scrollToIndex({ index: page, animated: true})
 }; 
 const handlePrevPress = () => {
   setPage(page - 1);
   listViewRef.scrollToIndex({ index: page - 1 === 4 ? page - 1 : page - 2}) 
 }; 

    return (
        <View style={styles.container}>
            <FlatList 
                data={paginate(DATA, page)} 
                keyExtractor={(item, i) => i.toString()} 
                renderItem={({item}) => <Items item={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}  
                ref={(ref) => {
                    listViewRef = ref;
                }}
            />
            <View style={styles.fixToText}>
                {page > 1 ? 
                    <Button
                        title="Prev "
                        onPress={handlePrevPress}
                        style={styles.btn}
                    />
                    : <Text></Text>
                }
                <Text>                           </Text>
                {page < DATA.length?
                    <Button
                        title="Next"
                        onPress={handleNextPress}
                    />
                    : <Text></Text>
                }    
            </View>
        </View>
    )
};

