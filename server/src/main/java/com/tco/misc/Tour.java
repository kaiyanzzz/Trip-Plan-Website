package com.tco.misc;

public class Tour {
    private Places places;
    private final double earthRadius;
    private final Double response;

    private long[][] distancesMatrix;
    private boolean[] visited;

    private Place currentCity;
    private int[] currentTour;
    private int[] bestTour;


    public Tour(Places places, double earthRadius, Double response) {
        this.places = places;
        this.earthRadius = earthRadius;
        this.response = response;

        distancesMatrix = new long[places.size()][places.size()];
        visited = new boolean[places.size()];
        currentTour = new int[places.size()];
        bestTour = new int[places.size()];
    }

    public void optimizeTour() {

    }

    private long calculateNearestNeighborTourDistance() {
        long tourDistance = 0l;
        for (int i = 0; i < places.size(); i++) {
            visited[places.indexOf(currentCity)] = true;
            currentTour[i] = places.indexOf(currentCity);
            int indexOfShortestDistance = calculateNearestNeighborIndex();
            if (indexOfShortestDistance == -1) { //case: all destinations have been visited
                tourDistance += distancesMatrix[currentTour[0]][currentTour[places.size() - 1]]; //add return leg
            } else {
                tourDistance += distancesMatrix[places.indexOf(currentCity)][indexOfShortestDistance];
                visited[indexOfShortestDistance] = true; //mark city as visited
                currentCity = places.get(indexOfShortestDistance); //move to next city
            }
        }
        return tourDistance;
    }

    private int calculateNearestNeighborIndex() {
        int indexOfCurrent = 0, indexOfShortestDistance = -1;
        long shortestDistance = Long.MAX_VALUE;

        for (long currentDistance : distancesMatrix[places.indexOf(currentCity)]) {
            if (!visited[indexOfCurrent] && currentDistance < shortestDistance) {
                shortestDistance = currentDistance;
                indexOfShortestDistance = indexOfCurrent;
            }
            indexOfCurrent++;
        }

        return indexOfShortestDistance;
    }

    private void updateTourOrder() {
        Places newTrip = new Places();
        for (int i = 0; i < places.size(); i++)
            newTrip.add(places.get(bestTour[i]));
        places = newTrip;
    }

    /* The following methods exist only for testing purposes and are not used
       during normal execution */
    public Tour() {
        this.places = new Places();
        this.earthRadius = 3958.8;
        this.response = 1.0;
    }

    public Places getPlaces() {
        return places;
    }

    public double getEarthRadius() {
        return earthRadius;
    }

    public Double getResponse() {
        return response;
    }

    public void setPlaces(Places places) {
        this.places = places;
    }

    public long getTourDistance() {
        long totalDistance = 0;
        for (int i = 0; i < places.size(); i++) {
            if (i != places.size() - 1)
                totalDistance += distancesMatrix[bestTour[i]][bestTour[i + 1]];
            else
                totalDistance += distancesMatrix[bestTour[i]][bestTour[0]];
        }
        return totalDistance;
    }

}
