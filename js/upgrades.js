export var upgrades = {
    "ciplasplasbook":{
        importance: 1,

        basicCost: 100, // basic cost
        costMultiplier: 0.2, // % adding after every purchase
        needToHaveBefore: {
            // ciplasplasbook: 1
        }, // list of items (IDs) need before purchase "this should be like that: ID: numerRequired"
        useLocalizationsAvailable: false,
        localizationsAvailable: [], //list of localization where you can buy
        maxAmountToBuy: 99999,
        
        addtoClickNum: 1,
        addtoClickMultiplierLocal: 0,
        addtoClickMultiplierGlobal: 0, // 0 means nothing

        showInRightMenu: true,
        rightMenuImg: "",

        obtained: 5 // amount of this item that you already have
    },
};