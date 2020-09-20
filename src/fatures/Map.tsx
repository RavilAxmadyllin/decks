import React from 'react'
import {Map, Placemark, YMaps} from 'react-yandex-maps'

export const DefMap = () => {
    const data = {
        center: [55.88, 37.54],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
    }
    return <div style={{minHeight: '50vh', display: 'flex', justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column', marginTop: '4%'}}>
            <YMaps>
                <Map defaultState={data}
                     modules={['control.ZoomControl', 'control.FullscreenControl']} width={600} height={600}
                    // долго искал эту хрень)
                    // https://tech.yandex.com/maps/jsapi/doc/2.1/ref/reference/Map-docpage/#field_detail__events
                     onClick={(e: any) => console.log(e.get('coords'))}>
                    {/*https://react-yandex-maps.now.sh/geo-objects/placemark*/}
                    <Placemark geometry={[55.88624897196259, 37.540146657918264]}/>
                </Map>
            </YMaps>
    </div>
}
