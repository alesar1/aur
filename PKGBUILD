# Maintainer: Daniel Bermond < gmail-com: danielbermond >

# NOTE:
# This package provides only the SDK files for Intel Media Server Studio.
# The proper installation requires a specific (older) Linux kernel version,
# kernel patches and other system modifications. For the sake of the system,
# this package will not touch the kernel or system libraries. Only the SDK
# files will be provided.

_year=2018
_release=R1
_sdkver=16.8
pkgname=intel-media-server-studio
pkgver="${_year}.${_release}"
pkgrel=5
pkgdesc='Intel Media Server Studio (only SDK files, no kernel patches, no system modifications)'
arch=('x86_64')
url='https://software.intel.com/en-us/intel-media-server-studio/'
license=('custom')
depends=('numactl')
makedepends=('poppler')
provides=('intel-opencl' 'intel-opencl-runtime' 'intel-media-sdk')
conflicts=('intel-opencl' 'intel-opencl-runtime' 'intel-media-sdk')
options=('!strip')
source=("http://registrationcenter-download.intel.com/akdlm/irc_nas/vcp/12841/MediaServerStudioEssentials${_year}${_release}.tar.gz")
sha256sums=('2bb4a8d2235203f4943a19398feb51c4a07b9f60f1e11da8d4aff2b8c7eb2187')

prepare() {
    cd "MediaServerStudioEssentials${_year}${_release}"
    bsdtar -xf "SDK${_year}Production${_sdkver}.tar.gz"
    
    cd "${srcdir}/MediaServerStudioEssentials${_year}${_release}/SDK${_year}Production${_sdkver}/Generic"
    bsdtar -xf intel-linux-media_generic_"$_sdkver"-*_64bit.tar.gz
    bsdtar -xf intel-opencl-cpu-*.x86_64.tar.xz
    bsdtar -xf intel-opencl-devel-*.x86_64.tar.xz
    bsdtar -xf intel-opencl-${_sdkver}*.x86_64.tar.xz
    
    # create a license file
    cd "${srcdir}/MediaServerStudioEssentials${_year}${_release}"
    pdftotext -layout 'Intel(R)_Media_Server_Studio_EULA.pdf'
}

package() {
    # directories creation
    mkdir -p "$pkgdir"/opt/intel
    mkdir -p "$pkgdir"/usr/{include,lib}/"$pkgname"
    
    # copy SDK files
    cd "${srcdir}/MediaServerStudioEssentials${_year}${_release}/SDK${_year}Production${_sdkver}/Generic"
    cp -a opt/intel/common   "${pkgdir}/opt/intel"
    cp -a opt/intel/mediasdk "${pkgdir}/opt/intel"
    cp -a opt/intel/opencl   "${pkgdir}/opt/intel"
    cp -a etc/OpenCL         "${pkgdir}/etc"
    cp -a etc/ld.so.conf.d   "${pkgdir}/etc"
    cp -a usr/include/*      "${pkgdir}/usr/include/${pkgname}"
    cp -a usr/lib64/*        "${pkgdir}/usr/lib/${pkgname}"
    install -D -m644 etc/profile.d/*.sh -t "${pkgdir}/etc/profile.d"
    sed -i '2,3s/^/#/' "${pkgdir}/etc/profile.d/intel-mediasdk.sh"
    sed -i '1s/^/#/'   "${pkgdir}/etc/profile.d/libintelopencl.sh"
    
    # add 'mfx' include folder for ffmpeg compatibility
    local _header
    mkdir -p "${pkgdir}/opt/intel/mediasdk/include/mfx"
    cd "${pkgdir}/opt/intel/mediasdk/include"
    for _header in *.h
    do
        cd mfx
        ln -s ../"$_header" "$_header"
        cd ..
    done
    
    # copy license files
    cd "${srcdir}/MediaServerStudioEssentials${_year}${_release}"
    install -D -m644  'Intel(R)_Media_Server_Studio_EULA.txt' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644  'redist.txt'                            "${pkgdir}/usr/share/licenses/${pkgname}/redist.txt"
    mv "${pkgdir}/opt/intel/opencl/LICENSE"                   "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.opencl"
    mv "${pkgdir}/opt/intel/opencl/NOTICES"                   "${pkgdir}/usr/share/licenses/${pkgname}/NOTICES.opencl"
    
    # create a pkgconfig file for libmfx
    local _mfxver_major
    local _mfxver_minor
    local _mfxver
    _mfxver_major="$(grep '#define MFX_VERSION_MAJOR' "${pkgdir}/opt/intel/mediasdk/include/mfxdefs.h" | awk '{ print $3 }')"
    _mfxver_minor="$(grep '#define MFX_VERSION_MINOR' "${pkgdir}/opt/intel/mediasdk/include/mfxdefs.h" | awk '{ print $3 }')"
    _mfxver="${_mfxver_major}.${_mfxver_minor}"
    mkdir -p  "${pkgdir}/opt/intel/mediasdk/lib/pkgconfig"
    cat << __EOF__ >"${pkgdir}/opt/intel/mediasdk/lib/pkgconfig/libmfx.pc"
prefix=/opt/intel/mediasdk
exec_prefix=\${prefix}
libdir=\${prefix}/lib/lin_x64
includedir=\${prefix}/include

Name: libmfx
Description: Intel Media SDK dispatcher library
Version: ${_mfxver}
Libs: -L\${libdir} -lmfx -lva -lstdc++ -ldl -lva-drm -ldrm
Cflags: -I\${includedir} -I/usr/include/libdrm
__EOF__
}
