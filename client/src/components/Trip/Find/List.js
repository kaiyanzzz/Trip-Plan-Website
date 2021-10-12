import React from 'react';
import  { useCallback,useEffect,useState } from 'react';
import { getOriginalServerUrl, sendAPIRequest }  from '../../../utils/restfulAPI';
import bookmark from '../../../static/images/bookmark-plus-fill.svg';
import { Button } from 'reactstrap';

export default function display(props) {

    // this part for sending the findrequest.
    const [places,setPlaces] = useState([]);
    const sendFindRequest = useCallback(async() => {
        
        const serverUrl = getOriginalServerUrl();
        const findResponse = await sendAPIRequest({ requestType: "find", match:props.match, limit: 10 }, serverUrl);
        if(findResponse) {   
            setPlaces(findResponse.places);
            console.log(findResponse);
        }
        else {
            setPlaces(null);
            showMessage('Find Request failed with' + findResponse + '.', "error");
        }

      },[])

      useEffect(() => {
        sendFindRequest()
      }, [sendFindRequest])


// this part for render the found place.
    return(
        <div className='List'>
            {places.map((place) => (
                <div key={place.index}>
                    <ul><Button color='primary' onClick={() => props.placeActions.append(place)}><img src={bookmark} alt='add'/> Add </Button>
                    <div><b>Name:</b> {place.name}</div>
                    <div><b>Latitude:</b> {place.latitude}</div>
                    <div><b>Longitude:</b> {place.longitude}</div>
                    <div><b>Country:</b> {place.country}</div></ul>
                </div>
            ))}
        </div>
    );
}