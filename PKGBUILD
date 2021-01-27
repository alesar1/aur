# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

pkgname=vmd-molfile-plugins
pkgver=1.9.4a51
pkgrel=1
pkgdesc="Visual Molecular Dynamics - molfile plugins"
url="https://www.ks.uiuc.edu/Research/vmd/plugins"
license=(custom)
arch=(x86_64)
depends=(tcl netcdf gcc9)
makedepends=(make patch)
md5sums=('d7b1e9289e4907e4104bea48d584d1cb'
         'fc2ac47deb8bcd9409e7049e31b4d8a8'
         'f60d4d3f9c39c0e9e997a6eacacbade1')

# You should download the source package from the VMD site and put it in the PKGBUILD folder
source=("local://vmd-${pkgver}.src.tar.gz"
        "plugins.patch"
        "LICENSE")
options=(staticlibs)

prepare() {
  cd ${srcdir}/plugins

  patch -Np1 -i "${srcdir}/plugins.patch"
}

build() {
  cd ${srcdir}/plugins

  make LINUXAMD64
}

package() {
  cd ${srcdir}/plugins

  PLUGINDIR=${srcdir}/molfile make distrib

  # install libraries
  install -d ${pkgdir}/usr/lib/${pkgname}
  install -Dm755 ${srcdir}/molfile/LINUXAMD64/molfile/*.so ${pkgdir}/usr/lib/${pkgname}
  install -Dm644 ${srcdir}/molfile/LINUXAMD64/molfile/libmolfile_plugin.a ${pkgdir}/usr/lib/${pkgname}

  # install headers
  install -d ${pkgdir}/usr/include/${pkgname}
  install -Dm644 ${srcdir}/molfile/LINUXAMD64/molfile/libmolfile_plugin.h ${pkgdir}/usr/include/${pkgname}
  install -Dm644 ${srcdir}/molfile/include/{molfile_plugin.h,vmdplugin.h} ${pkgdir}/usr/include/${pkgname}

  # install license
  install -Dm644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
