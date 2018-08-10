# Maintainer: bartus @{aur \at bartus \dot  33mail \dot com}
pkgname=('radare2-bindings-git' 'radare2-pipe-git')
basename='radare2-bindings-git'
pkgver=2.8.0.r1.gb0d5faf
pkgrel=1
pkgdesc="Language bindings for radare2 (git version)"
arch=('i686' 'x86_64')
url="https://radare.org"
license=('LGPL')
depends=('radare2' 'python3' 'python2')
makedepends=('git' 'valabind' 'swig')

source=("${pkgname}::git://github.com/radare/radare2-bindings.git"
        "radare2-pipe-git::git+https://github.com/radare/radare2-r2pipe.git"
        )
md5sums=('SKIP'
         'SKIP'
         )


pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${srcdir}/${basename}
}

build() {
  cd "${srcdir}/${basename}"

  ./configure \
      --prefix="/usr" \
      --enable="python"

  export PYTHON_CONFIG=python3.2-config
  export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:/usr/lib/vala-$(vala --version|sed 's:Vala \(.*\..*\)\..*:\1:g')/"
  make

  #(cd r2pipe/python && python setup.py build)
}

package_radare2-pipe-git() {
  provides=('radare2-pipe')

  cd "${srcdir}/radare2-pipe-git/python"
  python2 setup.py install --root "${pkgdir}"
}

package_radare2-bindings-git() {
  provides=('radare2-bindings')

  cd "${srcdir}/${basename}"
  export PYTHON_CONFIG=python3.2-config
  make DESTDIR="${pkgdir}" install
}
# vim:set ts=2 sw=2 et:
