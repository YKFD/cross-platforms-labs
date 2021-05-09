import React, { FC } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
//Local Dir
import { useStyle } from "./style";

type RecordType = { name: string; phone: string };

interface Props {
  records: Array<RecordType>;
  removeRecord: (index: number) => void;
}

export const List: FC<Props> = ({ records, removeRecord }) => {
  const { styles } = useStyle();
  return (
    <FlatList
      data={records}
      contentContainerStyle={styles.listView}
      renderItem={({ item: { name, phone }, index }) => (
        <View style={styles.elementView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
          <TouchableOpacity
            onPress={() => removeRecord(index)}
            style={styles.deleteButton}
          >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => `${item.name}-${item.phone}-${index}`}
    />
  );
};
