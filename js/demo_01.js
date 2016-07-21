var scene;
var camera;
var renderer;

var geometry;
var material;

init();
animate();

function init() {

    scene = new THREE.Scene();

    var fieldOfView = 75;
    var aspect = window.innerWidth / window.innerHeight;
    var near = 1;
    var far = 10000;
    camera = new THREE.PerspectiveCamera( fieldOfView, aspect, near, far );
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    var mesh = new THREE.Mesh( geometry, material );
    mesh.name = 'cube';
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    moveCube();

    renderer.render( scene, camera );

}

function moveCube(){

  scene.getObjectByName('cube').rotation.x += 0.01;
  scene.getObjectByName('cube').rotation.y += 0.02;
  
}
