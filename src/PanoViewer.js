import React from 'react';
import Marzipano from 'marzipano';

class PanoViewer extends React.Component {
    ref = React.createRef();

    instance = null;

    scene = null;

    tileUrl = Marzipano.ImageUrlSource.fromString('https://uploads.codesandbox.io/uploads/user/b6cae962-6437-42df-9d45-264020196e51/8vyO-interior-4.5K.jpg');

    static displayName = 'PanoViewer';

    componentDidMount() {
        this.instance = new Marzipano.Viewer(this.ref.current, {});

        console.log(this.instance);

        const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
        const source = Marzipano.ImageUrlSource.fromString('https://uploads.codesandbox.io/uploads/user/b6cae962-6437-42df-9d45-264020196e51/8vyO-interior-4.5K.jpg');
        const limiter = Marzipano.RectilinearView.limit.traditional(1024, (100 * Math.PI) / 180);
        const view = new Marzipano.RectilinearView({}, limiter);

        this.scene = this.instance.createScene({
            source,
            geometry,
            view,
            pinFirstLevel: true
        });

        var sampleHotspot = document.createElement('img');
        sampleHotspot.src = 'https://uploads.codesandbox.io/uploads/user/b6cae962-6437-42df-9d45-264020196e51/5knu-pngguru.com.png';
        sampleHotspot.classList.add('hotspot');
        sampleHotspot.addEventListener('click', function () {
            console.log("I'm hot");
            // switchScene(findSceneById(hotspot.target));
        });

        console.log(sampleHotspot);

        this.scene.hotspotContainer().createHotspot(sampleHotspot, { yaw: 0, pitch: 0, roll: 0 });

        this.scene.switchTo();
    }

    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh'
                }}
                ref={this.ref}
            />
        );
    }
}

export default PanoViewer;
