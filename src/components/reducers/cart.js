/* eslint-disable default-case */
const Item1 = 'https://ae01.alicdn.com/kf/Ha86a5a3bd2ef4a9d81156b570e883378n/2019-New-Men-Brand-Hooded-Hoodies-Streetwear-Hip-Hop-Mens-Hoodies-And-Sweatshirts-Solid-Red-Black.jpg_640x640.jpg'
const Item2 = 'https://ae01.alicdn.com/kf/HTB1CpUYRVXXXXXoXFXXq6xXFXXXl/DIY-Circles-Stickers-Indoors-Decoration-Stereo-Removable-3D-Art-Wall-Stickers-Pegatinas-De-Pared-Stickers-Muraux.jpg'
const Item3 = 'https://ae01.alicdn.com/kf/Heebce473aa514af397b8be97d88640f6U/A4-A3-Wooden-Frame-Black-White-Color-Photo-Frames-for-Wall-Art-Picture-Frames-Photo-Frames.jpg'
const Item4 = 'https://ae01.alicdn.com/kf/HTB1b_wvg8TH8KJjy0Fiq6ARsXXae/BONA-New-Arrival-Classics-Style-Men-Hiking-Shoes-Lace-Up-Men-Sport-Shoes-Outdoor-Jogging-Trekking.jpg'
const Item5 = 'https://ae01.alicdn.com/kf/H59e0ba0eb019450285fd1f7e1bcd78abo/Golf-Shoes-Men-s-Sneakers-Sneakers-Anti-Skid-Shoes-Breathable-Wearable-Comfortable-Ultralight-Training-Golf-Sneakers.jpg'
const Item6 = 'https://ae01.alicdn.com/kf/HLB163LlTQvoK1RjSZFNq6AxMVXar/The-hot-spot-Polaroid-photograph-the-Onestep2-VF-of-Rider-s-rainbow-camera-for-once-imaging.jpg'


const initState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    ],
    addedItems: [],
    total: 0

}

const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if (action.type === 'ADD_TO_CART') {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === 'REMOVE') {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if (action.type === 'ADD_QTY') {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === 'SUB_QTY') {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }
    return state
}

export default cartReducer;
