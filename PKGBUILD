# Maintainer: bartus szczepaniak <aur@bartus.33mail.com>
name=hpmvs
pkgname=${name}-git
pkgver=r11.be7fad6
pkgrel=1
pkgdesc="Progressive multiview stero, generate dense surface form  sparse 3D model."
arch=('i686' 'x86_64')
url="https://github.com/alexlocher/hpmvs"
license=('GPL')
groups=()
depends=('libjpeg' 'google-glog' 'gflags')
makedepends=('git' 'cmake' 'eigen')
#optdepends=('cuda: for cuda sfm/mvs acceleration')
provides=()
options=()
#install=${pkgname}.install
source=("${pkgname}::git+https://github.com/alexlocher/hpmvs.git"
        "missing_headers.patch"
        "http://www.vision.ee.ethz.ch/~alocher/pdf/locher_cvpr16_progressive_prioritized_mvs.pdf"
        )
md5sums=('SKIP'
         '042189728d33a8315d81a1c04ce970f3'
         'd2bb5ce95c7ec1e02bc50922c18ac884')

prepare() {
  cd ${pkgname}
  patch -Np1 -i ../missing_headers.patch
}

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd ${srcdir}/${pkgname}

  mkdir -p build
  cd build
  cmake -DBUILD_SHARED_LIBS=ON -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr ../
  make
}


package() {
  cd ${srcdir}/${pkgname}/build
  make DESTDIR=${pkgdir} install

  # install desktop entry
#  install -d -m755 "${pkgdir}/usr/share/applications"
#  install -m644 "${srcdir}/${name}.desktop" "${pkgdir}/usr/share/applications"
#  sed -i "s#Version=.*#Version=$pkgver#" "${pkgdir}/usr/share/applications/${name}.desktop"
  # install introduction paper in doc
  msg "install introduction paper in doc folder"
  install -d -m755 ${pkgdir}/${pkgname}/usr/share/doc/${pkgname}
  install -m644 ${srcdir}/locher_cvpr16_progressive_prioritized_mvs.pdf ${pkgdir}/${pkgname}/usr/share/doc/${pkgname}
}

# vim:set ts=2 sw=2 et:
