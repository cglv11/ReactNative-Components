import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()


    const oneRefresh = () => {
        setRefreshing(true)

        setTimeout(() =>{
            console.log('Finish')
            setRefreshing(false)
            setData('Hola mundo')
        }, 2000)
    }
    
    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ oneRefresh }
                    progressViewOffset={ 10 }
                    colors={ ['#F94E5D','black','#F94E5D']}
                    style={{ backgroundColor: '#F594E5D'}}
                    title="Refreshing"
                />
            }
        >
            <View style={ styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />

                {
                    data && <HeaderTitle title={ data } />
                }

            </View>        
        </ScrollView>
    )
}
