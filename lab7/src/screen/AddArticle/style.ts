import {Dimensions, StyleSheet} from "react-native";

export const useStyle = () => {
    return {
        styles: StyleSheet.create({
            safeAreaView: {
                flex: 1,
                backgroundColor: '#FFFFFF',
                alignItems: 'center'
            },
            textInputStyle: {
                borderWidth:1,
                borderColor: "#111",
                borderRadius: 12,
                width: 340,
                height: 50,
                fontSize: 16,
                paddingHorizontal: 10,
                marginVertical:5,
            },
            textInputMultilineStyle: {
                paddingTop:10,
                height: 200,
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