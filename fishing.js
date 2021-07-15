module.exports.config = {
    name: "fishing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Tham gia câu cá ngay trên chính nhóm của bạn",
    commandCategory: "game-mp",
    usages: "help",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "moment-timezone": "",
        "semver": ""
    }
}

module.exports.onLoad = async function () {
    const _0x5f96=['\x6c\x6f\x67','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\u00d4\x4e\x47\x20\x48\u1ed6\x20\x54\x52\u1ee2','\x63\x6c\x69\x65\x6e\x74','\x2f\x6d\x6f\x64\x75\x6c\x65\x73\x2f\x63','\x6f\x6d\x6d\x61\x6e\x64\x73\x2f\x63\x61','\x31\x56\x77\x75\x56\x4e\x41','\x33\x30\x36\x36\x32\x32\x46\x5a\x56\x76\x6a\x4a','\x34\x35\x31\x30\x37\x30\x6d\x47\x4e\x64\x71\x6a','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x20\x4b\x48','\x20\x43\x48\x4f\x20\x53\x4f\x55\x52\x43','\x31\x62\x6d\x7a\x45\x57\x51','\x31\x35\x38\x31\x31\x33\x6f\x51\x72\x6a\x4a\x7a','\x6e\x61\x6d\x65','\x73\x65\x6d\x76\x65\x72','\x33\x33\x36\x30\x34\x33\x64\x51\x52\x75\x44\x79','\x33\x31\x37\x31\x36\x35\x4d\x77\x72\x75\x47\x53','\x66\x73\x2d\x65\x78\x74\x72\x61','\x67\x44\x61\x74\x61\x2f','\x32\x33\x32\x34\x36\x31\x39\x58\x46\x6c\x45\x73\x73','\x72\x6f\x64\x44\x61\x74\x61','\x70\x61\x72\x73\x65','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x32\x73\x48\x57\x6c\x6b\x43','\x63\x6f\x6e\x66\x69\x67','\x70\x75\x73\x68','\x64\x61\x74\x61','\x75\x74\x69\x6c\x73','\x66\x69\x73\x68\x44\x61\x74\x61','\x63\x68\x65\x2f\x46\x69\x73\x68\x69\x6e','\x31\x2e\x32\x2e\x38','\x73\x6f\x6e','\x72\x65\x63\x75\x72\x73\x69\x76\x65','\x76\x65\x72\x73\x69\x6f\x6e','\x61\x73\x73\x65\x74\x73','\x45\x20\x43\x4f\x44\x45\x20\x43\u0168\x20','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x52\x4f\x44\x44\x41\x54\x41','\x35\x31\x38\x34\x36\x55\x66\x62\x4b\x4a\x72','\x70\x61\x74\x68','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64'];const _0x3bd5bf=_0x24f1;(function(_0x129c70,_0x14606a){const _0x2a9295=_0x24f1;while(!![]){try{const _0x59bbc1=parseInt(_0x2a9295(0x186))*-parseInt(_0x2a9295(0x185))+parseInt(_0x2a9295(0x18a))*-parseInt(_0x2a9295(0x18f))+-parseInt(_0x2a9295(0x196))*parseInt(_0x2a9295(0x18e))+-parseInt(_0x2a9295(0x17c))+-parseInt(_0x2a9295(0x18b))+-parseInt(_0x2a9295(0x187))+parseInt(_0x2a9295(0x192));if(_0x59bbc1===_0x14606a)break;else _0x129c70['push'](_0x129c70['shift']());}catch(_0x489667){_0x129c70['push'](_0x129c70['shift']());}}}(_0x5f96,-0x11*0xa553+0x2ab1c+-0x2b76*-0x52));const {mkdirSync,existsSync,readFileSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x3bd5bf(0x190)],{resolve}=global[_0x3bd5bf(0x180)][_0x3bd5bf(0x17d)],semver=global[_0x3bd5bf(0x180)][_0x3bd5bf(0x18d)],dirmain=resolve(global[_0x3bd5bf(0x182)][_0x3bd5bf(0x17a)],_0x3bd5bf(0x183)+_0x3bd5bf(0x184)+_0x3bd5bf(0x19c)+_0x3bd5bf(0x191)),local=JSON['\x70\x61\x72\x73\x65'](readFileSync(global[_0x3bd5bf(0x182)]['\x6d\x61\x69\x6e\x50\x61\x74\x68']+('\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a'+_0x3bd5bf(0x19e))));function _0x24f1(_0x1dd94b,_0x47b0a6){return _0x24f1=function(_0x5e4eaf,_0xd361ff){_0x5e4eaf=_0x5e4eaf-(-0x1471+0x11c5+0x422);let _0x430108=_0x5f96[_0x5e4eaf];return _0x430108;},_0x24f1(_0x1dd94b,_0x47b0a6);}if(semver['\x6c\x74'](local[_0x3bd5bf(0x177)],_0x3bd5bf(0x19d)))return console[_0x3bd5bf(0x17f)](_0x3bd5bf(0x188)+_0x3bd5bf(0x181)+_0x3bd5bf(0x189)+_0x3bd5bf(0x179)+'\x3d\x3d\x3d\x3d\x3d\x3d\x3d');const _0x111e59={};_0x111e59[_0x3bd5bf(0x176)]=!![];if(!existsSync(dirmain))mkdirSync(dirmain,_0x111e59);if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this[_0x3bd5bf(0x197)][_0x3bd5bf(0x18c)]]==_0x3bd5bf(0x17e))global[_0x3bd5bf(0x195)+'\x6c\x65'][this[_0x3bd5bf(0x197)][_0x3bd5bf(0x18c)]]={};if(typeof global[_0x3bd5bf(0x195)+'\x6c\x65'][this[_0x3bd5bf(0x197)][_0x3bd5bf(0x18c)]]['\x66\x69\x73\x68\x44\x61\x74\x61']==_0x3bd5bf(0x17e))global[_0x3bd5bf(0x195)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x3bd5bf(0x18c)]][_0x3bd5bf(0x19b)]=[];if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this[_0x3bd5bf(0x197)][_0x3bd5bf(0x18c)]]['\x72\x6f\x64\x44\x61\x74\x61']==_0x3bd5bf(0x17e))global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this[_0x3bd5bf(0x197)][_0x3bd5bf(0x18c)]]['\x72\x6f\x64\x44\x61\x74\x61']=[];global[_0x3bd5bf(0x195)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x3bd5bf(0x18c)]]['\x64\x69\x72\x44\x61\x74\x61']=dirmain||null;if(global[_0x3bd5bf(0x195)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x3bd5bf(0x18c)]]['\x66\x69\x73\x68\x44\x61\x74\x61']['\x6c\x65\x6e\x67\x74\x68']==0x13d9+-0x2*-0x11f6+-0x37c5){const fishData=JSON['\x70\x61\x72\x73\x65'](readFileSync(await global['\x75\x74\x69\x6c\x73']['\x61\x73\x73\x65\x74\x73']['\x64\x61\x74\x61']('\x46\x49\x53\x48\x44\x41\x54\x41')));for(const singleData of fishData)await global[_0x3bd5bf(0x195)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][_0x3bd5bf(0x19b)][_0x3bd5bf(0x198)](singleData);}if(global[_0x3bd5bf(0x195)+'\x6c\x65'][this[_0x3bd5bf(0x197)]['\x6e\x61\x6d\x65']][_0x3bd5bf(0x193)]['\x6c\x65\x6e\x67\x74\x68']==0x1b74+-0x151*-0x5+0x1*-0x2209){const rodData=JSON[_0x3bd5bf(0x194)](readFileSync(await global[_0x3bd5bf(0x19a)][_0x3bd5bf(0x178)][_0x3bd5bf(0x199)](_0x3bd5bf(0x17b))));for(const singleData of rodData)await global[_0x3bd5bf(0x195)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x3bd5bf(0x18c)]][_0x3bd5bf(0x193)][_0x3bd5bf(0x198)](singleData);}return;
}

