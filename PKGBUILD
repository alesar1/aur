# Maintainer: Tavian Barnes <tavianator@tavianator.com>
pkgname=java8-openjdk-hsdis
_java_ver=8
_jdk_update=65
_jdk_build=17
_binutils_ver=2.25.1
pkgver=${_java_ver}.u${_jdk_update}
_repo_ver=jdk${_java_ver}u${_jdk_update}-b${_jdk_build}
_binutils_commit=2bd25930
pkgrel=1
pkgdesc="Disassembler for HotSpot"
arch=('i686' 'x86_64')
url='http://openjdk.java.net/'
license=('GPL2')
_url_src=http://hg.openjdk.java.net/jdk8u/jdk8u
source=(hotspot-${_repo_ver}.tar.gz::${_url_src}/hotspot/archive/${_repo_ver}.tar.gz
        http://ftp.gnu.org/gnu/binutils/binutils-${_binutils_ver}.tar.bz2)
sha256sums=('7ef89c932bb829d3a69ff827493254657cdc98724f3a16956027922b3604e82e'
            'b5b14added7d78a8d1ca70b5cb75fef57ce2197264f4f5835326b0df22ac9f22')

prepare() {
  cd "${srcdir}/binutils-${_binutils_ver}"

  # hack! - libiberty configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  cd "${srcdir}/hotspot-${_repo_ver}/src/share/tools/hsdis"
  mkdir -p build
  ln -sf "${srcdir}/binutils-${_binutils_ver}" build/binutils
}

build() {
  cd "${srcdir}/hotspot-${_repo_ver}/src/share/tools/hsdis"

  if [ "$CARCH" = "x86_64" ]; then
    mkdir -p build/linux-amd64
    cd build/linux-amd64
  else
    mkdir -p build/linux-i586
    cd build/linux-i586
  fi

  ../binutils/configure --prefix=/usr \
    --with-lib-path=/usr/lib:/usr/local/lib \
    --with-bugurl=https://bugs.archlinux.org/ \
    --enable-threads --enable-shared --with-pic \
    --enable-ld=default --enable-gold --enable-plugins \
    --disable-werror --disable-gdb --disable-nls \
    CFLAGS="$CFLAGS -fPIC"
  make all-opcodes

  cd ../..

  if [ "$CARCH" = "x86_64" ]; then
    make all LP64=1
  else
    make all
  fi
}

package() {
  cd "${srcdir}/hotspot-${_repo_ver}/src/share/tools/hsdis"

  if [ "$CARCH" = "x86_64" ]; then
    install -D -m755 build/linux-amd64/hsdis-amd64.so "${pkgdir}/usr/lib/jvm/java-8-openjdk/jre/lib/amd64/hsdis-amd64.so"
  else
    install -D -m755 build/linux-i586/hsdis-i586.so "${pkgdir}/usr/lib/jvm/java-8-openjdk/jre/lib/i586/hsdis-i586.so"
  fi
}
