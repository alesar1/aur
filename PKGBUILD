pkgname=john-mpi
pkgver=1.8.0
pkgrel=6
_patchlevel=jumbo-1
_commit=76109448e1a42e6a900d61ee87d0c9e3b6f76215
_pkgname=JohnTheRipper
arch=('i686' 'x86_64')
pkgdesc='JohnTheRipper password cracker with Jumbo patch and MPI support'
url='http://openwall.info'
license=('GPL')
provides=('john')
conflicts=('john' 'john-latest')
depends=('mpich' 'libpcap' 'ocl-icd')
makedepends=('mpich' 'unzip' 'opencl-headers')
optdepends=('perl' 'python2' 'ruby')
backup=(etc/john/john.conf
        etc/john/dumb32.conf
        etc/john/dumb16.conf
        etc/john/dynamic.conf)

source=("https://github.com/magnumripper/${_pkgname}/archive/${_commit}.zip"
        "params.h.patch")

prepare() {
  cd ${srcdir}/${_pkgname}-${_commit}/src
  patch -p0 < ${srcdir}/params.h.patch
}

build() {
  export PATH=/opt/mpich/bin:${PATH}
  export CFLAGS="${CFLAGS} -DJOHN_SYSTEMWIDE=1"

  cd ${srcdir}/${_pkgname}-${_commit}/src
  ./configure --prefix=/usr --enable-mpi

  if [ $(which icc &>/dev/null; echo $?) -eq 0 ]; then
    case "${CARCH}" in
      "x86_64")
        make sse-intrinsics-64.S
        break
        ;;
      "i686")
        make sse-intrinsics-32.S
        break
        ;;
    esac
  fi

  make
}

package() {
  # config file
  sed -i 's|$JOHN|/usr/share/john|g' ${srcdir}/${_pkgname}-${_commit}/run/john.conf
  sed -i 's|/usr/share/john/dumb|/etc/john/dumb|g' ${srcdir}/${_pkgname}-${_commit}/run/john.conf
  sed -i 's|/usr/share/john/korelogic.conf|/etc/john/korelogic.conf|g' ${srcdir}/${_pkgname}-${_commit}/run/john.conf
  sed -i 's|/usr/share/john/repeats16.conf|/etc/john/repeats16.conf|g' ${srcdir}/${_pkgname}-${_commit}/run/john.conf
  sed -i 's|/usr/share/john/repeats32.conf|/etc/john/repeats32.conf|g' ${srcdir}/${_pkgname}-${_commit}/run/john.conf
  sed -i 's|.include <|.include "/etc/john/|g' ${srcdir}/${_pkgname}-${_commit}/run/*.conf
  sed -i 's|conf>|conf"|g' ${srcdir}/${_pkgname}-${_commit}/run/*.conf
  install -dm755 ${pkgdir}/etc/john
  install -m644 ${srcdir}/${_pkgname}-${_commit}/run/*.conf ${pkgdir}/etc/john/

  # docs
  install -d -m755 ${pkgdir}/usr/share/doc/john
  install -m644 ${srcdir}/${_pkgname}-${_commit}/doc/* ${pkgdir}/usr/share/doc/john/
  install -d -m755 ${pkgdir}/usr/share/john/
  install -m644 ${srcdir}/${_pkgname}-${_commit}/run/*.chr ${pkgdir}/usr/share/john/
  install -m644 ${srcdir}/${_pkgname}-${_commit}/run/password.lst ${pkgdir}/usr/share/john/
  install -Dm644 ${srcdir}/${_pkgname}-${_commit}/doc/LICENSE ${pkgdir}/usr/share/licenses/$pkgname/LICENSE

  # fix python version
  sed -i 's|/usr/bin/env python|/usr/bin/env python2|' ${srcdir}/${_pkgname}-${_commit}/run/*.py

  # install binaries
  cd ${srcdir}/${_pkgname}-${_commit}/run/
  for i in $(find . -type f -perm 755); do
    install -Dm755 ${i} ${pkgdir}/usr/bin/${i}
  done
  cd ${pkgdir}/usr/bin
  for link in $(find ${srcdir}/${_pkgname}-${_commit}/run/ -type l); do
    ln -s john $(basename ${link})
  done
}
sha256sums=('ca8a7099b8f121ee0e3061d8bc0e7c875a8785d5aff74266a354466d9afd548f'
            '432466152dda1bfaae66095ac6d1db48e91c2557e412c799b8c01921b749414a')
