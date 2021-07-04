import * as Airtable from 'airtable'
import { devmode } from './../src/helpers/generators';

export const base = new Airtable({ apiKey: "keyl5Wo5ETa4HR4tt" }).base(
    "app33DDBeyXEGRflo"
);

export const create = async (baseName: string = null, items = []) => {

    // Reshape the airtable data passed to the UI:
    const collection = items.map(i => {
        return {
            fields: {
                ...i
            }
        }
    }) as any

    devmode && console.log(`collection`, collection)

    base(baseName).create(
        collection,
        (err, records) => {
            if (err) {
                console.error('ERROR: ', err);
                return;
            }
            records.forEach((record) => {
                console.log(record.getId());
            });
        }
    );
}

export const destroy = async (baseName: string = null, ids = []) => {
    base(baseName).destroy(ids, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export const update = async (baseName: string = null, items = []) => {
    base(baseName).update(items, (err, deletedRecords) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export const findAll = (baseName: string = null, limit = 10) => {

    let result = [];

    base(baseName).select({
        maxRecords: limit,
        view: "Grid view"
    }).eachPage((records, fetchNextPage) => {

        for (let index = 0; index < records.length; index++) {
            const element = records[index];
            result.push(element)
        }

        console.log(`result`, result[0].id)
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
        console.log(`result 2`, result)

    }, function done(err) {
        if (err) { console.error(err); return; }

    });
    console.log(`ret`, result)
    // return ["hello"]
    return result

    // devmode && console.log(`Returning result ... `, result[0])
    // return result
}

export const get = async (baseName: string = null, id = null) => {
    if (!id) return;
    base(baseName).find(id, (err, record) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Retrieved ', record.id)
    })
}

// export type Order = {
//     Cart: [],
//     Buy: boolean,
//     "Count Desired": 0,
// }

// export interface IRound {
//     Name: "",
//     Grain: 0,
//     "Muzzle Velocity": 0,
//     "Found": "",
//     "Caliber": "",
//     "Manufacturer": "",
//     "Diameter": 0.0
// }

// export type RoundType = {
//     Name: "",
//     Grain: 0,
//     "Muzzle Velocity": 0,
//     "Found": "",
//     "Caliber": "",
//     "Manufacturer": "",
//     "Diameter": 0.0
// }

// export class Round implements IRound {
//     constructor(props) {
//         Object.assign(this, props)
//     }
//     Name: '';
//     Grain: 0;
//     "Muzzle Velocity": 0;
//     "Found": '';
//     "Caliber": '';
//     "Manufacturer": '';
//     "Diameter": 0;
// }

// export type Build = {
//     // Idea: is there a way to extract the fields and then match shape w/o types?
// }