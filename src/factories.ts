interface ItemFactory {
    (): ItemOptions | { type: ItemTypes.SEPARATOR };
}

const createSeparator_: ItemFactory = () => ({
    type: ItemTypes.SEPARATOR,
});
