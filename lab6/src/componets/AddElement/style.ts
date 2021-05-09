import { StyleSheet } from "react-native";

export const useStyle = () => {
  return {
    styles: StyleSheet.create({
      view: {
        height: 220,
        alignItems: "center",
        justifyContent: "space-around",
      },
      button: {
        width: 232,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#4AD4B2",
        justifyContent: "center",
        alignItems: "center",
      },
      textInput: {
        width: 315,
        height: 60,
        paddingHorizontal: 20, 
        borderRadius: 12,
        fontSize: 14,
        borderColor: "#111111",
        borderWidth: 1,
      },
      buttonText: {
        fontSize: 18,
        textAlign: "center",
      },
    }),
  };
};
