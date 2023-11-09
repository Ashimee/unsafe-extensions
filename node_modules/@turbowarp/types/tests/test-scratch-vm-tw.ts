import VM from 'scratch-vm';
const vm = new VM();

vm.saveProjectSb3() as Promise<Blob>;
vm.saveProjectSb3('arraybuffer') as Promise<ArrayBuffer>;
vm.saveProjectSb3('uint8array') as Promise<Uint8Array>;
// @ts-expect-error
vm.saveProjectSb3('uint8array') as Promise<Blob>;

vm.saveProjectSb3Stream() as JSZip.StreamHelper<'arraybuffer'>;
vm.saveProjectSb3Stream('blob') as JSZip.StreamHelper<'blob'>;

vm.setStageSize(480, 360);

const Sprite = vm.exports.Sprite;
const RenderedTarget = vm.exports.RenderedTarget;
const sprite = new Sprite(null, vm.runtime);
const target = new RenderedTarget(sprite, vm.runtime);
target.setXY(10, 10);
