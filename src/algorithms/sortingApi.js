import { bubbleSort } from ".";


 function SortingApi(sortingFunction, list, htmlCollectionBars){
    
    switch (sortingFunction) {
        case 'bubble-sort':
            bubbleSort([...list], htmlCollectionBars);
            break;
        default:
            console.log('other')
            break;
    }
}

export default SortingApi