package com.tco.requests;

import java.util.ArrayList;
import com.tco.misc.Places;
import com.tco.misc.Distances;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DistancesRequest extends Request {

    private final transient Logger log = LoggerFactory.getLogger(DistancesRequest.class);

    private Places places; 
    private Double earthRadius;
    private ArrayList<Long> distances;

    @Override
    public void buildResponse() {
        Distances distancesList = new Distances(places, earthRadius);
        distances = distancesList.computeDistances();
        log.trace("buildResponse -> {}", this);
    }

    /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */
    
    public DistancesRequest() {
        this.requestType = "distances";
        this.earthRadius = 0.0;
        this.distances = new ArrayList<>();
        this.places = new Places();
    }    
    


    public String getRequestType() { return requestType; }

    public Places getPlaces() { return places; }
    
    public Double getEarthRadius() { return earthRadius; }

    public ArrayList<Long> getDistances() { return distances; }

}
