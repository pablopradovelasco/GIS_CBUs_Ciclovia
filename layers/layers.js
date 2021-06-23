ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([773036.185298, 8056349.373196, 835014.831194, 8092597.289899]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_Stamen_1 = new ol.layer.Tile({
            'title': 'Stamen',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_4 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_Cbba_Clasificado_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM_Cbba_Clasificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_Cbba_Clasificado_5.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [788810.421843, 8059437.105524, 811271.421345, 8089744.480852]
                            })
                        });
var lyr_Relieve_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relieve",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Relieve_6.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [788810.421843, 8059437.105524, 811271.421345, 8089744.480852]
                            })
                        });
var format_Densidad_Poblacin_habha_7 = new ol.format.GeoJSON();
var features_Densidad_Poblacin_habha_7 = format_Densidad_Poblacin_habha_7.readFeatures(json_Densidad_Poblacin_habha_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Densidad_Poblacin_habha_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidad_Poblacin_habha_7.addFeatures(features_Densidad_Poblacin_habha_7);
var lyr_Densidad_Poblacin_habha_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidad_Poblacin_habha_7, 
                style: style_Densidad_Poblacin_habha_7,
                interactive: true,
    title: 'Densidad_Población_(hab/ha)<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_7_0.png" /> 0 - 50<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_7_1.png" /> 50 - 100<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_7_2.png" /> 100 - 175<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_7_3.png" /> 175 - 250<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_7_4.png" /> 250 - 595<br />'
        });
var format_Areas_Verdes_PTDI2016_8 = new ol.format.GeoJSON();
var features_Areas_Verdes_PTDI2016_8 = format_Areas_Verdes_PTDI2016_8.readFeatures(json_Areas_Verdes_PTDI2016_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Areas_Verdes_PTDI2016_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Verdes_PTDI2016_8.addFeatures(features_Areas_Verdes_PTDI2016_8);
var lyr_Areas_Verdes_PTDI2016_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_Verdes_PTDI2016_8, 
                style: style_Areas_Verdes_PTDI2016_8,
                interactive: true,
    title: 'Areas_Verdes_PTDI2016<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_0.png" /> Área Agropecuaria<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_1.png" /> Área de Equipamiento Especial y Preservación Paisajística Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_2.png" /> Área de Equipamientos Especiales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_3.png" /> Área de Equipamientos Sociales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_4.png" /> Área de Equipamientos Urbano Regionales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_5.png" /> Área de Mitigación Ambiental y Jerarquización de la Estructura Natural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_6.png" /> Área de Preservación e Integración Paisajística<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_7.png" /> Área de Preservación Natural y Dinamización Cultural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_8.png" /> Área de Protección y Bioregulación Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_9.png" /> Área forestal<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_10.png" /> Área Industrial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_11.png" /> Áreas Verdes Afectadas<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_12.png" /> Áreas Verdes y de Recreación<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_13.png" /> Residencial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_8_14.png" /> <br />'
        });
var format_Rios_9 = new ol.format.GeoJSON();
var features_Rios_9 = format_Rios_9.readFeatures(json_Rios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Rios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_9.addFeatures(features_Rios_9);
var lyr_Rios_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_9, 
                style: style_Rios_9,
                interactive: true,
                title: '<img src="styles/legend/Rios_9.png" /> Rios'
            });
var format_Circuito_Ciclovia_10 = new ol.format.GeoJSON();
var features_Circuito_Ciclovia_10 = format_Circuito_Ciclovia_10.readFeatures(json_Circuito_Ciclovia_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Circuito_Ciclovia_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuito_Ciclovia_10.addFeatures(features_Circuito_Ciclovia_10);
var lyr_Circuito_Ciclovia_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Circuito_Ciclovia_10, 
                style: style_Circuito_Ciclovia_10,
                interactive: true,
    title: 'Circuito_Ciclovia<br />\
    <img src="styles/legend/Circuito_Ciclovia_10_0.png" /> <br />\
    <img src="styles/legend/Circuito_Ciclovia_10_1.png" /> Existente<br />\
    <img src="styles/legend/Circuito_Ciclovia_10_2.png" /> Posible Trazo<br />'
        });
