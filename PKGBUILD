# Maintainer: tytan652 <tytan652@tytanium.xyz>

_pkgname=nvidia-utils
pkgname=${_pkgname}-nvlax
pkgver=470.74
pkgrel=1
pkgdesc="NVIDIA drivers utilities with NVENC and NvFBC patched with nvlax"
arch=('x86_64')
license=('custom')
url="https://github.com/illnyang/nvlax/"
depends=(
  'xorg-server' 'libglvnd' 'egl-wayland'
)
makedepends=('cmake' 'git')
optdepends=(
  "nvidia-settings=${pkgver}: configuration tool"
  'xorg-server-devel: nvidia-xconfig'
  "opencl-nvidia=${pkgver}: OpenCL support"
)
conflicts=(
  'nvidia-libgl'
)
provides=(
  "${_pkgname}=${pkgver}"
  'vulkan-driver' 'opengl-driver'
  'nvidia-libgl'
)
replaces=(
  'nvidia-libgl'
  'nvidia-utils-keylase'
)
install="${_pkgname}.install"
options=('!strip')
_pkg="NVIDIA-Linux-x86_64-${pkgver}"
source=(
  "nvidia-drm-outputclass.conf"
  "${_pkgname}.sysusers"
  "${_pkg}.run::https://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/${_pkg}.run"
  "nvlax::git+https://github.com/illnyang/nvlax.git"
)
sha512sums=(
  "de7116c09f282a27920a1382df84aa86f559e537664bb30689605177ce37dc5067748acf9afd66a3269a6e323461356592fdfc624c86523bf105ff8fe47d3770"
  "4b3ad73f5076ba90fe0b3a2e712ac9cde76f469cd8070280f960c3ce7dc502d1927f525ae18d008075c8f08ea432f7be0a6c3a7a6b49c361126dcf42f97ec499"
  "21e4290d98bbbf09eed7be32df8743f0adf728f9e88869afb02fc1d0f0be87cf42af2d4f04322a76d68a1704ef044e83cd403377e60af917ff3ec0a04985801a"
  "SKIP"
)

create_links() {
  # create soname links
  find "$pkgdir" -type f -name '*.so*' ! -path '*xorg/*' -print0 | while read -d $'\0' _lib; do
    _soname=$(dirname "${_lib}")/$(readelf -d "${_lib}" | grep -Po 'SONAME.*: \[\K[^]]*' || true)
    _base=$(echo ${_soname} | sed -r 's/(.*).so.*/\1.so/')
    [[ -e "${_soname}" ]] || ln -s $(basename "${_lib}") "${_soname}"
    [[ -e "${_base}" ]] || ln -s $(basename "${_soname}") "${_base}"
  done
}

prepare() {
  sh "${_pkg}.run" --extract-only
  cd "${_pkg}"
  bsdtar -xf nvidia-persistenced-init.tar.bz2
}

build() {
  cd nvlax
  cmake -B build
  make -C build

  cd build
  cp -a nvlax_fbc "$srcdir/${_pkg}"/nvlax_fbc
  cp -a nvlax_encode "$srcdir/${_pkg}"/nvlax_encode
}

