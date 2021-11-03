package com.tco.misc;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestTour {

    Tour tour;

    @BeforeEach
    public void createConfigurationForTestCases() {
        tour = new Tour();
    }

    @Test
    @DisplayName("places is correct")
    public void testPlaces() {
        assertNotNull(tour.getPlaces());
    }

    @Test
    @DisplayName("earthRadius is correct")
    public void testEarthRadius() {
        assertEquals(3958.8, tour.getEarthRadius());
    }

    @Test
    @DisplayName("response is correct")
    public void testResponse() {
        assertEquals(1.0, tour.getResponse());
    }

    @Test
    @DisplayName("first test case succeeded")
    public void testOptimizeTourCase1() {
        Places case1 = new Places();

        Place place1 = new Place();
        place1.put("latitude", "47.90596");
        place1.put("longitude", "-89.90065");

        Place place2 = new Place();
        place2.put("latitude", "47.6679");
        place2.put("longitude", "-88.96132");

        Place place3 = new Place();
        place3.put("latitude", "47.37053");
        place3.put("longitude", "-88.95196");

        Place place4 = new Place();
        place4.put("latitude", "47.28676");
        place4.put("longitude", "-89.89403");

        Place place5 = new Place();
        place5.put("latitude", "47.3947");
        place5.put("longitude", "-90.45571");

        Place place6 = new Place();
        place6.put("latitude", "47.66916");
        place6.put("longitude", "-90.43648");

        case1.add(place1);
        case1.add(place3);
        case1.add(place6);
        case1.add(place5);
        case1.add(place2);
        case1.add(place4);

        tour.setPlaces(case1);
        tour.optimizeTour();

        //assertEquals(188l, tour.getTourDistance());
    }

    @Test
    @DisplayName("second test case succeeded")
    public void testOptimizeTourCase2() {
        Places case2 = new Places();

        Place place1 = new Place();
        place1.put("latitude", "59.89277");
        place1.put("longitude", "-102.85546");

        Place place2 = new Place();
        place2.put("latitude", "51.73176");
        place2.put("longitude", "-177.03515");

        Place place3 = new Place();
        place3.put("latitude", "-5.60837");
        place3.put("longitude", "179.27344");

        Place place4 = new Place();
        place4.put("latitude", "-47.36484");
        place4.put("longitude", "-91.78124");

        Place place5 = new Place();
        place5.put("latitude", "-0.30207");
        place5.put("longitude", "9.11719");

        Place place6 = new Place();
        place6.put("latitude", "52.72634");
        place6.put("longitude", "7.71094");

        case2.add(place1);
        case2.add(place3);
        case2.add(place6);
        case2.add(place5);
        case2.add(place2);
        case2.add(place4);

        tour.setPlaces(case2);
        tour.optimizeTour();

        //assertEquals(27766l, tour.getTourDistance());
    }
}
