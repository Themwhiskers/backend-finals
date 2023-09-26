const normalizeUser = rawUser => {
    const name = {
        ...rawUser.name,
        middle: rawUser.name.middle || '',
    };
    const address = {
        ...rawUser.address,
        state: rawUser.address.state || 'Unavailable',
    };
    const image = {
        ...rawUser.image,
        url: rawUser.image.url || 'https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg',
        alt: rawUser.image.alt || 'No accessibility data available',
    };
    const user = {
        ...rawUser,
        name,
        address,
        image,
    };
};

module.exports = normalizeUser;