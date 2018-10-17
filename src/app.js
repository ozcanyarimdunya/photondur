import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Body, Container, Content, Text, Spinner, DeckSwiper, View} from 'native-base';


import Item from './components/item'
import {getPhotos} from "./actions/photoActions";
import Header from './components/header'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPhotos();
    }


    render() {
        const {photos, isFetching, error} = this.props.photos;

        if (isFetching) {
            return (
                <Container>
                    <Header/>
                    <Content padder>
                        <Body>
                        <Spinner/>
                        <Text style={{textAlign: 'center'}}>Loading ..</Text>
                        </Body>
                    </Content>
                </Container>
            );
        }
        else if (photos.length > 0) {
            return (
                <Container>
                    <Header/>
                    <View>
                        <DeckSwiper dataSource={photos}
                                    renderItem={item => <Item photo={item}/>}
                        />
                    </View>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Header/>
                    <Content padder>
                        <Text style={{textAlign: 'center'}}>{error}</Text>
                    </Content>
                </Container>
            );
        }

    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPhotos: () => dispatch(getPhotos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);







