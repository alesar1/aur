# Maintainer: Jacek Danecki <gmail j a c e k . m . d a n e c k i>
# Contributor: Enihcam <gmail n a n e r i c w a n g>

pkgname=compute-runtime-bin
pkgver=18.35.11391
pkgrel=1
pkgdesc='Intel(R) Graphics Compute Runtime for OpenCL(TM). Replaces Beignet for Gen8 (Broadwell) and beyond (binary version)'
arch=(x86_64)
url='https://github.com/intel/compute-runtime'
license=(MIT)
install=${pkgname}.install
depends=(zlib ncurses5-compat-libs)
optdepends=(libdrm libva ocl-icd)
provides=(opencl-driver compute-runtime)
conflicts=(beignet compute-runtime)
source=(${url}/releases/download/${pkgver}/intel-opencl_${pkgver}_amd64.deb)
sha256sums=('72bc2c1ca5b0e350c70ed16862ba9a3f06b28c9e5f068889e3a7694074885e1e')

package() {
    tar -xJC "${pkgdir}" -f data.tar.xz
    chmod 755 ${pkgdir}/usr/local/lib/*.so
    chown root:root ${pkgdir}/usr/local/lib/*.so
    mv ${pkgdir}/usr/local/lib ${pkgdir}/usr/
    rm -fr ${pkgdir}/usr/local
    sed -i 's/\/usr\/local\/lib/\/usr\/lib/gI' ${pkgdir}/etc/ld.so.conf.d/libintelopencl.conf
    sed -i 's/\/usr\/local\/lib/\/usr\/lib/gI' ${pkgdir}/etc/OpenCL/vendors/intel.icd
}
