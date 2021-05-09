import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
//Local
import { AddElemnt,List } from "./componets";

type RecordType = { name: string; phone: string };

export default () => {
  const [records, setRecords] = useState<Array<RecordType>>([]);

  const createRecord = useCallback(
    (record: RecordType) => {
      const localRecords = [...records];
      localRecords.push(record);
      setRecords(localRecords);
    },
    [records]
  );

  const removeRecord = useCallback(
    (index: number) => {
      const localRecords = [...records];
      localRecords.splice(index, 1);
      setRecords(localRecords);
    },
    [records]
  );

  return (
    <SafeAreaView>
      <AddElemnt createRecord={createRecord} />
      <List records={records} removeRecord={removeRecord} />
    </SafeAreaView>
  );
};
