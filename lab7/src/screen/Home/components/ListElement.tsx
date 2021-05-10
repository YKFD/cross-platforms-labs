import React, {FC} from 'react'
import {Text, TouchableOpacity} from "react-native";
import {useStyle} from "./style";

type Props = {
    title: string,
    category: string
}

export const ListElement: FC<Props> = ({title, category}) => {

    const {styles} = useStyle()

    return <TouchableOpacity style={styles.touchableView}>
        <Text style={styles.title}>{title.length > 25 ? title.substring(0, 22) + '...' : title}</Text>
        <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
}