var format_Coaster_11 = new ol.format.GeoJSON();
var features_Coaster_11 = format_Coaster_11.readFeatures(json_Coaster_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Coaster_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coaster_11.addFeatures(features_Coaster_11);
var lyr_Coaster_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coaster_11, 
                style: style_Coaster_11,
                interactive: true,
                title: '<img src="styles/legend/Coaster_11.png" /> Coaster'
            });
var format_Micros_12 = new ol.format.GeoJSON();
var features_Micros_12 = format_Micros_12.readFeatures(json_Micros_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Micros_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Micros_12.addFeatures(features_Micros_12);
var lyr_Micros_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Micros_12, 
                style: style_Micros_12,
                interactive: true,
                title: '<img src="styles/legend/Micros_12.png" /> Micros'
            });
var format_TaxiTrufi_13 = new ol.format.GeoJSON();
var features_TaxiTrufi_13 = format_TaxiTrufi_13.readFeatures(json_TaxiTrufi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_TaxiTrufi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TaxiTrufi_13.addFeatures(features_TaxiTrufi_13);
var lyr_TaxiTrufi_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TaxiTrufi_13, 
                style: style_TaxiTrufi_13,
                interactive: true,
                title: '<img src="styles/legend/TaxiTrufi_13.png" /> TaxiTrufi'
            });
var format_Trufis_14 = new ol.format.GeoJSON();
var features_Trufis_14 = format_Trufis_14.readFeatures(json_Trufis_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Trufis_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trufis_14.addFeatures(features_Trufis_14);
var lyr_Trufis_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trufis_14, 
                style: style_Trufis_14,
                interactive: true,
                title: '<img src="styles/legend/Trufis_14.png" /> Trufis'
            });
var format_Lmites_Distritales_15 = new ol.format.GeoJSON();
var features_Lmites_Distritales_15 = format_Lmites_Distritales_15.readFeatures(json_Lmites_Distritales_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Lmites_Distritales_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmites_Distritales_15.addFeatures(features_Lmites_Distritales_15);
var lyr_Lmites_Distritales_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmites_Distritales_15, 
                style: style_Lmites_Distritales_15,
                interactive: true,
                title: '<img src="styles/legend/Lmites_Distritales_15.png" /> Límites_Distritales'
            });
var format_OTB_Cercado_2015_16 = new ol.format.GeoJSON();
var features_OTB_Cercado_2015_16 = format_OTB_Cercado_2015_16.readFeatures(json_OTB_Cercado_2015_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_OTB_Cercado_2015_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTB_Cercado_2015_16.addFeatures(features_OTB_Cercado_2015_16);
var lyr_OTB_Cercado_2015_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTB_Cercado_2015_16, 
                style: style_OTB_Cercado_2015_16,
                interactive: true,
                title: '<img src="styles/legend/OTB_Cercado_2015_16.png" /> OTB_Cercado_2015'
            });
var format_Snd_Ciclovia2_17 = new ol.format.GeoJSON();
var features_Snd_Ciclovia2_17 = format_Snd_Ciclovia2_17.readFeatures(json_Snd_Ciclovia2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Snd_Ciclovia2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Snd_Ciclovia2_17.addFeatures(features_Snd_Ciclovia2_17);
var lyr_Snd_Ciclovia2_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Snd_Ciclovia2_17, 
                style: style_Snd_Ciclovia2_17,
                interactive: true,
    title: 'Snd_Ciclovia2<br />\
    <img src="styles/legend/Snd_Ciclovia2_17_0.png" /> Hombre<br />\
    <img src="styles/legend/Snd_Ciclovia2_17_1.png" /> Mujer<br />'
        });
var format_Snd_Ciclovia1_18 = new ol.format.GeoJSON();
var features_Snd_Ciclovia1_18 = format_Snd_Ciclovia1_18.readFeatures(json_Snd_Ciclovia1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Snd_Ciclovia1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Snd_Ciclovia1_18.addFeatures(features_Snd_Ciclovia1_18);
var lyr_Snd_Ciclovia1_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Snd_Ciclovia1_18, 
                style: style_Snd_Ciclovia1_18,
                interactive: true,
    title: 'Snd_Ciclovia1<br />\
    <img src="styles/legend/Snd_Ciclovia1_18_0.png" /> Hombre<br />\
    <img src="styles/legend/Snd_Ciclovia1_18_1.png" /> Mujer<br />'
        });
