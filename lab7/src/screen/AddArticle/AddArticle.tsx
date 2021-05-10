import React, {useState} from 'react'
import {Keyboard, Picker, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useStyle} from "./style";
import {saveArticle} from "../../services";

enum Categories {
    FORUM = "forum",
    BLOG = "blogs",
    NEWS = "news",
}

// @ts-ignore
export const AddArticle = ({navigation}) => {
    const [mainCategory, setMainCategory] = useState<Categories>(Categories.FORUM)
    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const {styles} = useStyle()

    return <SafeAreaView style={styles.safeAreaView}>
        <Picker
            selectedValue={mainCategory}
            style={{height: 200, width: 400}}
            onValueChange={(itemValue) => setMainCategory(itemValue)}>
            <Picker.Item label="Forum" value={Categories.FORUM}/>
            <Picker.Item label="Blog" value={Categories.BLOG}/>
            <Picker.Item label="News" value={Categories.NEWS}/>
        </Picker>
        <TextInput style={styles.textInputStyle} placeholder="Title" value={title} onChangeText={setTitle}/>
        <TextInput style={styles.textInputStyle} placeholder="Category" value={category} onChangeText={setCategory}/>
        <TextInput style={[styles.textInputStyle, styles.textInputMultilineStyle]} placeholder="Body" multiline={true}
                   value={body} onChangeText={setBody}/>
        <View style={styles.addBtnView}>
            <TouchableOpacity style={styles.addBtn} onPress={() => {
                console.log(JSON.stringify({title, category, body}))
                saveArticle(mainCategory, {title, category, body})
                Keyboard.dismiss()
                navigation.goBack()
            }}>
                <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}