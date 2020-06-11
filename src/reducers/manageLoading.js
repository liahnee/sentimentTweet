export default function manageLoading(
    state = {
    allCelebsLoading: true
}, action) {
    switch (action.type) {
        case 'DONE':
            return { 
                allCelebsLoading:false
            }

        default:
            return state;
    }
}