import {Dimensions, StyleSheet} from "react-native";

export const useStyle = () => {
    return {
        styles: StyleSheet.create({
            safeAreaView: {
                flex: 1,
                backgroundColor: '#FFFFFF'
            },
            listContainerStyle: {
                alignItems: 'center',
            },
            listStyle: {
                overflow: 'visible',
                marginTop: 10,
                marginBottom: 80
            },
            addBtnView: {
                position: 'absolute',
                width: Dimensions.get('window').width,
                bottom: 30,
                left: 0,
                right: 0,
                alignItems: 'center'
            },
            addBtn: {
                width: 340,
                height: 60,
                borderRadius: 12,
                backgroundColor: '#37ADDE',
                justifyContent: 'center',
            },
            addBtnText: {
                color: '#FFFFFF',
                fontSize: 20,
                textAlign: 'center'
            }
        })
    }
}