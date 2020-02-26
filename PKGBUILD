pkgname=nocomprendo
pkgver=1.1.0
pkgrel=1
pkgdesc="Voice command application for X.org"
arch=('x86_64')
url="http://be.root.free.fr/?soft=nocomprendo"
license=('GPL3')
depends=('qt5-base' 'espeak' 'xdotool' 'pocketsphinx')
source=("http://be.root.free.fr/soft/nocomprendo/nocomprendo-${pkgver}.tar.gz" unbundle_pocketsphinx.patch)
sha256sums=('83c46697ea50d6fc99fd97e893aeff8702169efaa8d8aeb6394e773db3f2ce79' SKIP)

prepare() {
  cd ${pkgname}-${pkgver}
  # nocomprendo builds its own copy of pocketsphinx
  patch -p1 -i "${srcdir}"/unbundle_pocketsphinx.patch

  # nocomprendo looks in /usr/share/pocketsphinx/model/en_US
  sed -i 's|QString(POCKET_PATH).append(params.lang)|QString(POCKET_PATH).append("model/en-us/en-us")|g' main.cpp
  sed -i 's|settings.value("defLang", "")|settings.value("defLang", "en_US")|g' main.cpp
}

build() {
  cd ${pkgname}-${pkgver}
  qmake
  make
}

package() {
  cd ${pkgname}-${pkgver}/
  make INSTALL_ROOT="${pkgdir}" install
}
