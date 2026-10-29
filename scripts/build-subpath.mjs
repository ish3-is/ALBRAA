import { spawnSync } from 'node:child_process';
const env = {...process.env,VITE_BASE_PATH:'/portfolio-check/',BUILD_OUT_DIR:'dist-subpath',VITE_SITE_URL:'',VITE_CUSTOM_DOMAIN:''};
// Vite replaces only its generated output in this fixed workspace subdirectory.
const build=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--outDir','dist-subpath'],{stdio:'inherit',env});
if(build.status) process.exit(build.status);
const post=spawnSync(process.execPath,['scripts/postbuild.mjs'],{stdio:'inherit',env});
process.exit(post.status||0);