package() {
  cd "${_pkg}"

  # X driver
  install -D -m755 nvidia_drv.so "${pkgdir}/usr/lib/xorg/modules/drivers/nvidia_drv.so"

  # firmware
  install -D -m644 firmware/gsp.bin "${pkgdir}/usr/lib/firmware/nvidia/${pkgver}/gsp.bin"

  # GLX extension module for X
  install -D -m755 "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so.${pkgver}"
  # Ensure that X finds glx
  ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so.1"
  ln -s "libglxserver_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/nvidia/xorg/libglxserver_nvidia.so"

  install -D -m755 "libGLX_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLX_nvidia.so.${pkgver}"

  # OpenGL libraries
  install -D -m755 "libEGL_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libEGL_nvidia.so.${pkgver}"
  install -D -m755 "libGLESv1_CM_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLESv1_CM_nvidia.so.${pkgver}"
  install -D -m755 "libGLESv2_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/libGLESv2_nvidia.so.${pkgver}"
  install -D -m644 "10_nvidia.json" "${pkgdir}/usr/share/glvnd/egl_vendor.d/10_nvidia.json"

  # OpenGL core library
  install -D -m755 "libnvidia-glcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glcore.so.${pkgver}"
  install -D -m755 "libnvidia-eglcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-eglcore.so.${pkgver}"
  install -D -m755 "libnvidia-glsi.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glsi.so.${pkgver}"

  # misc
  install -D -m755 "libnvidia-ifr.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ifr.so.${pkgver}"
  install -D -m755 "libnvidia-cfg.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-cfg.so.${pkgver}"
  install -D -m755 "libnvidia-ml.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ml.so.${pkgver}"
  install -D -m755 "libnvidia-glvkspirv.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-glvkspirv.so.${pkgver}"

  # Patched NvFBC
  ./nvlax_fbc -i "libnvidia-fbc.so.${pkgver}" -o "libnvidia-fbc.so.${pkgver}"
  install -D -m755 "libnvidia-fbc.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-fbc.so.${pkgver}"

  # Patched NVENC
  ./nvlax_encode -i "libnvidia-encode.so.${pkgver}" -o "libnvidia-encode.so.${pkgver}"
  install -D -m755 "libnvidia-encode.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-encode.so.${pkgver}"

  # Vulkan ICD
  install -D -m644 "nvidia_icd.json" "${pkgdir}/usr/share/vulkan/icd.d/nvidia_icd.json"
  install -D -m644 "nvidia_layers.json" "${pkgdir}/usr/share/vulkan/implicit_layer.d/nvidia_layers.json"

  # VDPAU
  install -D -m755 "libvdpau_nvidia.so.${pkgver}" "${pkgdir}/usr/lib/vdpau/libvdpau_nvidia.so.${pkgver}"

  # nvidia-tls library
  install -D -m755 "libnvidia-tls.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-tls.so.${pkgver}"

  # CUDA
  install -D -m755 "libcuda.so.${pkgver}" "${pkgdir}/usr/lib/libcuda.so.${pkgver}"
  install -D -m755 "libnvcuvid.so.${pkgver}" "${pkgdir}/usr/lib/libnvcuvid.so.${pkgver}"

  # PTX JIT Compiler (Parallel Thread Execution (PTX) is a pseudo-assembly language for CUDA)
  install -D -m755 "libnvidia-ptxjitcompiler.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ptxjitcompiler.so.${pkgver}"

  # raytracing
  install -D -m755 "libnvoptix.so.${pkgver}" "${pkgdir}/usr/lib/libnvoptix.so.${pkgver}"
  install -D -m755 "libnvidia-rtcore.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-rtcore.so.${pkgver}"
  install -D -m755 "libnvidia-cbl.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-cbl.so.${pkgver}"

  # NGX
  install -D -m755 nvidia-ngx-updater "${pkgdir}/usr/bin/nvidia-ngx-updater"
  install -D -m755 "libnvidia-ngx.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-ngx.so.${pkgver}"
  install -D -m755 _nvngx.dll "${pkgdir}/usr/lib/nvidia/wine/_nvngx.dll"
  install -D -m755 nvngx.dll "${pkgdir}/usr/lib/nvidia/wine/nvngx.dll"

  # Optical flow
  install -D -m755 "libnvidia-opticalflow.so.${pkgver}" "${pkgdir}/usr/lib/libnvidia-opticalflow.so.${pkgver}"

  # DEBUG
  install -D -m755 nvidia-debugdump "${pkgdir}/usr/bin/nvidia-debugdump"

  # nvidia-xconfig
  install -D -m755 nvidia-xconfig "${pkgdir}/usr/bin/nvidia-xconfig"
  install -D -m644 nvidia-xconfig.1.gz "${pkgdir}/usr/share/man/man1/nvidia-xconfig.1.gz"

  # nvidia-bug-report
  install -D -m755 nvidia-bug-report.sh "${pkgdir}/usr/bin/nvidia-bug-report.sh"

  # nvidia-smi
  install -D -m755 nvidia-smi "${pkgdir}/usr/bin/nvidia-smi"
  install -D -m644 nvidia-smi.1.gz "${pkgdir}/usr/share/man/man1/nvidia-smi.1.gz"

  # nvidia-cuda-mps
  install -D -m755 nvidia-cuda-mps-server "${pkgdir}/usr/bin/nvidia-cuda-mps-server"
  install -D -m755 nvidia-cuda-mps-control "${pkgdir}/usr/bin/nvidia-cuda-mps-control"
  install -D -m644 nvidia-cuda-mps-control.1.gz "${pkgdir}/usr/share/man/man1/nvidia-cuda-mps-control.1.gz"

  # nvidia-modprobe
  # This should be removed if nvidia fixed their uvm module!
  install -D -m4755 nvidia-modprobe "${pkgdir}/usr/bin/nvidia-modprobe"
  install -D -m644 nvidia-modprobe.1.gz "${pkgdir}/usr/share/man/man1/nvidia-modprobe.1.gz"

  # nvidia-persistenced
  install -D -m755 nvidia-persistenced "${pkgdir}/usr/bin/nvidia-persistenced"
  install -D -m644 nvidia-persistenced.1.gz "${pkgdir}/usr/share/man/man1/nvidia-persistenced.1.gz"
  install -D -m644 nvidia-persistenced-init/systemd/nvidia-persistenced.service.template "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"
  sed -i 's/__USER__/nvidia-persistenced/' "${pkgdir}/usr/lib/systemd/system/nvidia-persistenced.service"

  # application profiles
  install -D -m644 nvidia-application-profiles-${pkgver}-rc "${pkgdir}/usr/share/nvidia/nvidia-application-profiles-${pkgver}-rc"
  install -D -m644 nvidia-application-profiles-${pkgver}-key-documentation "${pkgdir}/usr/share/nvidia/nvidia-application-profiles-${pkgver}-key-documentation"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m644 README.txt "${pkgdir}/usr/share/doc/nvidia/README"
  install -D -m644 NVIDIA_Changelog "${pkgdir}/usr/share/doc/nvidia/NVIDIA_Changelog"
  cp -r html "${pkgdir}/usr/share/doc/nvidia/"
  ln -s nvidia "${pkgdir}/usr/share/doc/${_pkgname}"

  # new power management support
  install -D -m644 systemd/system/nvidia-suspend.service "${pkgdir}/usr/lib/systemd/system/nvidia-suspend.service"
  install -D -m644 systemd/system/nvidia-hibernate.service "${pkgdir}/usr/lib/systemd/system/nvidia-hibernate.service"
  install -D -m644 systemd/system/nvidia-resume.service "${pkgdir}/usr/lib/systemd/system/nvidia-resume.service"
  install -D -m755 systemd/system-sleep/nvidia "${pkgdir}/usr/lib/systemd/system-sleep/nvidia"
  install -D -m755 systemd/nvidia-sleep.sh "${pkgdir}/usr/bin/nvidia-sleep.sh"

  # distro specific files must be installed in /usr/share/X11/xorg.conf.d
  install -D -m644 "${srcdir}/nvidia-drm-outputclass.conf" "${pkgdir}/usr/share/X11/xorg.conf.d/10-nvidia-drm-outputclass.conf"

  install -Dm644 "${srcdir}/${_pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/$pkgname.conf"

  create_links
}
