import {StyleSheet} from "react-native";

export const useStyle = () => {
    return {
        styles: StyleSheet.create({
            touchableView: {
                marginVertical: 10,
                width: 380,
                height: 80,
                borderRadius: 12,
                justifyContent: 'center',
                paddingHorizontal: 10,
                backgroundColor: '#496FF5',
            },
            title: {
                fontSize: 20,
                color: "#FFFFFF",
                marginBottom: 3,
            },
            category: {
                fontSize: 16,
                color: "#FFFFFF",
            }
        })
    }
}