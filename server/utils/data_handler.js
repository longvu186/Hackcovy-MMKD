const makeResponse = (status="",msg="") => {
    return {
        status,
        msg
    }
}

module.exports.makeResponse = makeResponse;