import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MapControls } from 'three/addons/controls/MapControls.js';

let cam1 = document.getElementById('cam1');
let cam2 = document.getElementById('cam2');

const scene = new THREE.Scene();

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(13, 6, 13);

const backgroundImage = textureLoader.load('./img/IT ac.jpg');
scene.background = backgroundImage;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let textures = {
  green: './img/green1.jfif',
  gray: './img/gray2.jpg',
  floor: './img/floor.jfif',
};

let models = {
  chairs: './Chair_norm.glb',
  laptop: './laptop.glb',
  desk: './table.glb',
  high_chair: './High_chair.glb',
  high_table: './high_table.glb',
  shkaf: './shkaf_main.glb',
  kitchen: './Kitchen.glb',
  desk_study: './desk_study.glb'
};

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 50).normalize();
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

controls.minPolarAngle = 0; // Минимальный угол вращения (в радианах)
controls.maxPolarAngle = Math.PI / 2; // Максимальный угол вращения (в радианах)

// Установка границ для масштабирования
controls.minDistance = 0.1; // Минимальная дистанция до объекта
controls.maxDistance = 40;

controls.target.set(13, 6, 13);

let CH_r1 = loader.load(models.chairs, function (gltf) {
  let model_r2 = gltf.scene;
  scene.add(model_r2);
  model_r2.position.set(1.4, 0, -3);
});

let CH_r2 = loader.load(models.chairs, function (gltf) {
  let model_r2 = gltf.scene;
  scene.add(model_r2);
  model_r2.position.set(-1.4, 0, -3);
});

let CH_r3 = loader.load(models.chairs, function (gltf) {
  let model_r3 = gltf.scene;
  scene.add(model_r3);
  model_r3.position.set(-4.2, 0, -3);
});
let CH_r4 = loader.load(models.chairs, function (gltf) {
  let model_r4 = gltf.scene;
  scene.add(model_r4);
  model_r4.position.set(4.2, 0, -3);
});

let laptop_r1 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(1.4, 4, -1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r2 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(-1.4, 4, -1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r3 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(4.2, 4, -1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r4 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(-4.2, 4, -1);
  laptop.scale.set(0.5, 0.5, 0.5);
});

let CH_l1 = loader.load(models.chairs, function (gltf) {
  let model_l = gltf.scene;
  scene.add(model_l);
  model_l.rotation.y = 3.1416;
  model_l.position.set(1.4, 0, 3);
});

let CH_l2 = loader.load(models.chairs, function (gltf) {
  let model_l2 = gltf.scene;
  scene.add(model_l2);
  model_l2.rotation.y = 3.1416;
  model_l2.position.set(-1.4, 0, 3);
});

let CH_l3 = loader.load(models.chairs, function (gltf) {
  let model_l3 = gltf.scene;
  scene.add(model_l3);
  model_l3.position.set(-4.2, 0, 3);
  model_l3.rotation.y = 3.1416;
});
let CH_l4 = loader.load(models.chairs, function (gltf) {
  let model_l4 = gltf.scene;

  scene.add(model_l4);
  model_l4.position.set(4.2, 0, 3);
  model_l4.rotation.y = 3.1416;
});

let laptop_l1 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(1.4, 4, 1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l2 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(-1.4, 4, 1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l3 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(4.2, 4, 1);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l4 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(-4.2, 4, 1);
  laptop.scale.set(0.5, 0.5, 0.5);
});

let desk = loader.load(models.desk, function (gltf) {
  let model_desk = gltf.scene;

  scene.add(model_desk);
  model_desk.position.set(4.1, 0.5, 0);
  model_desk.rotation.y = 1.570796326;
  model_desk.scale.z = 0.7;
  model_desk.scale.x = 0.8;
});

let desk2 = loader.load(models.desk, function (gltf) {
  let model_desk2 = gltf.scene;

  scene.add(model_desk2);
  model_desk2.position.set(-2.7, 0.5, 0);
  model_desk2.rotation.y = 1.570796326;
  model_desk2.scale.z = 0.7;
  model_desk2.scale.x = 0.8;
});

let CH_r_s_1 = loader.load(models.chairs, function (gltf) {
  let model_r = gltf.scene;

  scene.add(model_r);
  model_r.position.set(1.4, 0, 10);
});

let CH_r_s_2 = loader.load(models.chairs, function (gltf) {
  let model_r2 = gltf.scene;

  scene.add(model_r2);
  model_r2.position.set(-1.4, 0, 10);
});

let CH_r_s_3 = loader.load(models.chairs, function (gltf) {
  let model_r3 = gltf.scene;

  scene.add(model_r3);
  model_r3.position.set(-4.2, 0, 10);
});
let CH_r_s_4 = loader.load(models.chairs, function (gltf) {
  let model_r4 = gltf.scene;

  scene.add(model_r4);
  model_r4.position.set(4.2, 0, 10);
});

let laptop_r_s_1 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(1.4, 4, 12);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r_s_2 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(-1.4, 4, 12);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r_s_3 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(4.2, 4, 12);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_r_s_4 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = -1.570796326;
  laptop.position.set(-4.2, 4, 12);
  laptop.scale.set(0.5, 0.5, 0.5);
});

