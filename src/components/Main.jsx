import React from 'react'
import { Text, View } from 'react-native'
import CatsList from './CatsList'
import AppBar from './AppBar'
import { Redirect, Routes, Route } from 'react-router-native'


//rutas en memoria si es movil o en el navegador
const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<CatsList/>} exact/>
                {/* <Route path='/breeds' element={<Text>breeds</Text>} exact/>*/}
            </Routes>
        </View>
    );
}

export default Main;
