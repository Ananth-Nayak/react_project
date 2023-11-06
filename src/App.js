
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";   //default import

import { Title } from "./components/Header";  //Named import

//we can also import all the components like import * as obj from "______"
//then we use like obj.Title or obj.Header



const restaurantList=[
    {
        info: {
          id: "206770",
          name: "Vaishali Restaurant",
          cloudinaryImageId: "pxq9ca9s0z1rgjyqspv0",
          areaName: "Kundapura-Koteshwar",
          costForTwo: "₹200 for two",
          cuisines: [
            "Chinese",
            "North Indian",
            "South Indian",
            "Ice Cream",
            "Biryani"
          ],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "206770",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            totalFee: 1400
          },
          parentId: "220977",
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 0.4,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "0.4 km",
            iconType: "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/vaishali-restaurant-kundapura-koteshwar-manipal-206770",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "737847",
          name: "Paakashala",
          cloudinaryImageId: "c49f74c4c8c4098a384c511817d7ebdf",
          "locality": "kundapura main road",
          "areaName": "Kundapura",
          "costForTwo": "₹500 for two",
          cuisines: [
            "Indian"
          ],
          avgRating: 4,
          "feeDetails": {
            "restaurantId": "737847",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "6959",
          "avgRatingString": "4.0",
          "totalRatingsString": "6",
          "sla": {
            "deliveryTime": 17,
            "lastMileTravel": 0.3,
            "serviceability": "SERVICEABLE",
            "slaString": "17 mins",
            "lastMileTravelString": "0.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/paakashala-main-road-kundapura-manipal-737847",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "634569",
          name: "Shetty Lunch Home",
          cloudinaryImageId: "syoxn5jpbbmuoddqyh5g",
          "areaName": "Kundapura",
          "costForTwo": "₹300 for two",
          cuisines: [
            "Chinese",
            "South Indian",
            "Mangalorean"
          ],
          avgRating: 4.3,
          "feeDetails": {
            "restaurantId": "634569",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "12478",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/shetty-lunch-home-kundapura-manipal-634569",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "648359",
          name: "Diplomate Delux",
          "cloudinaryImageId": "ee75554c89cc9c398fa6e73d1200ab04",
          "areaName": "Kundapura-Koteshwar",
          "costForTwo": "₹300 for two",
          cuisines: [
            "North Indian",
            "South Indian",
            "Chinese",
            "Biryani",
            "  Sea  food",
            "Mangalorean"
          ],
          avgRating: 4.3,
          "feeDetails": {
            "restaurantId": "648359",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "390577",
          "avgRatingString": "4.3",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/diplomate-delux-kundapura-koteshwar-manipal-648359",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "662969",
          name: "Hotel Swadisht",
          cloudinaryImageId: "e565c4ad2e3450129c54c8d333557bdc",
          "locality": "Shastri Circle",
          "areaName": "Kundapura",
          "costForTwo": "₹400 for two",
          cuisines: [
            "South Indian",
            "Chinese",
            "North Indian",
            "Tandoor",
            "Indian",
            " Beverages"
          ],
          avgRating: 4.2,
          "feeDetails": {
            "restaurantId": "662969",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "397663",
          "avgRatingString": "4.2",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 18,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-swadisht-shastri-circle-kundapura-manipal-662969",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "206772",
          name: "Hotel Hariprasad (Non Veg)",
          cloudinaryImageId: "atn35szysj0vjxabey10",
          "areaName": "Kundapura-Koteshwar",
          "costForTwo": "₹250 for two",
          cuisines: [
            "Chinese",
            "North Indian",
            "South Indian",
            "Ice Cream",
            "Biryani"
          ],
          avgRating: 4.1,
          "feeDetails": {
            "restaurantId": "206772",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "99279",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 0.5,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "0.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-hariprasad-non-veg-kundapura-koteshwar-manipal-206772",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "650308",
          name: "Hot Chix",
          cloudinaryImageId: "58fbe4afe827b6be4b8be2d5ae5a8f5d",
          "locality": "Koteshwara",
          "areaName": "Kundapura",
          "costForTwo": "₹300 for two",
          cuisines: [
            "South Indian",
            "Chinese",
            "Thalis"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "650308",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2400
          },
          "parentId": "12442",
          "avgRatingString": "4.0",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "39 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hot-chix-koteshwara-kundapura-manipal-650308",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "206865",
          name: "COSTA'S Cake Shop",
          cloudinaryImageId: "al78sgqkozktbel6gl8u",
          "locality": "Shastri Circle",
          "areaName": "Kundapura",
          "costForTwo": "₹200 for two",
          cuisines: [
            "Desserts",
            "North Indian",
            "Burgers",
            "Ice Cream",
            "Pizzas",
            "Biryani"
          ],
          avgRating: 3.9,
          "feeDetails": {
            "restaurantId": "206865",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 1400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 1400
          },
          "parentId": "65339",
          "avgRatingString": "3.9",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 21:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/costas-cake-shop-shastri-circle-kundapura-manipal-206865",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        info: {
          id: "743711",
          name: "Kundapura Donne Biryani",
          cloudinaryImageId: "a5e5640a3194c104d792da87fa71596c",
          "locality": "Kundapura",
          "areaName": "Kundapura",
          "costForTwo": "₹400 for two",
          cuisines: [
            "Indian",
            "Biryani",
            "Snacks"
          ],
          "feeDetails": {
            "restaurantId": "743711",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3900
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3900
          },
          "parentId": "441182",
          "avgRatingString": "NEW",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 8.6,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "8.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-07-28 22:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-a76f3a4b-fb5d-46c8-96e4-56c7a6c00f66"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kundapura-donne-biryani-kundapura-manipal-743711",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
    ];


const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{ 
    return (
        <div className="card">
            <img 
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating + " Stars"}</h4>
        </div>
    )
}


const Body=()=>(
<div className="restaurant-list">
{
  restaurantList.map((restaurant)=>(
    <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
  ))
}
</div>
    
)


const Footer=()=>(
    <h4>Footer</h4>
)


const AppLayout=()=>{
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
    
}

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);   


 