# Maintainer: SovietReimu1228 <reimussr at protonmail dot ch>

pkgname=mesa-rusticl-git
pkgdesc="An open-source implementation of the OpenGL specification, with Rusticl"
pkgver=22.2.0_devel.153993.93f0ddd51b4.02359b69dbf79b2bb68700002ba384ab
pkgrel=1
arch=('x86_64')
makedepends=('python-mako' 'libxml2' 'libx11' 'xorgproto' 'libdrm' 'libxshmfence' 'libxxf86vm'
             'libxdamage' 'libvdpau' 'libva' 'wayland' 'wayland-protocols' 'zstd' 'elfutils' 'llvm'
             'libomxil-bellagio' 'libclc' 'clang' 'libglvnd' 'libunwind' 'lm_sensors' 'libxrandr'
             'valgrind' 'glslang' 'vulkan-icd-loader' 'directx-headers' 'cmake' 'meson'
             'rust' 'rust-bindgen')
depends=('libdrm' 'libxcb' 'wayland' 'python'
         'libclc' 'clang'
         'libx11' 'libxshmfence' 'zstd'
         'libelf' 'llvm-libs'
         'expat'
         'libxxf86vm' 'libxdamage' 'libomxil-bellagio' 'libunwind' 'lm_sensors' 'libglvnd' 'vulkan-icd-loader'
         'spirv-llvm-translator' 'spirv-tools')
optdepends=('opencl-headers: headers necessary for OpenCL development'
            'opengl-man-pages: for the OpenGL API man pages'
            'compiler-rt: opencl')
provides=('vulkan-mesa-layers' 'opencl-mesa' 'vulkan-intel' 'vulkan-radeon' 'vulkan-swrast' 'libva-mesa-driver' 'mesa-vdpau' 'mesa'
          'opencl-driver' 'vulkan-driver' 'mesa-libgl' 'opengl-driver')
conflicts=('vulkan-mesa-layers' 'opencl-mesa' 'vulkan-intel' 'vulkan-radeon' 'vulkan-swrast' 'libva-mesa-driver' 'mesa-vdpau' 'mesa'
           'vulkan-mesa-layer' 'vulkan-mesa' 'mesa-libgl')
url="https://www.mesa3d.org"
license=('custom')
source=('mesa::git+https://gitlab.freedesktop.org/karolherbst/mesa.git#branch=rusticl/wip_nv'
        'LICENSE'
        'eglapi_hack.patch')
md5sums=('SKIP'
         '5c65a0fe315dd347e09b1f2826a1df5a'
         '83448b54dfea2e53891476fe3d6657e3')
sha512sums=('SKIP'
            '25da77914dded10c1f432ebcbf29941124138824ceecaf1367b3deedafaecabc082d463abcfa3d15abff59f177491472b505bcb5ba0c4a51bb6b93b4721a23c2'
            '2cf8ef08c5ac02e5a795c37a67a12547ab752620b2c2a3f34ff53195f50e1758ebc8004f0b356d99255f2c9af19815e6ac61d66aaebecebe5d1d00578d1f412d')

# NINJAFLAGS is an env var used to pass commandline options to ninja
# NOTE: It's your responbility to validate the value of $NINJAFLAGS. If unsure, don't set it.

pkgver() {
    cd mesa
    local _ver
    read -r _ver <VERSION

    local _patchver
    local _patchfile
    for _patchfile in "${source[@]}"; do
        _patchfile="${_patchfile%%::*}"
        _patchfile="${_patchfile##*/}"
        [[ $_patchfile = *.patch ]] || continue
        _patchver="${_patchver}$(md5sum ${srcdir}/${_patchfile} | cut -c1-32)"
    done
    _patchver="$(echo -n $_patchver | md5sum | cut -c1-32)"

    echo ${_ver/-/_}.$(git rev-list --count HEAD).$(git rev-parse --short HEAD).${_patchver}
}

prepare() {
    # although removing _build folder in build() function feels more natural,
    # that interferes with the spirit of makepkg --noextract
    if [  -d _build ]; then
        rm -rf _build
    fi

    local _patchfile
    for _patchfile in "${source[@]}"; do
        _patchfile="${_patchfile%%::*}"
        _patchfile="${_patchfile##*/}"
        [[ $_patchfile = *.patch ]] || continue
        echo "Applying patch $_patchfile..."
        patch --directory=mesa --forward --strip=1 --input="${srcdir}/${_patchfile}"
    done
}

build () {
    export CC="clang"
    export CXX="clang++"

    meson setup mesa _build \
        -D prefix=/usr \
        -D sysconfdir=/etc \
        -D b_ndebug=true \
        -D platforms=auto \
        -D gallium-drivers=r300,r600,radeonsi,nouveau,virgl,svga,swrast,iris,crocus,i915,zink \
        -D vulkan-drivers=amd,intel,swrast,virtio-experimental,microsoft-experimental \
        -D vulkan-layers=device-select,intel-nullhw,overlay \
        -D dri3=enabled \
        -D egl=enabled \
        -D gallium-extra-hud=true \
        -D gallium-nine=true \
        -D gallium-omx=bellagio \
        -D gallium-va=enabled \
        -D gallium-vdpau=enabled \
        -D gallium-xa=enabled \
        -D gallium-xvmc=enabled \
        -D gbm=enabled \
        -D gles1=enabled \
        -D gles2=enabled \
        -D glvnd=true \
        -D glx=dri \
        -D libunwind=enabled \
        -D llvm=enabled \
        -D lmsensors=enabled \
        -D osmesa=true \
        -D shared-glapi=enabled \
        -D microsoft-clc=disabled \
        -D valgrind=enabled \
        -D video-codecs=vc1dec,h264dec,h264enc,h265dec,h265enc \
        -D gallium-rusticl=true \
        -D opencl-spirv=true \
        -D shader-cache=enabled \
        -D c_args="-Wno-error=incompatible-pointer-types-discards-qualifiers"
       
    meson configure _build
    
    ninja $NINJAFLAGS -C _build
}

package() {
    DESTDIR="${pkgdir}" ninja $NINJAFLAGS -C _build install

    # remove script file from /usr/bin
    # https://gitlab.freedesktop.org/mesa/mesa/issues/2230
    rm "${pkgdir}/usr/bin/mesa-overlay-control.py"
    rmdir "${pkgdir}/usr/bin"

    # indirect rendering
    ln -s /usr/lib/libGLX_mesa.so.0 "${pkgdir}/usr/lib/libGLX_indirect.so.0"
  
    install -m644 -Dt "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}/LICENSE"
}
