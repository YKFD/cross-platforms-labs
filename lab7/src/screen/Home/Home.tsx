import React, {useEffect, useState} from 'react'
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
//Local dir
import {useStyle} from "./style";
import {getBlogs, getForums, getNews} from '../../services'
import {ListElement} from "./components";

type Article = {
    title: string,
    body: string,
    category: string,
}

type Articles = {
    forums: Array<Article>,
    news: Array<Article>,
    blogs: Array<Article>,
}

// @ts-ignore
export const Home = ({navigation}) => {
    const [articles, setArticles] = useState<Articles>({
        forums: [],
        news: [],
        blogs: [],
    })

    const getArticles = async () => {
        const [news, blogs, forums] = await Promise.all([getNews().then(res => res.json()), getBlogs().then(res => res.json()), getForums().then(res => res.json())])
        const articles: Articles = {news, blogs, forums}
        setArticles(articles)
    }


    useEffect(() => {
        getArticles()
    }, [])

    const {styles} = useStyle()

    return <SafeAreaView style={styles.safeAreaView}>
        <FlatList data={[...articles.news, ...articles.forums, ...articles.blogs]}
                  renderItem={({item}) => <ListElement title={item.title} category={item.category}/>}
                  keyExtractor={((item, index) => `${item.title}-${index}`)}
                  contentContainerStyle={styles.listContainerStyle}
                  showsVerticalScrollIndicator={false}
                  style={styles.listStyle}/>
        <View style={styles.addBtnView}>
            <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddArticle')}>
                <Text style={styles.addBtnText}>Add new</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}