export var upgrades = {
    // EXAMPLE:
    // "ciplasplasbook":{
    //     importance: 1,  // IMPORTANCE MEANS priority in multipling etc.

    //     basicCost: 100, // basic cost
    //     costMultiplier: 0.2, // % adding after every purchase
    //     useNeedToHaveBefore: false,
    //     needToHaveBefore: {
    //         // ciplasplasbook: 1
    //     }, // list of items (IDs) need before purchase "this should be like that: ID: numerRequired", set to -1 to disable fun
    //         
    //     useLocalizationsAvailable: false, // is var below should be used
    //     localizationsAvailable: [], //list of localization where you can buy
    //     maxAmountToBuy: 99999, // max amount to buy
        
    //     addtoClickNum: 1, // how much you will get after one purchase
    //     addtoClickMultiplierLocal: 0, // Local multiplier (interact only with itself)
    //     addtoClickMultiplierGlobal: 0, // Global multiplier (interact with all items)

    //     showInRightMenu: true, // that means is it will be showed in the right panel named "shop"
    //     rightMenuImg: "", // image for this

    //     obtained: 5 // amount of this item that you already have
    // },


    "ciplasplasbook":{
        importance: 1,

        basicCost: 25, // basic cost
        costMultiplier: 0.35, // % adding after every purchase
        useNeedToHaveBefore: false,
        needToHaveBefore: {
            // ciplasplasbook: 1
        }, // list of items (IDs) need before purchase "this should be like that: ID: numerRequired"
        useLocalizationsAvailable: false,
        localizationsAvailable: [], //list of localization where you can buy
        maxAmountToBuy: 99999,
        
        addtoClickNum: 0.2,
        addtoClickMultiplierLocal: 0,
        addtoClickMultiplierGlobal: 0, // 0 means nothing

        showInRightMenu: true,
        rightMenuImg: "./img/ciplasplasbook.png",

        obtained: 0 // amount of this item that you already have
    },
};