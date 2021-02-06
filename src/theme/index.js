const base = {
    easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};


const dark = {
    id: "dark",
    ...base,
    backgroundColor: "#30475e",
    bodyBackgroundColor: '#222831',
    textColor: '#ececec'
};

const light = {
    id: "light",
    ...base,
    backgroundColor: "#2cb5ba",
    bodyBackgroundColor: 'white',
    textColor: '#fff'
};

export const theme = { dark, light };