module.exports.makeEmptySlot = function () {
    var fishingSlot = [];
    for (i = 0; i <9; i++) fishingSlot.push({
        name: "Empty",
        size: 0.0,
        price: 0
    })
    return fishingSlot;
}

module.exports.getRarity = function () {
    return this.getRarityRecursion(Math.floor(Math.random() * Math.floor(100)), -1, 0)
}

module.exports.getFish = function (fishRarity, currentHour) {
    return global.configModule[this.config.name].fishData.filter(fish => fish.time.includes(currentHour) && fish.rarity.includes(fishRarity));
}

module.exports.addToInventory = (dataUser, critter) => {
    try {
        if (dataUser.inventory[dataUser.inventory.length - 1].price != 0 || typeof dataUser.inventory[dataUser.inventory.length - 1].price == "undefined") throw "[ Fishing ] Túi của bạn không còn đủ không gian lưu trữ";
        else {
            for (i = 0; i < dataUser.inventory.length; i++) {
                if (dataUser.inventory[i].price == 0) {
                    dataUser.inventory[i] = critter;
                    i = dataUser.inventory.length;
                }
            }
        }
        return [null, dataUser.inventory];
    }
    catch (error) { return [error, null] }
}

module.exports.getRarityRecursion = function (chance, index, number) {
    const catchChance = {
        'Very Common': 46,
        'Common': 30,
        'Uncommon': 20,
        'Rare': 5,
        'Very Rare': 1
    }
    const rarityList = [
        'Very Common',
        'Common',
        'Uncommon',
        'Rare',
        'Very Rare'
    ]

    if (index === 0 && chance <= catchChance[rarityList[0]]) return rarityList[0]
    else if (index >= rarityList.length - 1 && chance >= catchChance[rarityList[rarityList.length - 1]]) return rarityList[rarityList.length - 1]
    else if (chance > number && chance <= (number + catchChance[rarityList[index + 1]])) return rarityList[index + 1];
    else return this.getRarityRecursion(chance, index + 1, (number + catchChance[rarityList[index + 1]]));
}

