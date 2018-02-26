const getUnits = (units) => {
    return `${units * 8}px`;
};

const globalStyles = {
    grid: {
        base: () => {
            return {
                display: 'grid',
            }
        },
        spaceUnits: (units) => {
            return {
                gridColumnGap: getUnits(units),
                gridRowGap: getUnits(units),
            }
        },
        autoFlow: (dir) => {
            return {
                gridAutoFlow: dir,
            }
        },
        gridStarter: (dir, space) => {
            return {
                ...globalStyles.grid.base(),
                ...globalStyles.grid.spaceUnits(space),
                ...globalStyles.grid.autoFlow(dir)
            }
        }
    },
};

export {
    getUnits,
    globalStyles
}