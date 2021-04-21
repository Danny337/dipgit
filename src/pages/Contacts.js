import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import './css/Contacts.css'

function Contacts() {
    return (
        <div className='main_map'> 
            <div className="text_map">
                <h2 className='tss'>Место нашего сервисного центра:</h2>
                <h3 className='nomer'>Девяткин переулок, дом 2, подъезд 3, офис 302.</h3>
            </div>
            <div className='map'>
                <YMaps>
                    <Map
                        defaultState={{
                            center: [55.75939, 37.638584],
                            zoom: 10,
                            controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                        width="100%" height="650px"
                    >
                        <Placemark
                            modules={['geoObject.addon.balloon']}
                            defaultGeometry={[55.75939, 37.638584]}
                            properties={{
                                balloonContentBody:
                                    'Keyboard service',
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

export default Contacts