var format_Grilla_1K38_19 = new ol.format.GeoJSON();
var features_Grilla_1K38_19 = format_Grilla_1K38_19.readFeatures(json_Grilla_1K38_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Grilla_1K38_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grilla_1K38_19.addFeatures(features_Grilla_1K38_19);
var lyr_Grilla_1K38_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grilla_1K38_19, 
                style: style_Grilla_1K38_19,
                interactive: true,
    title: 'Grilla_1K (38)<br />\
    <img src="styles/legend/Grilla_1K38_19_0.png" /> 0<br />\
    <img src="styles/legend/Grilla_1K38_19_1.png" /> 1<br />\
    <img src="styles/legend/Grilla_1K38_19_2.png" /> 2<br />\
    <img src="styles/legend/Grilla_1K38_19_3.png" /> 3<br />\
    <img src="styles/legend/Grilla_1K38_19_4.png" /> 4<br />\
    <img src="styles/legend/Grilla_1K38_19_5.png" /> 5<br />\
    <img src="styles/legend/Grilla_1K38_19_6.png" /> 6<br />\
    <img src="styles/legend/Grilla_1K38_19_7.png" /> <br />'
        });
var format_Buffer_Puntos_400m_20 = new ol.format.GeoJSON();
var features_Buffer_Puntos_400m_20 = format_Buffer_Puntos_400m_20.readFeatures(json_Buffer_Puntos_400m_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Buffer_Puntos_400m_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Puntos_400m_20.addFeatures(features_Buffer_Puntos_400m_20);
var lyr_Buffer_Puntos_400m_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Puntos_400m_20, 
                style: style_Buffer_Puntos_400m_20,
                interactive: true,
                title: '<img src="styles/legend/Buffer_Puntos_400m_20.png" /> Buffer_Puntos_400m'
            });
var format_Puntos_Muestreo_21 = new ol.format.GeoJSON();
var features_Puntos_Muestreo_21 = format_Puntos_Muestreo_21.readFeatures(json_Puntos_Muestreo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Puntos_Muestreo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Muestreo_21.addFeatures(features_Puntos_Muestreo_21);
var lyr_Puntos_Muestreo_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Muestreo_21, 
                style: style_Puntos_Muestreo_21,
                interactive: true,
                title: '<img src="styles/legend/Puntos_Muestreo_21.png" /> Puntos_Muestreo'
            });
var group_LIMITESADMINISTRATIVOS = new ol.layer.Group({
                                layers: [lyr_Lmites_Distritales_15,lyr_OTB_Cercado_2015_16,],
                                title: "LIMITES ADMINISTRATIVOS"});
var group_TRANSPORTE = new ol.layer.Group({
                                layers: [lyr_Circuito_Ciclovia_10,lyr_Coaster_11,lyr_Micros_12,lyr_TaxiTrufi_13,lyr_Trufis_14,],
                                title: "TRANSPORTE"});
var group_HIDROGRAFA = new ol.layer.Group({
                                layers: [lyr_Rios_9,],
                                title: "HIDROGRAFÍA"});
var group_AREASVERDES = new ol.layer.Group({
                                layers: [lyr_Areas_Verdes_PTDI2016_8,],
                                title: "AREAS VERDES"});
var group_ASPECTOSSOCIALES = new ol.layer.Group({
                                layers: [lyr_Densidad_Poblacin_habha_7,],
                                title: "ASPECTOS SOCIALES"});
var group_ASPECTOSNATURALES = new ol.layer.Group({
                                layers: [lyr_DEM_Cbba_Clasificado_5,lyr_Relieve_6,],
                                title: "ASPECTOS NATURALES"});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_StamenWatercolor_0,lyr_Stamen_1,lyr_OpenStreetMap_2,lyr_GoogleSatellite_3,lyr_GoogleMaps_4,],
                                title: "MAPAS BASE"});

