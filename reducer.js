export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQB_XUWxBqaZDatDwrDgImBoqhlADeEuPl1xQE82sSio8_j4Mmd9jlCBsWlsmS_GXoBwX5ydK5bYfCjl5nsdNjLuTioGJSQTirxWno7rGUTcmylnAQMFkdBgCIfcyj0_L1XmBz5LRrwr7z4ch45oPs21'
    // token:null
};

const reducer=(state,action )=>{
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,
                };

            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playlists: action.playlists,
                }; 
                case "SET_DISCOVER_WEEKLY":
                    return{
                        ...state,
                        discover_weekly: action.discover_weekly,
                    };        
            default:
                return state;
    }
};

export default reducer;