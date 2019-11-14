import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Unsplash from 'unsplash-js';
import { SearchBar } from 'react-native-elements';
import { WaveIndicator } from "react-native-indicators";
import Header from '../common/Header';
import ThumbnailCard from '../common/ThumbnailCard';
import colors from '../themes/color';

import { __UNSPLASH_ACCESS_KEY } from '../util/rest_api';

const unsplash = new Unsplash({ accessKey: __UNSPLASH_ACCESS_KEY });

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            images: null,
            isFetching: true,
        }
    }

    handleSearchImage = async () => {
        this.setState({
            isFetching: true,
        })
        const response = await unsplash.search.photos(this.state.search, 1, 10);
        const data = await response.json();

        this.setState({
            images: data.results,
            isFetching: false,
        });
    }

    getLatestImages = async () => {
        const response = await unsplash.photos.listPhotos(1, 10, "latest");
        const data = await response.json();

        this.setState({
            images: await data,
        },
            () => {
                this.setState({
                    isFetching: false,
                });
            }
        );
    }

    onRefresh = () => {
        this.setState({
            images: null,
            isFetching: true,
        }, () => { this.getLatestImages() })
    }

    componentDidMount = () => {
        this.getLatestImages();
    }

    handleViewImage = (item) => e => {
        data = {
            small: item.item.urls.small,
            regular: item.item.urls.regular,
            full: item.item.urls.full,
        }

        this.props.navigation.navigate("Photo", { data });
    }

    render() {
        const loadingView =
            (
                <View style={styles.center}>
                    <WaveIndicator color={colors.PRIMARY} />
                </View>
            )
        const imageView =
            (
                <FlatList
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    data={this.state.images}
                    numColumns={2}
                    keyExtractor={(item, index) => 'key' + index}
                    ListHeaderComponent={<Header />}
                    ListFooterComponent={<Text>Footer</Text>}
                    ListFooterComponentStyle={styles.listFooter}
                    renderItem={(item) => (
                        <ThumbnailCard thumbnailUrl={item.item.urls.small} onPress={this.handleViewImage(item)} />
                    )
                    }
                />
            )
        return (
            <View>
                <SearchBar
                    platform="android"
                    placeholder="Type Here..."
                    onChangeText={text => this.setState({ search: text }, () => { this.handleSearchImage() })}
                    value={this.state.search}
                    inputContainerStyle={styles.searchBox}
                    containerStyle={styles.searchBar}
                />
                {this.state.isFetching ? loadingView : imageView}
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: "50%",
    },
    searchBar: {
        backgroundColor: colors.PRIMARY_LIGHT,
        marginBottom: 2,
    },
    searchBox: {
        backgroundColor: colors.PRIMARY_DARK,
        marginHorizontal: 5,
        width: "97%",
    },
    listFooter: {
        marginBottom: 40,
    }
});