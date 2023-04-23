import { bubbleSort } from ".";


 function SortingApi(sortingFunction, list, htmlCollectionBars, color){
    switch (sortingFunction) {
        case 'bubble-sort':
            bubbleSort([...list], htmlCollectionBars, color);
            break;
        default:
            console.log('other')
            break;
    }
}

export default SortingApi