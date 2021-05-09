import React, { FC, useState, useCallback } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Alert,
  Keyboard,
} from "react-native";
//Local Dir
import { useStyle } from "./style";

type RecordType = { name: string; phone: string };

interface Props {
  createRecord: (recordProperties: RecordType) => void;
}

export const AddElemnt: FC<Props> = (props) => {
  const { styles } = useStyle();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const createRecord = useCallback(() => {
    if (name.length === 0 || phone.length === 0) {
      Alert.alert("Error", "Fields are empty");
      Keyboard.dismiss();
      return;
    }
    props.createRecord({ name, phone });
    setName("");
    setPhone("");
    Keyboard.dismiss();
  }, [name, phone]);

  return (
    <View style={styles.view}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.textInput}
        placeholder="Name"
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.textInput}
        keyboardType="phone-pad"
        placeholder="Phone"
      />
      <TouchableOpacity style={styles.button} onPress={createRecord}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};