lyr_StamenWatercolor_0.setVisible(true);lyr_Stamen_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleMaps_4.setVisible(true);lyr_DEM_Cbba_Clasificado_5.setVisible(true);lyr_Relieve_6.setVisible(true);lyr_Densidad_Poblacin_habha_7.setVisible(true);lyr_Areas_Verdes_PTDI2016_8.setVisible(true);lyr_Rios_9.setVisible(true);lyr_Circuito_Ciclovia_10.setVisible(true);lyr_Coaster_11.setVisible(true);lyr_Micros_12.setVisible(true);lyr_TaxiTrufi_13.setVisible(true);lyr_Trufis_14.setVisible(true);lyr_Lmites_Distritales_15.setVisible(true);lyr_OTB_Cercado_2015_16.setVisible(true);lyr_Snd_Ciclovia2_17.setVisible(true);lyr_Snd_Ciclovia1_18.setVisible(true);lyr_Grilla_1K38_19.setVisible(true);lyr_Buffer_Puntos_400m_20.setVisible(true);lyr_Puntos_Muestreo_21.setVisible(true);
var layersList = [group_MAPASBASE,group_ASPECTOSNATURALES,group_ASPECTOSSOCIALES,group_AREASVERDES,group_HIDROGRAFA,group_TRANSPORTE,group_LIMITESADMINISTRATIVOS,lyr_Snd_Ciclovia2_17,lyr_Snd_Ciclovia1_18,lyr_Grilla_1K38_19,lyr_Buffer_Puntos_400m_20,lyr_Puntos_Muestreo_21];
lyr_Densidad_Poblacin_habha_7.set('fieldAliases', {'manzanas': 'manzanas', 'poblacion': 'poblacion', 'viviendas': 'viviendas', 'agua': 'agua', 'electricid': 'electricid', 'alcantaril': 'alcantaril', 'NBI': 'NBI', 'cos': 'cos', 'm2': 'm2', 'SUPERFICIE': 'SUPERFICIE', 'Densidad_P': 'Densidad_P', 'hab_ha': 'hab_ha', });
lyr_Areas_Verdes_PTDI2016_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Uso_Suelo': 'Uso_Suelo', });
lyr_Rios_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DREN_CUENC': 'DREN_CUENC', 'ELEVATION': 'ELEVATION', 'RIOS_PNT': 'RIOS_PNT', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Name': 'Name', });
lyr_Circuito_Ciclovia_10.set('fieldAliases', {'Id': 'Id', 'KM': 'KM', });
lyr_Coaster_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'linea': 'linea', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Micros_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'linea': 'linea', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TaxiTrufi_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'linea': 'linea', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Trufis_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'linea': 'linea', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Lmites_Distritales_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'ADDRESS': 'ADDRESS', 'NRO_TEL': 'NRO_TEL', 'SHAPE_LENG': 'SHAPE_LENG', 'DISTRITO': 'DISTRITO', 'DISTRITO_1': 'DISTRITO_1', 'HA': 'HA', 'NOMBRE_D': 'NOMBRE_D', });
lyr_OTB_Cercado_2015_16.set('fieldAliases', {'FID_otbs22': 'FID_otbs22', 'OTB_D9': 'OTB_D9', });
lyr_Snd_Ciclovia2_17.set('fieldAliases', {'Cod': 'Cod', 'id': 'id', '1_Sexo': '1_Sexo', '2_Edad': '2_Edad', '5_Direccio': '5_Direccio', '6_Vive_cer': '6_Vive_cer', '10_ingreso': '10_ingreso', '11_salida': '11_salida', '14_lug_agr': '14_lug_agr', '15_lug_des': '15_lug_des', });
lyr_Snd_Ciclovia1_18.set('fieldAliases', {'Codigo': 'Codigo', 'id': 'id', '1_Sexo': '1_Sexo', '2_Edad': '2_Edad', '5_Direccio': '5_Direccio', '6_Vive_cer': '6_Vive_cer', '10_ingreso': '10_ingreso', '11_salida': '11_salida', '14_lug_agr': '14_lug_agr', '15_lug_des': '15_lug_des', });
lyr_Grilla_1K38_19.set('fieldAliases', {'Id': 'Id', 'Numeracion': 'Numeracion', 'Seleccion': 'Seleccion', 'Muestreo': 'Muestreo', });
lyr_Buffer_Puntos_400m_20.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Puntos_Muestreo_21.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', });
lyr_Densidad_Poblacin_habha_7.set('fieldImages', {'manzanas': 'TextEdit', 'poblacion': 'TextEdit', 'viviendas': 'TextEdit', 'agua': 'TextEdit', 'electricid': 'TextEdit', 'alcantaril': 'TextEdit', 'NBI': 'TextEdit', 'cos': 'TextEdit', 'm2': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Densidad_P': 'TextEdit', 'hab_ha': 'Range', });
lyr_Areas_Verdes_PTDI2016_8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Uso_Suelo': 'TextEdit', });
lyr_Rios_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'DREN_CUENC': 'TextEdit', 'ELEVATION': 'TextEdit', 'RIOS_PNT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Name': 'TextEdit', });
lyr_Circuito_Ciclovia_10.set('fieldImages', {'Id': 'TextEdit', 'KM': 'TextEdit', });
lyr_Coaster_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'linea': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Micros_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'linea': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TaxiTrufi_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'linea': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Trufis_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'linea': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Lmites_Distritales_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'ADDRESS': 'TextEdit', 'NRO_TEL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_1': 'TextEdit', 'HA': 'TextEdit', 'NOMBRE_D': 'TextEdit', });
lyr_OTB_Cercado_2015_16.set('fieldImages', {'FID_otbs22': 'Range', 'OTB_D9': 'TextEdit', });
lyr_Snd_Ciclovia2_17.set('fieldImages', {'Cod': 'Range', 'id': 'TextEdit', '1_Sexo': 'TextEdit', '2_Edad': 'TextEdit', '5_Direccio': 'TextEdit', '6_Vive_cer': 'TextEdit', '10_ingreso': 'TextEdit', '11_salida': 'TextEdit', '14_lug_agr': 'TextEdit', '15_lug_des': 'TextEdit', });
lyr_Snd_Ciclovia1_18.set('fieldImages', {'Codigo': 'Range', 'id': 'TextEdit', '1_Sexo': 'TextEdit', '2_Edad': 'TextEdit', '5_Direccio': 'TextEdit', '6_Vive_cer': 'TextEdit', '10_ingreso': 'TextEdit', '11_salida': 'TextEdit', '14_lug_agr': 'TextEdit', '15_lug_des': 'TextEdit', });
lyr_Grilla_1K38_19.set('fieldImages', {'Id': '', 'Numeracion': '', 'Seleccion': '', 'Muestreo': '', });
lyr_Buffer_Puntos_400m_20.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': 'Range', 'OTB': 'TextEdit', 'Distrito': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Puntos_Muestreo_21.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': '', 'OTB': '', 'Distrito': '', });
lyr_Densidad_Poblacin_habha_7.set('fieldLabels', {});
lyr_Areas_Verdes_PTDI2016_8.set('fieldLabels', {});
lyr_Rios_9.set('fieldLabels', {});
lyr_Circuito_Ciclovia_10.set('fieldLabels', {});
lyr_Coaster_11.set('fieldLabels', {});
lyr_Micros_12.set('fieldLabels', {});
lyr_TaxiTrufi_13.set('fieldLabels', {});
lyr_Trufis_14.set('fieldLabels', {});
lyr_Lmites_Distritales_15.set('fieldLabels', {});
lyr_OTB_Cercado_2015_16.set('fieldLabels', {});
lyr_Snd_Ciclovia2_17.set('fieldLabels', {'Cod': 'inline label', 'id': 'no label', '1_Sexo': 'no label', '2_Edad': 'inline label', '5_Direccio': 'inline label', '6_Vive_cer': 'inline label', '10_ingreso': 'inline label', '11_salida': 'inline label', '14_lug_agr': 'inline label', '15_lug_des': 'inline label', });
lyr_Snd_Ciclovia1_18.set('fieldLabels', {'Codigo': 'inline label', 'id': 'no label', '1_Sexo': 'no label', '2_Edad': 'inline label', '5_Direccio': 'inline label', '6_Vive_cer': 'inline label', '10_ingreso': 'inline label', '11_salida': 'inline label', '14_lug_agr': 'inline label', '15_lug_des': 'inline label', });
lyr_Grilla_1K38_19.set('fieldLabels', {'Id': 'inline label', 'Numeracion': 'no label', 'Seleccion': 'no label', 'Muestreo': 'no label', });
lyr_Buffer_Puntos_400m_20.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'Data_Log': 'no label', 'Corredor': 'no label', 'OTB': 'no label', 'Distrito': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Puntos_Muestreo_21.set('fieldLabels', {'Id': 'inline label', 'Name': 'inline label', 'X_Este': 'inline label', 'Y_Norte': 'inline label', 'Prioridad': 'no label', 'Zona': 'inline label', 'Data_Log': 'no label', 'Corredor': 'no label', 'OTB': 'inline label', 'Distrito': 'inline label', });
lyr_Puntos_Muestreo_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});