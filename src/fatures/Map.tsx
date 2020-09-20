import React from 'react'
import {Map, YMaps} from 'react-yandex-maps'

export const DefMap = () => {
    return <div>
        return (
        <div>
            map
            <YMaps>
                <Map defaultState={{center: [55.88, 37.54], zoom: 9}}
                    // долго искал эту хрень)
                    // https://tech.yandex.com/maps/jsapi/doc/2.1/ref/reference/Map-docpage/#field_detail__events
                     onClick={(e: any) => console.log(e.get('coords'))}>
                    {/*https://react-yandex-maps.now.sh/geo-objects/placemark*/}
                    {/*<Placemark geometry={[55.88624897196259, 37.540146657918264]}/>*/}
                </Map>
            </YMaps>
        </div>
    </div>
}
