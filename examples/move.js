const addon = require('../index');

addon.startScp(JSON.stringify(
    {
        "source": {
            "aet": "IMEBRA",
            "ip" : "127.0.0.1",
            "port": "9999"
        },
	"storagePath": "./data"
    }   
    ), (result) => {
        if (result && result.length > 0) {
            try
            {
                console.log(JSON.parse(result));
            }
            catch (e) {
                console.log(e, result);
            }
        }
});

setTimeout(function() {
    addon.moveScu(JSON.stringify(
        {
            "source": {
                "aet": "IMEBRA",
                "ip" : "127.0.0.1",
                "port": "9999"
            },
            "target": {
                "aet": "CONQUESTSRV1",
                "ip" : "127.0.0.1",
                "port": "5678"
            },
            "tags" : [
                {
                    "key": "0020000D", 
                    "value": "1.3.46.670589.11.0.1.1996082307380006",
                },
                {
                    "key": "00080052", 
                    "value": "STUDY",
                },
            ],
            "destination" : "IMEBRA"
        }
    ), (result) => {
        if (result && result.length > 0) {
            try
            {
                console.log(JSON.parse(result));
            }
            catch (e) {
                console.log(e, result);
            }
        }
    });

    
}, 3000);
