import React from "react";
import { 
    View,
    StyleSheet
} from "react-native";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

function TopBar(){
    return(
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#000"/>
            <FontAwesome name="comments" size={27} color="#fff"/>
            <FontAwesome name="user" size={27} color="#fff"/>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#F53D6F',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
    }   
})