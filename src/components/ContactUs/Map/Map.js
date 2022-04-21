import ReactMapboxGl, {
  Marker,
  ScaleControl,
  ZoomControl,
  RotationControl,
} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const MapDetail = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidGhlYWtpbmthdmFrIiwiYSI6ImNsMWwzY21qYjAxdDczYnBxMDllY2k3YXEifQ.UPpP7OQtEb-wfVWnxqxV0A',
  });

  return (
    <div
      className="flex text-center lg:text-center items-center justify-center"
      data-testid="valid-map"
    >
      <MapDetail
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '50vh',
          width: '34vw',
        }}
      >
        <Marker coordinates={[38.97953, 21.015137]} anchor="bottom">
          <img
            src="https://media.istockphoto.com/vectors/red-pinpoint-symbol-vector-id1272693590"
            alt="marker"
            className="w-20 h-20"
          />
        </Marker>
        <ScaleControl />
        <ZoomControl />
        <RotationControl />
      </MapDetail>
    </div>
  );
}

export default Map;
