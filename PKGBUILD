# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Carl Rogers <carl.rogers@gmail.com>
# Contributor: Jed Brown <jed@59A2.org>
# Contributor: Brenden Mervin <bmervin@utk.edu>

pkgname=silo
pkgver=4.10.2
pkgrel=4
pkgdesc="A Mesh and Field I/O Library and Scientific Database"
url="https://wci.llnl.gov/simulation/computer-codes/silo"
arch=('i686' 'x86_64')
depends=('qt4' 'python2' 'szip' 'hdf5')
makedepends=('gcc-fortran')
license=('BSD' 'custom')
source=("https://wci.llnl.gov/content/assets/docs/simulation/computer-codes/${pkgname}/${pkgname}-${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "${pkgname}-${pkgver}-rocket-test.patch"
        "${pkgname}-${pkgver}-skip-test.patch")
sha256sums=('3af87e5f0608a69849c00eb7c73b11f8422fa36903dd14610584506e7f68e638'
            'd66a7a47c4dbb3be20fe3d35275a38de7e23c7b6d7927627255f7a5d49aefb47'
            '414b39df3d60bd897ea7f19c28314e8c9fae56106a0962d9116fc65aef9aba2f')

_install_docs=1

prepare(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  patch tests/Makefile.in < "${srcdir}/${pkgname}-${pkgver}-rocket-test.patch"
  # Disable szip test as extra/hdf5 is not linked to szip,
  # also disable test 46 (write object from python module)
  patch tests/testsuite.at < "${srcdir}/${pkgname}-${pkgver}-skip-test.patch"
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  export PYTHON=/usr/bin/python2
  if [ "$(pacman -Qs hdf- | grep  -o mpi)" == "mpi" ]
  then
    ./configure \
      --prefix=/usr \
      --enable-shared --enable-optimization \
      --enable-fortran --enable-browser \
      --enable-silex \
      --with-Qt-dir= --with-Qt-include-dir=/usr/include/qt4 \
      --with-Qt-bin-dir=/usr/lib/qt4/bin  --with-Qt-lib-dir=/usr/lib \
      --with-Qt-lib="{QtCore,QtGui}" \
      --with-zlib=/usr/include,/usr/lib \
      --enable-pythonmodule \
      --with-szlib=/usr/lib \
      --enable-install-lite-headers \
      --enable-hzip --enable-fpzip
  else
    ./configure \
      --prefix=/usr \
      --enable-shared --enable-optimization \
      --enable-fortran --enable-browser \
      --enable-silex \
      --with-Qt-dir= --with-Qt-include-dir=/usr/include/qt4 \
      --with-Qt-bin-dir=/usr/lib/qt4/bin  --with-Qt-lib-dir=/usr/lib \
      --with-Qt-lib="{QtCore,QtGui}" \
      --with-zlib=/usr/include,/usr/lib \
      --with-hdf5=/usr/include,/usr/lib \
      --enable-pythonmodule \
      --with-szlib=/usr/lib \
      --enable-install-lite-headers \
      --enable-hzip --enable-fpzip
  fi

  make
}

check(){
  cd "${srcdir}/${pkgname}-${pkgver}/tests"

  export PYTHON=/usr/bin/python2
  export BROWSER="${srcdir}/${pkgname}-${pkgver}/tools/browser"
  make check
}

package(){
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  if [ ${_install_docs} -eq 1 ]
  then
    make DESTDIR="${pkgdir}" install-html
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/docs/Silo.book.pdf" \
      "${pkgdir}/usr/share/doc/${pkgname}/Silo.book.pdf"
  fi

  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 COPYRIGHT "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 BSD_LICENSE_README "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-BSD"
}