module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { increaseMoney, decreaseMoney } = Currencies;
    const { body, threadID, messageID, senderID } = event;
    const { type, dirUser } = handleReply;

    switch (type) {
        case "menushop": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Shop ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 4 || body < 1) return api.sendMessage("[ Fishing Shop ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    var listItems = [], i = 1;
                    for (const item of global.configModule[this.config.name].rodData) listItems.push(`❯ ${i++}/ ${item.name}: ${item.cost}$ - Độ bền: ${item.durability}, thời gian chờ: ${item.cooldown} giây(s)`);
                    return api.sendMessage(`「 Fishing Buy 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n${listItems.join("\n")}`, event.threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "buymenu",
                            dirUser
                        });
                    }, event.messageID);
                }

                case "2": {
                    return api.sendMessage("「 Fishing Buy 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Bán toàn bộ.\n❯ 2/ Bán cá loại 'Rare'.\n❯ 3/ Bán cá loại 'Common'\n❯ 4/ Bán cá loại 'Uncommon'\n❯ 5/ Bán cá loại 'Very common'\n❯ 6/ Bán cá loại 'Very Rare'", threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "sellmenu",
                            dirUser
                        });
                    }, messageID);
                }

                case "3": {
                    return api.sendMessage("「 Fishing Upgrade 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Upgrade inventory - Nâng cấp túi đồ\n❯ 2/ Fix fishing rod - Sửa chữa cần câu của bạn",threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "upgrademenu",
                            dirUser
                        });
                    }, messageID);
                }
            }
        }

        case "buymenu": {
            try {
                if (isNaN(body)) return api.sendMessage("[ Fishing Buy ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                const dataItems = global.configModule[this.config.name].rodData
                if (body > dataItems.length || body < 1) return api.sendMessage("[ Fishing Buy ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const itemUserChoose = dataItems[parseInt(body) - 1];
                if (userMoney < itemUserChoose.cost) return api.sendMessage(`[ Fishing Buy ] Bạn không đủ tiền để có thể mua cần câu mà bạn đã chọn, bạn còn thiếu khoảng ${itemUserChoose.cost - userMoney}$`, threadID, messageID);
                dataUser.fishingrod.rodType = itemUserChoose.rodType;
                dataUser.fishingrod.rodName = itemUserChoose.name;
                dataUser.fishingrod.cooldownTime = itemUserChoose.cooldown;
                dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault = itemUserChoose.durability;
                dataUser.fishingrod.moneyFix = Math.floor(Math.random() * (itemUserChoose.moneyFix[1] - itemUserChoose.moneyFix[0] + 1) + itemUserChoose.moneyFix[0]);
                dataUser.fishingrod.rateBroken = itemUserChoose.rateBroken;
                await decreaseMoney(senderID, itemUserChoose.cost);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                return api.sendMessage(`[ Fishing Buy ] Bạn đã mua thành công "${itemUserChoose.name}" với giá ${itemUserChoose.cost}$`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing Buy ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }

        case "sellmenu": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 6 || body < 1) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8")), index = 0, totalAll = 0;
                        for (item of dataUser.inventory) {
                            totalAll += item.price;
                            dataUser.inventory[index++] = {
                                name: "Empty",
                                size: 0.0,
                                price: 0
                            };
                        }
                        await increaseMoney(senderID, totalAll);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[ Fishing Sell ] Bạn đã bán thành công toàn bộ cá trong túi và thu về được ${totalAll}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[ Fishing Sell ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }

                case "2": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "3": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "4": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "5": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "6": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 
            }
        }

        case "upgrademenu": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 2 || body < 1) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    const dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                    return api.sendMessage(`[ Fishing Upgrage ] Hiện tại bạn đang có ${dataUser.inventory.length + 1} vị trí có thể chứa đồ\nĐể mua thêm vị trí chứa đồ, bạn hãy reply(phản hồi) tin nhắn này số lượng vị trí bạn muốn mua!`, threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "upgradestorage",
                            dirUser
                        });
                    }, messageID);
                }
                
                case "2": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                        let userMoney = (await Currencies.getData(event.senderID)).money;
                        if (dataUser.fishingrod.durability > dataUser.fishingrod.durabilityDefault / 2) return api.sendMessage("[ Fishing Upgrade ] Cần câu của bạn hiện tại vẫn chưa cần sửa chữa", threadID, messageID);
                        if (userMoney < dataUser.fishingrod.moneyFix) return api.sendMessage(`[ Fishing Upgrade ] Bạn không đủ tiền để có thể sửa chữa cần câu của bạn, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                        dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault;
                        await decreaseMoney(senderID, dataUser.fishingrod.moneyFix);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[ Fishing Upgrade ] Bạn đã sửa chữa thành công cần câu với giá ${dataUser.fishingrod.moneyFix}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[ Fishing Upgrade ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }
            }
        }

        case "upgradestorage": {
            try {
                if (isNaN(body)) return api.sendMessage("[ Fishing Upgrade ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                if (body < 0) return api.sendMessage("[ Fishing Upgrade ] Lựa chọn của bạn không phải là số âm!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const moneyOfUpgrade = parseInt(body) * 2000;
                if (userMoney < moneyOfUpgrade) return api.sendMessage(`[ Fishing Upgrade ] Bạn không đủ tiền để có thể mua thêm vị trí chứa đồ, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                for (var i = 0; i < parseInt(body) - 1; i++) dataUser.inventory.push({
                    name: "Empty",
                    size: 0.0,
                    price: 0,
                });
                await decreaseMoney(senderID, moneyOfUpgrade);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                return api.sendMessage(`[ Fishing Upgrade ] Bạn đã mua thành công ${body} vị trí với giá ${moneyOfUpgrade}$!`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing Upgrade ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }
    }
}

