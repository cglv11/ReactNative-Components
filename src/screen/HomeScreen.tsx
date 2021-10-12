import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'

import { MenuItem } from '../interfaces/appInterfaces'
import { menuItems } from '../menu/menuItems'
import { styles } from '../theme/appTheme'


export const HomeScreen = () => {

    return (
    <View style={{ flex: 1, ...styles.globalMargin }}>

        <FlatList 
            data={ menuItems }
            renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item }/>} 
            keyExtractor={ (item) => item.name } 
            ListHeaderComponent={ () => <HeaderTitle title="Opciones de menú"/>}
            ItemSeparatorComponent={ () => <ItemSeparator /> }
        />

    </View>
  )
}
