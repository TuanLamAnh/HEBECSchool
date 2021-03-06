import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors, sizes } from "../styles/themes"
import Typo from "./Typo"

export const ControlQuantity = ({ quantity, onChangeQuantity }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => quantity > 0? onChangeQuantity(quantity - 1): null}>
                <Image source={require("../assets/icons/MinusCircle.png")} style={styles.image} />
            </TouchableOpacity>
            <Typo style={styles.text}>{quantity}</Typo>
            <TouchableOpacity onPress={() => onChangeQuantity(quantity + 1)}>
                <Image source={require("../assets/icons/PlusCircle.png")} style={styles.image} />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
         fontSize: sizes.size14,
        color: colors.darkGrey,
        width: 30,
        marginHorizontal: 5,
        textAlign: 'center',
    },
    image: {
        width: 20,
        height: 20,
    },
}
)