# Maintainer: Vyacheslav Konovalov <vyachkonovalov@gmail.com>

pkgname=robomongo
pkgver=0.9.0
_ref='be655902b469b4a8a2fb4ddab1d4ffb45266e5cf'
_pkgname=$pkgname-${_ref}
_opensslver=1.0.1p
pkgrel=1
pkgdesc='Shell-centric cross-platform open source MongoDB management tool'
arch=('i686' 'x86_64')
url="https://robomongo.org/"
license=('GPLv3')
depends=('qt5-base' 'pcre' 'qjson')
makedepends=('git' 'scons' 'cmake')
conflicts=('robomongo-bin')
source=('git+https://github.com/paralect/robomongo-shell.git#branch=roboshell-v3.2'
        "https://github.com/paralect/robomongo/archive/${_ref}.tar.gz"
        "ftp://ftp.openssl.org/source/old/1.0.1/openssl-${_opensslver}.tar.gz"
        'robomongo.desktop')
sha256sums=('SKIP'
            '9f52b8c47f3fff0fb636ffcd2431b06c0fcbe1e8bf45130cdc789b4bb1d02ddc'
            'bd5ee6803165c0fb60bbecbacacf244f1f90d2aa0d71353af610c29121e9b2f1'
            'bdd63f5d4bd35dd865a0164f285d19555e4ecafb2d11d01f67bdb86bd730a13d')

build() {
  if [ $CARCH == 'i686' ]; then
    _shellopts='--wiredtiger=off'
    cd $srcdir/${_pkgname}/cmake
    sed -i -e 's/x86_64/i386/g' FindMongoDB.cmake mongodb/linux-release.objects
  fi

  _openssldir=$srcdir/openssl-${_opensslver}
  cd ${_openssldir}
  ./config shared
  make
  mkdir lib
  cp libssl* libcrypto* lib/

  _mongodir=$srcdir/robomongo-shell
  cd $srcdir
  scons mongo --directory=${_mongodir} --ssl CPPPATH=${_openssldir}/include LIBPATH=${_openssldir}/lib --disable-warnings-as-errors ${_shellopts}

  cd $srcdir/${_pkgname}
  mkdir -p ./target && cd ./target/
  cmake .. -DCMAKE_PREFIX_PATH="${_mongodir};${_openssldir}" -DCMAKE_BUILD_TYPE=Release
  make
  make install
}

package() {
  _instdir=$srcdir/${_pkgname}/target/install

  install -Dm0755 "${_instdir}/bin/robomongo" "$pkgdir/usr/bin/robomongo"
  install -Dm0644 "$srcdir/robomongo.desktop" "$pkgdir/usr/share/applications/robomongo.desktop"
  install -Dm0644 "$srcdir/${_pkgname}/src/robomongo/gui/resources/icons/logo.png" "${pkgdir}/usr/share/pixmaps/robomongo.png"
  install -Dm0644 "${_instdir}/LICENSE" "${pkgdir}/usr/share/licenses/robomongo/LICENSE"
  install -Dm0644 "${_instdir}/COPYRIGHT" "${pkgdir}/usr/share/doc/robomongo/COPYRIGHT"
}
