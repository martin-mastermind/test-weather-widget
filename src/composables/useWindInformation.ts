import { computed } from "vue";

const beaufortScale: {
  [key: string]: string
} = {
  '1': 'Calm',
  '5': 'Light Air',
  '11': 'Light Breeze',
  '19': 'Gentle Breeze',
  '28': 'Moderate Breeze',
  '38': 'Fresh Breeze',
  '49': 'Strong Breeze',
  '61': 'Near Gale',
  '74': 'Gale',
  '88': 'Strong Gale',
  '102': 'Storm',
  '117': 'Violent Storm',
};

const directionsMap: {
  [key: string]: string
} = {
  '11.25': 'N',
  '33.75': 'NNE',
  '56.25': 'NE',
  '78.75': 'ENE',
  '101.25': 'E',
  '123.75': 'ESE',
  '146.25': 'SE',
  '168.75': 'SSE',
  '191.25': 'S',
  '213.75': 'SSW',
  '236.25': 'SW',
  '258.75': 'WSW',
  '281.25': 'W',
  '303.75': 'WNW',
  '326.25': 'NW',
  '348.75': 'NNW'
}

export function useWindInformation({speed, deg}: {speed: number, deg: number}) {
  const beaufortScaleSpeed = Object.keys(beaufortScale).find(scale => +scale > speed);
  const speedDescription = computed(() => {
    return beaufortScaleSpeed ? beaufortScale[beaufortScaleSpeed] : 'Hurricane';
  });

  const directionsMapDegree = Object.keys(directionsMap).find(scale => +scale > deg);
  const degDescription = computed(() => {
    return directionsMapDegree ? directionsMap[directionsMapDegree] : 'N';
  });

  return {
    speedDescription,
    degDescription
  }
}