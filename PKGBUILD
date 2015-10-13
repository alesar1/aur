# Maintainer: Daichi Shinozaki <dsdseg@gmail.com>
pkgname=fbthrift
pkgver=0.27.0
pkgrel=1
pkgdesc="Facebook's branch of Apache Thrift, including a new C++ server"
arch=('i686' 'x86_64')
url="https://github.com/facebook/fbthrift"
license=('Apache')
depends=('folly<=0.48.0' 'krb5' 'numactl' 'python2')
conflicts=('thrift')
provides=('thrift')
makedepends=('scons')
options=('!emptydirs' 'staticlibs')
source=("https://github.com/facebook/$pkgname/archive/v${pkgver}.tar.gz"
'BinaryProtocol.h.patch'
'CompactProtocol.h.patch'
'Serializer.h.patch'
'Krb5CredentialsCacheManager.cpp.patch'
't_rb_generator.cc.patch'
)
md5sums=('dc555767b60dc165c3c8ee9c1697dcae'
         '5a410a5ffdd4813f9844c06b37cdd048'
         '067b4fc38a9e73cc06bd8d29eeb95c4f'
         'ae028ff57127ee3f3c44b5b592b09199'
         'bda963346b5171e59bacc0034868fa63'
         '54be1e53c1bd49d2855a3c52e13ed137')

prepare() {
  cd "$pkgname-$pkgver/thrift"
  patch -p2 --verbose < $srcdir/BinaryProtocol.h.patch
  patch -p2 --verbose < $srcdir/CompactProtocol.h.patch
  patch -p2 --verbose < $srcdir/Serializer.h.patch
  patch -p2 --verbose < $srcdir/Krb5CredentialsCacheManager.cpp.patch
  patch -p2 --verbose < $srcdir/t_rb_generator.cc.patch
  sed -ie '1 s/python/python2/' ./compiler/py/main.py
  # ArchLinux system has both libboost_python.so and libboost3_python.so.
  # Use python2 for build, so prevent libboost3_python.so to be chosen
  sed -i -e 's/libboost_python\*.so\*/libboost_python.so\*/' ./m4/ax_boost_python.m4
  autoreconf -ivf 
}

build() {
	cd "$pkgname-$pkgver/thrift"
	PYTHON=/usr/bin/python2 ./configure --prefix=/usr
  sed --in-place -e 's/python\( -mthrift_compiler.main\)/python2 \1/g' ./lib/cpp2/Makefile
  make
}

#check() {
#	cd "$pkgname-$pkgver/$pkgname"
#	make check
#}

package() {
  cd "$pkgname-$pkgver/thrift"
  make \
    PY_INSTALL_HOME="$pkgdir/usr" \
    PY_INSTALL_ARGS="--root '${pkgdir}' --prefix=/usr" \
    DESTDIR="$pkgdir" \
    install
}
