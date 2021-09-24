

export const enumRole = role => {
    const mapRole = {
        authenticated: 1,
        empreendedor: 2,

    };

    return mapRole[role];
}