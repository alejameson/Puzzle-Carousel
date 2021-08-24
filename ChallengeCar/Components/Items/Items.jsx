import React from "react";
import { View, Text, Image, useWindowDimensions  } from "react-native";
import { styles } from "./ItemsStyle";

export default function Items ({item}) {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image style={styles.image} source={{ uri: item.data[0].image || "https://lh3.googleusercontent.com/proxy/SYUtM5qLYFbeM-bsR45JqkTtSfsvfcjAsPe3dYI7-gaq66JqEl10t4iUE4qdFgOHdguFdPgX8NYXLV3XepLyd7Qr-Vio" }}/>
            <View style={styles.info}>
                <Text style={styles.title}>{item.data[0].title}</Text>
                <Text style={styles.description}>Description Text</Text>
            </View>
        </View>
    )
};

