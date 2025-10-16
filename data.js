var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-frontal",
      "name": "Vista Frontal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1584546140647749,
        "pitch": 0.3376744824303657,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -0.9957046513263457,
          "pitch": 0.07481675794568332,
          "rotation": 0,
          "target": "1-vista-lateral"
        },
        {
          "yaw": 1.7241034428218347,
          "pitch": -0.05062088478085158,
          "rotation": 0,
          "target": "2-vista-servidumbre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vista-lateral",
      "name": "Vista Lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06911503837897115,
        "pitch": 0.5345231454922281,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": 0.6775293639340934,
          "pitch": 0.2039856649025893,
          "rotation": 3.9269908169872414,
          "target": "0-vista-frontal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vista-servidumbre",
      "name": "Vista Servidumbre.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.18802824469349133,
        "pitch": 0.17884435281846933,
        "fov": 0.8145758437623842
      },
      "linkHotspots": [
        {
          "yaw": -0.6847028303801501,
          "pitch": 0.32572028863303615,
          "rotation": 1.5707963267948966,
          "target": "0-vista-frontal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Casa Santa Lucia Tabio.",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