let CH_l_s_1 = loader.load(models.chairs, function (gltf) {
  let model_l = gltf.scene;

  scene.add(model_l);
  model_l.rotation.y = 3.1416;
  model_l.position.set(1.4, 0, 16);
});

let CH_l_s_2 = loader.load(models.chairs, function (gltf) {
  let model_l2 = gltf.scene;

  scene.add(model_l2);
  model_l2.rotation.y = 3.1416;
  model_l2.position.set(-1.4, 0, 16);
});

let CH_l_s_3 = loader.load(models.chairs, function (gltf) {
  let model_l3 = gltf.scene;

  scene.add(model_l3);
  model_l3.position.set(-4.2, 0, 16);
  model_l3.rotation.y = 3.1416;
});
let CH_l_s_4 = loader.load(models.chairs, function (gltf) {
  let model_l4 = gltf.scene;

  scene.add(model_l4);
  model_l4.position.set(4.2, 0, 16);
  model_l4.rotation.y = 3.1416;
});

let laptop_l_s_1 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(1.4, 4, 14);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l_s_2 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(-1.4, 4, 14);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l_s_3 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(4.2, 4, 14);
  laptop.scale.set(0.5, 0.5, 0.5);
});
let laptop_l_s_4 = loader.load(models.laptop, function (gltf) {
  let laptop = gltf.scene;

  scene.add(laptop);
  laptop.rotation.y = 1.570796326;
  laptop.position.set(-4.2, 4, 14);
  laptop.scale.set(0.5, 0.5, 0.5);
});

let desk_s_ = loader.load(models.desk, function (gltf) {
  let model_desk = gltf.scene;

  scene.add(model_desk);
  model_desk.position.set(4.1, 0.5, 13);
  model_desk.rotation.y = 1.570796326;
  model_desk.scale.z = 0.7;
  model_desk.scale.x = 0.8;
});

let desk_s_2 = loader.load(models.desk, function (gltf) {
  let model_desk2 = gltf.scene;

  scene.add(model_desk2);
  model_desk2.position.set(-2.7, 0.5, 13);
  model_desk2.rotation.y = 1.570796326;
  model_desk2.scale.z = 0.7;
  model_desk2.scale.x = 0.8;
});

let shakf1 = loader.load(models.shkaf, function (gltf) {
  let shkaf = gltf.scene;

  scene.add(shkaf);
  shkaf.position.set(6.5, 0, -6.5);
  shkaf.rotation.y = 1.570796326;
  shkaf.scale.set(0.9, 0.9, 0.9);
});

let shkaf2 = loader.load(models.shkaf, function (gltf) {
  let shkaf2 = gltf.scene;
  scene.add(shkaf2);
  shkaf2.position.set(0, 0, -6.5);
  shkaf2.rotation.y = 1.570796326;
  shkaf2.scale.set(0.9, 0.9, 0.9);
});

let high_table1 = loader.load(models.high_table, function (gltf) {
  let high_table = gltf.scene;

  scene.add(high_table);
  high_table.position.set(-1, 0, -13);
  high_table.scale.set(2.7, 3.5, 2);
});

let high_chair_r1 = loader.load(models.high_chair, function (gltf) {
  let high_chair = gltf.scene;

  scene.add(high_chair);
  high_chair.position.set(0, 0, -11);
  high_chair.rotation.y = -0.45;
});

let high_chair_r2 = loader.load(models.high_chair, function (gltf) {
  let high_chair = gltf.scene;

  scene.add(high_chair);
  high_chair.position.set(-4, 0, -11);
  high_chair.rotation.y = -0.45;
});

let high_chair_l1 = loader.load(models.high_chair, function (gltf) {
  let high_chair = gltf.scene;

  scene.add(high_chair);
  high_chair.position.set(0, 0, -15);
  high_chair.rotation.y = -3.6;
});
let high_chair_l2 = loader.load(models.high_chair, function (gltf) {
  let high_chair = gltf.scene;

  scene.add(high_chair);
  high_chair.position.set(-4, 0, -15);
  high_chair.rotation.y = -3.6;
});

