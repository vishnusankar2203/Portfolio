import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Conceptual BIM visual: wireframe building, MEP run, and a data pulse travelling along it. */
export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(8, 6, 10);
    camera.lookAt(0, 1.8, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // WebGL unavailable: the CSS grid background remains
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const accent = new THREE.Color("#3ea6ff");
    const group = new THREE.Group();
    scene.add(group);
    const disposables: { dispose(): void }[] = [];
    const track = <T extends { dispose(): void }>(o: T) => (disposables.push(o), o);

    const edgeMat = track(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.9 }));
    const dimMat = track(new THREE.LineBasicMaterial({ color: 0x5b6b78, transparent: true, opacity: 0.8 }));
    const addBox = (w: number, h: number, d: number, x: number, y: number, z: number, mat: THREE.Material) => {
      const g = track(new THREE.BoxGeometry(w, h, d));
      const e = track(new THREE.EdgesGeometry(g));
      const l = new THREE.LineSegments(e, mat);
      l.position.set(x, y, z);
      group.add(l);
    };

    const floors = 6, gap = 0.75, W = 4.2, D = 3;
    for (let i = 0; i <= floors; i++) addBox(W, 0.1, D, 0, i * gap, 0, i === floors ? edgeMat : dimMat);
    for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as const)
      addBox(0.1, floors * gap, 0.1, (x * W) / 2 * 0.95, (floors * gap) / 2, (z * D) / 2 * 0.9, edgeMat);
    addBox(1.4, 0.5, 1.2, 3.1, 0.25, 0.5, dimMat); // annex block

    // MEP run (polyline) and the pulse that travels along it
    const pts = [
      new THREE.Vector3(-2, 0.4, -1.3), new THREE.Vector3(-2, 2.2, -1.3), new THREE.Vector3(0, 2.2, -1.3),
      new THREE.Vector3(0, 2.2, 1.2), new THREE.Vector3(2, 2.2, 1.2), new THREE.Vector3(2, 4.2, 1.2)
    ];
    const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0);
    const lineGeo = track(new THREE.BufferGeometry().setFromPoints(curve.getPoints(120)));
    group.add(new THREE.Line(lineGeo, track(new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }))));
    const nodeGeo = track(new THREE.SphereGeometry(0.07, 12, 12));
    const nodeMat = track(new THREE.MeshBasicMaterial({ color: accent }));
    pts.forEach((p) => { const m = new THREE.Mesh(nodeGeo, nodeMat); m.position.copy(p); group.add(m); });
    const pulse = new THREE.Mesh(track(new THREE.SphereGeometry(0.14, 16, 16)), track(new THREE.MeshBasicMaterial({ color: 0xffffff })));
    group.add(pulse);

    const grid = new THREE.GridHelper(14, 28, 0x2d3943, 0x1b2228);
    scene.add(grid);
    group.rotation.y = -0.5;

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.position.set(8, 6, 10);
      camera.position.multiplyScalar(w < 500 ? 1.35 : 1);
      camera.lookAt(0, 1.8, 0);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = -0.5 + t * 0.12;
      pulse.position.copy(curve.getPoint((t * 0.12) % 1));
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    if (!reduce) tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} className="h-full w-full" role="img" aria-label="Conceptual wireframe of a building with an MEP run and a data pulse, representing BIM automation" />;
}
