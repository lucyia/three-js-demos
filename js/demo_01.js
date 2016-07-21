var scene;
var camera;
var renderer;

var stats;
var control;

var geometry;
var material;

init();
render();

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

  stats = createStats();
  document.body.appendChild( stats.domElement );

  control = new function () {
    this.rotationSpeed = 0.005;
    this.scale = 1;
  };

  addControls( control );

}

function render() {

  requestAnimationFrame( render );

  moveCube();

  renderer.render( scene, camera );

  stats.update();

}

function moveCube(){

  scene.getObjectByName('cube').rotation.x += control.rotationSpeed;
  scene.getObjectByName('cube').rotation.y += control.rotationSpeed;

  var s = control.scale;
  scene.getObjectByName('cube').scale.set( s, s, s);

}

function addControls( controlObj ) {

  var gui = new dat.GUI();
  gui.add( controlObj, 'rotationSpeed', -0.1, 0.1 );
  gui.add( controlObj, 'scale', 0.01, 2);

}
