import React from 'react';
import  { useEffect, useState } from 'react';
import { getOriginalServerUrl, sendAPIRequest }  from '../../../utils/restfulAPI';
import { FaPlus } from 'react-icons/fa';
import { Button } from 'reactstrap';

export default function display(props) {

    // this part for sending the findrequest.
    const [flagResponse, setFlagResponse] = useState(true);
    const [places,setPlaces] = useState([]);

    useEffect(() => {
        sendFindRequest()
    }, [props.match])

    async function sendFindRequest() {
        
        const serverUrl = getOriginalServerUrl();
        const findResponse = await sendAPIRequest({ requestType: "find", match:props.match, limit: 10 }, serverUrl);

        checkResponse(findResponse, setFlagResponse, setPlaces);

    };
    
    if (!props.display) {
        return (
            <div></div>
        );
    }

    return(
       placesList(flagResponse, places, props.placeActions)
    );
}

function checkResponse(findResponse, setFlagResponse, setPlaces){
    if(findResponse) {   
        checkFind(findResponse, setFlagResponse, setPlaces);
    }
    else {
        setPlaces(null);
        showMessage('Find Request failed with' + findResponse + '.', "error");
    }
}

function checkFind(findResponse, setFlagResponse, setPlaces){
    if (findResponse.found == 0) {
        setFlagResponse(false);
    }
    setFound(findResponse, setPlaces)
}

function setFound(findResponse, setPlaces){
    setPlaces(findResponse.places);
    //console.log(findResponse);
}

function placesList(flagResponse, places, placeActions){
    return (
        <div className='List'>
            {flagResponse? 
                places.map((place) => (
                     <div key={place.index}>
                        {listElement(placeActions, place)}
                    </div>
                )) : noResult()}
        </div>
    );
}

function listElement(placeActions, place){
    return(
        <ul><Button color='primary' onClick={() => placeActions.append(place)} data-testid="Add"><FaPlus/> Add </Button>
        <div><b>Name:</b> {place.name}</div>
        <div><b>Latitude:</b> {place.latitude}</div>
        <div><b>Longitude:</b> {place.longitude}</div>
        <div><b>Country:</b> {place.country}</div></ul>
    );
}

function noResult(){
    return(
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'20vh'}}> 
            <p> No results found </p> 
        </div>
    );
}