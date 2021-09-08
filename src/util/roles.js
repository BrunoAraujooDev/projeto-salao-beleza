

export const enumRole = role => {
    const mapRole = {
        authenticated: 1,
        client: 2
    };

    return mapRole[role];
}