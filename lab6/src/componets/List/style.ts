import { StyleSheet } from "react-native";

export const useStyle = () => {
  return {
    styles: StyleSheet.create({
        listView: {
            alignItems: 'center'
        },
        elementView: {
            marginVertical: 5,
            justifyContent: 'center',
            width:315,
            height: 80,
            borderRadius:12,
            backgroundColor: '#4AAAD4',
            paddingHorizontal: 10,
        },
        name: {
            color: '#FFFFFF',
            fontSize: 20,
        },
        phone: {
            color: '#FFFFFF',
            fontSize: 16,
        },
        deleteButton: {
            position: 'absolute',
            top: 10,
            right: 10,
            paddingLeft: 10,
            paddingBottom: 10,
        },
        btnView: {
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 6,
            height:20,
            width: 20,
            alignItems: 'center'
        },
        btnText: {
            color: '#FFFFFF',
            fontSize:16,
            textAlign: 'center'
        }
    }),
  };
};
