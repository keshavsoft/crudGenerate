import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../Config.json' assert { type: 'json' };

let StartFunc = (inDataToInsert) => {
    let LocalinDataToInsert = inDataToInsert;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.JsonPath}/{{sample}}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);
    db.read();

    db.data.push(LocalinDataToInsert);
    db.write();

    LocalReturnData.KTF = true;

    return LocalReturnData;
};

export { StartFunc };
