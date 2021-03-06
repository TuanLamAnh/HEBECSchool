import { observer } from "mobx-react"
import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import paymentStore from "../../../store/paymentStore"
import { height, width } from "../../../utils/dimensions"
import Modal from "react-native-modal";
import { colors, sizes } from "../../../styles/themes"

export const ModalList = observer(({onSelectItem, onClose, currentType, modalVisible}:any) => {
    const [data, setData] = useState([]);
    const [placeholder, setPlaceholder] = useState("");
    useEffect(() => {
        if (currentType == 1) {
            setData(paymentStore.listCity);
            setPlaceholder("Chọn tỉnh / thành phố");
        }
        else if (currentType == 2) {
            setData(paymentStore.listDistrict);
            setPlaceholder("Chọn quận / huyện");
        }
        else {
            setData(paymentStore.listWard);
            setPlaceholder("Chọn phường / xã");
        }
    }
        , [])
    return (
        <Modal
            isVisible={modalVisible}
            onBackdropPress={onClose}
            style={styles.modal}
            backdropOpacity={0.5}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            statusBarTranslucent={true}
        >
            <View style={styles.modalContent}>
                <ScrollView style={styles.modalList}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.modalItemText}>{placeholder}</Text>
                    </TouchableOpacity>
                    {data.map((item: any, index: number) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => onSelectItem({item})}>
                                    <Text style={styles.modalItemText}>{currentType==1? item.name: item.nameWithType}</Text>
                            </TouchableOpacity>
                        )})}
                </ScrollView>
            </View>
        </Modal>
    )
}
)
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.white,
        width: width - 50,
        borderRadius: 5,
        marginTop: 25,
        maxHeight: height - 50,
    },
    modalList: {
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
    },
    modalItemText: {
        fontSize: sizes.size16,
        lineHeight: 20,
        color: colors.darkGrey,
        padding: 10,
    }
})