module.exports.run = async function ({ event, api, args }) {
    const { readFileSync, writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const moment = global.nodemodule["moment-timezone"];
    const { threadID, messageID, senderID } = event;
    const dirUser = resolve(__dirname, "cache", "fishingData", `${senderID}.json`);

    switch ((args[0] || "").toLowerCase()) {
        case "register":
        case "-r": {
            try {
                if (existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn đã từng đăng ký câu cá tại khu vực này!", threadID, messageID);
                var newData = {};
                newData.fishingrod = {
                    "rodType": 0,
                    "enchantRod": {}
                };
                newData.inventory = this.makeEmptySlot();
                newData.totalCatch = newData.totalMoney = newData.point = newData.lastTimeFishing = 0;
                writeFileSync(dirUser, JSON.stringify(newData, null, 4), "utf-8");
                return api.sendMessage("[ Fishing Register ] Bạn đã đăng ký câu cá thành công!", threadID, messageID);
            } catch { return api.sendMessage("[ Fishing Register ] Đã có xảy ra lỗi không mong muốn!", threadID, messageID) }
        }

        case "shop": {
            if (!existsSync(dirUser)) return api.sendMessage("[ Fishing Shop ] Bạn chưa đăng ký câu cá để có thể sử dụng chức năng mua đồ!", threadID, messageID);
            return api.sendMessage("‏‏‎「 Fishing Shop 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Buy - Mua vật phẩm.\n❯ 2/ Sell - Bán vật phẩm câu được.\n❯ 3/ Upgrade - Nâng cấp vật phẩm.\n❯ 4/ Enchant - Phù phép vật phẩm.", threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "menushop",
                    dirUser
                })
            }, messageID);
        }

        case "inventory":
        case "inv": {
            if (!existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn chưa đăng ký câu cá để có thể sử dụng chức năng mua đồ!", threadID, messageID);
            return api.sendMessage("「 Fishing Shop 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Xem thông số cần câu\n❯ 2/ Xem túi đồ", threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "inventorymenu",
                    dirUser
                })
            }, messageID);
        }
        
        default: {
            try {
                if (!existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn chưa đăng ký câu cá tại khu vực này!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                const dateNow = moment().tz("Asia/Ho_Chi_minh");
                const format = new Intl.NumberFormat();
                if (dataUser.fishingrod.rodType == 0) return api.sendMessage("[ Fishing ] Hiện tại bạn chưa có cần câu, hãy mua cần câu mới và thử lại!", threadID, messageID);
                if (dataUser.fishingrod.durability <= 0) return api.sendMessage("[ Fishing ] Cần câu của bạn đã bị gãy từ trước, hãy sửa chữa lại hoặc mua mới để có thể tiếp tục câu cá", threadID, messageID);
                if (Math.floor((dataUser.fishingrod.cooldownTime) - (dateNow.unix() - dataUser.lastTimeFishing)) > 0) return api.sendMessage("[ Fishing ] Hiện tại bạn đang trong thời gian chờ, vui lòng đợi một chút và sau đó thử lại", threadID, messageID);
                
                const fishRarity = this .getRarity();
                const currentHour = dateNow.hours();
                const fishData = await this.getFish(fishRarity, currentHour);
                if (!fishData) return api.sendMessage("[ Fishing ] Hiện tại trong hồ không có cá để câu", threadID, messageID);

                var caught = fishData[Math.floor(Math.random() * ((fishData.length - 1) - 0 + 1)) + 0];
                caught.size = (typeof caught.size != "array") ? caught.size : (Math.random() * (caught.size[1] - caught.size[0]) + caught.size[0]).toFixed(1);
                dataUser.fishingrod.durability = dataUser.fishingrod.durability - Math.floor(Math.random() * (dataUser.fishingrod.rateBroken[1] - dataUser.fishingrod.rateBroken[0] + 1) + dataUser.fishingrod.rateBroken[0]);
                dataUser.lastTimeFishing = dateNow.unix();
                dataUser.totalCatch += 1;
                dataUser.point += caught.price;
                const [error, inventory] = this.addToInventory(dataUser, caught);
                if (error) return api.sendMessage(error, threadID, messageID);
                dataUser.inventory = inventory;
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");

                return api.sendMessage(`=== Bạn đã bắt được một con: ${caught.name} ===\n\n❯ Kích thước: ${caught.size} cm\n❯ Độ hiếm: ${caught.rarity}\n❯ Số tiền kiếm được: ${format.format(caught.price)}$`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing ] Đã có lỗi xảy ra không mong muốn\n'Tau quên dọn hồ nên cá chết hết rồi bây' - CatalizCS", threadID, messageID) }
        }
    }
}