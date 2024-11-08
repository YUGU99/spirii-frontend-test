import {LocationProps} from "../component/location";

const locationResponse: { locations: LocationProps[] } =
    {
        locations: [{
            locationId: 4026,
            address: {
                name: "Kikhanebakken - LB",
                street: "Kikhanebakken 35",
                zipCode: "2852",
                city: "Nærum",
                countryISO: "DK"
            },
            coordinates: {
                lat: 55.9121551,
                lon: 12.4431991
            },
            connectorType: "sType2",
            status: "Available",
            maxPower: 22,
            public: false,
            type: "spirii"
        },
            {
                locationId: 1003,
                address: {
                    name: "Hegnsvej",
                    street: "Hegnsvej 183s",
                    zipCode: "2852",
                    city: "Nærum",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.8111551,
                    lon: 12.5431991
                },
                connectorType: "sType2",
                status: "Suspended",
                maxPower: 11,
                public: false,
                type: "spirii"
            },
            {
                locationId: 3043,
                address: {
                    name: "Gassehaven - LB",
                    street: "Gassehaven 56",
                    zipCode: "2840",
                    city: "Holte",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.832831,
                    lon: 12.514367
                },
                connectorType: "sType2",
                status: "Available",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: 3092,
                address: {
                    name: "Gassehaven",
                    street: "Gassehaven 22",
                    zipCode: "2840",
                    city: "Holte",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.833146,
                    lon: 12.514808
                },
                connectorType: "sType2",
                status: "Available",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: 3640,
                address: {
                    name: "Søllerødgårdsvej - FDM",
                    street: "Søllerødgårdsvej 7",
                    zipCode: "2840",
                    city: "Holte",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.812864,
                    lon: 12.499961
                },
                connectorType: "sType2",
                status: "In use",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: 2533,
                address: {
                    name: "Struensee - FDM",
                    street: "Struensee Alle 8",
                    zipCode: "2840",
                    city: "Holte",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.8149106,
                    lon: 12.49913628
                },
                connectorType: "sType2",
                maxPower: 55,
                public: false,
                type: "spirii"
            },
            {
                locationId: 4413,
                address: {
                    name: "Aldersrovej - FDM",
                    street: "Aldersrovej 17",
                    zipCode: "2950",
                    city: "Vedbæk",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.83421468,
                    lon: 12.54293733
                },
                connectorType: "sType2",
                status: "Available",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: 3791,
                address: {
                    name: "Nøjsomhedsvej - FDM",
                    street: "Nøjsomhedsvej 27B",
                    zipCode: "2800",
                    city: "Lyngby",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.797197,
                    lon: 12.517747
                },
                connectorType: "sType2",
                status: "In use",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: 3164,
                address: {
                    name: "Mothsvej - FDM",
                    street: "Mothsvej 38",
                    zipCode: "2840",
                    city: "Holte",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.809284,
                    lon: 12.499973
                },
                connectorType: "sType2",
                status: "Available",
                maxPower: 22,
                public: false,
                type: "spirii"
            },
            {
                locationId: "DK*CLE-55.8350-12.5454",
                address: {
                    name: "Pankas A/S",
                    street: "Rundforbivej 34",
                    zipCode: "2950",
                    city: "Vedbæk",
                    countryISO: "DK"
                },
                coordinates: {
                    lat: 55.834999,
                    lon: 12.545368
                },
                connectorType: "sType2",
                status: "Available",
                maxPower: 11,
                public: true,
                type: "hubject"
            }
        ],
    };

export default locationResponse;
