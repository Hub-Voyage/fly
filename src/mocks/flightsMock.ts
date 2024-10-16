export const flights = [
  {
    type: "flight-offer",
    id: "1",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    isUpsellOffer: false,
    lastTicketingDate: "2024-10-03",
    lastTicketingDateTime: "2024-10-03",
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: "PT7H25M",
        segments: [
          {
            departure: {
              iataCode: "CGH",
              at: "2024-10-03T22:20:00",
            },
            arrival: {
              iataCode: "REC",
              at: "2024-10-04T01:25:00",
            },
            carrierCode: "LA",
            number: "3714",
            aircraft: {
              code: "319",
            },
            operating: {
              carrierCode: "LA",
            },
            duration: "PT3H5M",
            id: "18",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "REC",
              at: "2024-10-04T02:55:00",
            },
            arrival: {
              iataCode: "GIG",
              at: "2024-10-04T05:45:00",
            },
            carrierCode: "LA",
            number: "3871",
            aircraft: {
              code: "321",
            },
            operating: {
              carrierCode: "LA",
            },
            duration: "PT2H50M",
            id: "19",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        duration: "PT10H5M",
        segments: [
          {
            departure: {
              iataCode: "GIG",
              terminal: "2",
              at: "2024-10-14T20:15:00",
            },
            arrival: {
              iataCode: "CNF",
              at: "2024-10-14T21:20:00",
            },
            carrierCode: "LA",
            number: "3670",
            aircraft: {
              code: "320",
            },
            duration: "PT1H5M",
            id: "38",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "CNF",
              at: "2024-10-15T05:00:00",
            },
            arrival: {
              iataCode: "CGH",
              at: "2024-10-15T06:20:00",
            },
            carrierCode: "LA",
            number: "3047",
            aircraft: {
              code: "320",
            },
            duration: "PT1H20M",
            id: "39",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "EUR",
      total: "1436.94",
      base: "1314.00",
      fees: [
        {
          amount: "0.00",
          type: "SUPPLIER",
        },
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1436.94",
      additionalServices: [
        {
          amount: "51.07",
          type: "CHECKED_BAGS",
        },
      ],
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ["LA"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "718.47",
          base: "657.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "18",
            cabin: "ECONOMY",
            fareBasis: "SW0U0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "19",
            cabin: "ECONOMY",
            fareBasis: "SJ0Z0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "38",
            cabin: "ECONOMY",
            fareBasis: "SJTZ0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "39",
            cabin: "ECONOMY",
            fareBasis: "NJTZ0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "N",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
      {
        travelerId: "2",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "EUR",
          total: "718.47",
          base: "657.00",
        },
        fareDetailsBySegment: [
          {
            segmentId: "18",
            cabin: "ECONOMY",
            fareBasis: "SW0U0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "19",
            cabin: "ECONOMY",
            fareBasis: "SJ0Z0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "38",
            cabin: "ECONOMY",
            fareBasis: "SJTZ0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "S",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
          {
            segmentId: "39",
            cabin: "ECONOMY",
            fareBasis: "NJTZ0N1",
            brandedFare: "SL",
            brandedFareLabel: "LIGHT",
            class: "N",
            includedCheckedBags: {
              quantity: 0,
            },
            amenities: [
              {
                description: "FIRST EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "SECOND EXCESS BAG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "THIRD BAG 23KG",
                isChargeable: true,
                amenityType: "BAGGAGE",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "BASIC SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "PREMIUM SEAT RESERVATION",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
              {
                description: "CHANGE BEFORE DEPARTURE",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
                amenityProvider: {
                  name: "BrandedFare",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
