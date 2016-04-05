pkgname="psi-plus-qt5-git"
pkgver=20160404
pkgrel=1
pkgdesc="Psi+ is a powerful Jabber client (Qt, C++) designed for the Jabber power users (built with Qt 5.x)"
url="http://psi-plus.com"
license=('GPL2')
arch=('i686' 'x86_64')
depends=('qt5-base' 'qt5-webkit' 'qt5-multimedia' 'qt5-x11extras' 'qca-qt5' 'libidn' 'aspell' 'libxss')
makedepends=('git' 'patch' 'qconf-git')
optdepends=('qca-gnupg: encrypted client-to-client connection')
provides=("psi-plus=$pkgver")
replaces=('psi-plus' 'psi-plus-webkit-git' 'psi-plus-git')
conflicts=('psi-plus' 'psi-plus-webkit-git' 'psi-plus-git')
install=psi-plus-git.install
source=('git://github.com/psi-im/psi.git'
	'psi-plus::git://github.com/psi-plus/main.git'
	'git://github.com/psi-im/iris.git'
	'git://github.com/psi-im/libpsi.git')
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'SKIP')

pkgver() {
    cd psi-plus
    git log -1 --format="%ci" HEAD | cut -d\  -f1 | tr -d '-'
}

prepare() {
  cd psi

  # makepkg doesn't support --recursive
  # so setup git modules manually
  git submodule init
  git config submodule.iris.url "$srcdir/iris"
  git config submodule.src/libpsi.url "$srcdir/libpsi"
  git submodule update

  # patches from Psi+ project
  for patch in "$srcdir"/psi-plus/patches/*.diff; do
    echo "* Appling ${patch##*/}"
    patch -p1 -i "$patch"
  done

  # additional icon themes
  cp -a "$srcdir"/psi-plus/iconsets .

  # make build date in --version output a bit more readable
  #sed "s/yyyyMMdd/yyyy-MM-dd/" -i qcm/conf.qcm
  echo "$pkgver ($(date +"%Y-%m-%d"))" >version
}

build() {
  cd psi

  qconf
  ./configure --prefix=/usr \
              --libdir=/usr/lib \
              --enable-plugins \
              --disable-enchant \
              --qtdir="/usr/lib/qt"
  make
}

package() {
  cd psi

  make INSTALL_ROOT="$pkgdir" install

  install -dm755 "$pkgdir/usr/include/psi-plus/plugins"
  install -m644 src/plugins/include/*.h "$pkgdir/usr/include/psi-plus/plugins"
}

