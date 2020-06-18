function flat(source) {
    if (!Array.isArray(source)) {
        return source;
    }
    return source.reduce((acc, cur) => {
        const flatted = flat(cur)
        if (Array.isArray(flatted)) {
            acc = [...acc, ...flatted]
        } else {
            acc.push(flatted)
        }
        
        return acc;
    }, [])
}