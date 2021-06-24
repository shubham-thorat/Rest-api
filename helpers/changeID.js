import ID from '../models/idSchema.js'

//number of element in given name(collection_name)
async function changeID(count, name) {
    const IDs = await ID.findOneAndUpdate(
        { collection_name: name },
        { $inc: { lastID: count } },
        { new: true, upsert: true }
    )
    return IDs.lastID;
}
export default changeID