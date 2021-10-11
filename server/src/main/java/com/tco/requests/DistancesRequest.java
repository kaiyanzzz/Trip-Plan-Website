package com.tco.requests;

import java.util.ArrayList;

import com.tco.misc.Place;
import com.tco.misc.Places;
import com.tco.misc.Distances;

import com.tco.misc.BadRequestException;

public class DistancesRequest extends Request {

    private Places places; 
    private Integer earthRadius;
    private ArrayList<Integer> distances;

    @Override
    public void buildResponse() throws BadRequestException {
        Distances distanceList = new Distances(places, earthRadius);
        distances = distanceList.computeDistances();
    }

    /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */
    
    public DistancesRequest() {
        this.requestType = "distances";
        this.earthRadius = -2;
        this.distances = new ArrayList<>();
        this.places = new Places();
    }    
    


    public String getRequestType() { return requestType; }

    public Places getPlaces() { return places; }
    
    public Integer getEarthRadius() { return earthRadius; }

    public ArrayList<Integer> getDistances() { return distances; }

}