let high_table2 = loader.load(models.high_table, function (gltf) {
  let high_table = gltf.scene;

  scene.add(high_table);
  high_table.position.set(10, 0, -13);
  high_table.scale.set(4, 3.5, 2);
  high_table.rotation.y = Math.PI / 2;
});

let kitchen = loader.load(models.kitchen, function (gltf) {
  let kitchen = gltf.scene;
  scene.add(kitchen);
  kitchen.scale.set(3, 3, 3);
  kitchen.position.set(18.5, 0, -16);
  kitchen.rotation.y = Math.PI / 2;
});
let kitchen2 = loader.load(models.kitchen, function (gltf) {
  let kitchen = gltf.scene;
  scene.add(kitchen);
  kitchen.scale.set(3, 3, 3);
  kitchen.position.set(18.5, 0, -10);
  kitchen.rotation.y = Math.PI / 2;
});

let desk_study = loader.load(models.desk_study, function (gltf) {
  let desk_study = gltf.scene;
  scene.add(desk_study);
  desk_study.scale.set(5, 4.5, 5);
  desk_study.position.set(18, 0, 13.5);
  desk_study.rotation.y = -Math.PI / 2;
});

const geometry = new THREE.BoxGeometry(13, 0.001, 13);
const material = new THREE.MeshBasicMaterial({
  map: textureLoader.load('./img/floor.jfif'),
});

const floor2 = new THREE.Mesh(geometry, material);
floor2.position.set(0, 0, 13);
scene.add(floor2);

const floor4 = new THREE.Mesh(geometry, material);
floor4.position.set(13, 0, -13);
scene.add(floor4);

const floor6 = new THREE.Mesh(geometry, material);
floor6.position.set(13, 0, 0);
scene.add(floor6);

const floor5 = new THREE.Mesh(geometry, material);
floor5.position.set(13, 0, 13);
scene.add(floor5);

const floor = new THREE.Mesh(geometry, material);
scene.add(floor);

const floor3 = new THREE.Mesh(geometry, material);
floor3.position.set(0, 0, -13);
scene.add(floor3);

const floor7 = new THREE.Mesh(geometry, material);
floor7.position.set(13, 0, 26);
scene.add(floor7);

const floor8 = new THREE.Mesh(geometry, material);
floor8.position.set(0, 0, 26);
scene.add(floor8);

const floor9 = new THREE.Mesh(geometry, material);
floor9.position.set(13, 0, 39);
scene.add(floor9);

const floor10 = new THREE.Mesh(geometry, material);
floor10.position.set(0, 0, 39);
scene.add(floor10);

light;

const geometry_wall_1 = new THREE.BoxGeometry(1, 14, 39);
const material_wall_1 = new THREE.MeshBasicMaterial({
  map: textureLoader.load('./img/green1.jfif'),
});

const geometry_wall_3 = new THREE.BoxGeometry(27, 14, 1);
const material_wall_3 = new THREE.MeshBasicMaterial({
  map: textureLoader.load('./img/gray2.jpg'),
});

const wall_1 = new THREE.Mesh(geometry_wall_1, material_wall_3);
wall_1.position.set(-7, 7, 0);
scene.add(wall_1);

const wall_1_1 = new THREE.Mesh(geometry_wall_1, material_wall_3);
wall_1_1.position.set(20, 7, 26);
scene.add(wall_1_1);

const wall_2 = new THREE.Mesh(geometry_wall_3, material_wall_1);
wall_2.position.set(6.5, 7, -20);
scene.add(wall_2);

const wall_3 = new THREE.Mesh(geometry_wall_3, material_wall_3);
wall_3.position.set(6.5, 7, 20);
// scene.add(wall_3);

const wall_4 = new THREE.Mesh(geometry_wall_1, material_wall_3);
wall_4.position.set(20, 7, 0);
scene.add(wall_4);



const geometry_ceiling = new THREE.BoxGeometry(26, 1, 39);
const material_ceiling = new THREE.MeshBasicMaterial({
  map: textureLoader.load(textures.gray),
});

const ceiling = new THREE.Mesh(geometry_ceiling, material_ceiling);
ceiling.position.set(6, 13, 0);
scene.add(ceiling);

const geometry_column_1 = new THREE.BoxGeometry(3, 14, 3);
const material_column_1 = new THREE.MeshBasicMaterial({
  map: textureLoader.load('./img/green1.jfif'),
});
const column_1 = new THREE.Mesh(geometry_column_1, material_column_1);
column_1.position.set(18, 7, 8);
scene.add(column_1);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
