import React, { useState } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule
} from "react-simple-maps";
import Tooltip from "@mui/material/Tooltip";

const geoUrl = "/features.json";

const colorScale = scaleLinear()
  .domain([0, 100]) // Adjust the domain to match the range of occurrences
  .range(["#ebf7f9", "#169dd3"]); // Higher occurrence numbers correspond to darker colors

// Sample dataset with country codes and occurrences
const dataset = [
  { ISO3: "USA", occurrences: 75 }
];

const MapChart = ({ setTooltipContent }) => {
  const handleClick = (geo) => () => {
    console.log(geo);
  };

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 190
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const d = dataset.find((s) => s.ISO3 === geo.id);
            if (!d) {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F5F4F6"
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "white"
                    },
                    hover: {
                      outline: "none"
                    },
                    pressed: {
                      outline: "none"
                    }
                  }}
                />
              );
            }

            const tooltipContent = JSON.stringify(d, null, 2);
            return (
              <Tooltip key={geo.rsmKey} title={<pre>{tooltipContent}</pre>} arrow>
                <Geography
                  geography={geo}
                  fill={colorScale(d.occurrences)}
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "white"
                    },
                    hover: {
                      outline: "none"
                    },
                    pressed: {
                      outline: "none"
                    }
                  }}
                  onClick={handleClick(geo.properties)}
                />
              </Tooltip>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
