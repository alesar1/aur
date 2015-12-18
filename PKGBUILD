# Maintainer: Yurii Kolesnykov (yurikooles) <yurikoles@gmail.com>
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>

# toolchain build order: linux-api-headers->glibc->binutils->gcc->binutils->glibc
# NOTE: libtool requires rebuilt with each new gcc version

pkgname=('gcc49-alternative-multilib' 'gcc49-alternative-libs-multilib' 'lib32-gcc49-alternative-libs')
pkgver=4.9.3
_pkgver=4.9
_islver=0.12.2
_cloogver=0.18.1
pkgrel=2
#_snapshot=4.9-20150304
pkgdesc="The GNU Compiler Collection 4.9 for multilib"
arch=('x86_64')
license=('GPL' 'LGPL' 'FDL' 'custom')
url="http://gcc.gnu.org"
makedepends=('binutils>=2.25' 'libmpc' 'doxygen'
             'lib32-glibc>=2.20')
checkdepends=('dejagnu' 'inetutils')
options=('!emptydirs')
source=(ftp://gcc.gnu.org/pub/gcc/releases/gcc-${pkgver}/gcc-${pkgver}.tar.bz2
        #ftp://gcc.gnu.org/pub/gcc/snapshots/${_snapshot}/gcc-${_snapshot}.tar.bz2
        http://isl.gforge.inria.fr/isl-${_islver}.tar.bz2
        http://www.bastoul.net/cloog/pages/download/cloog-${_cloogver}.tar.gz)
md5sums=('6f831b4d251872736e8e9cc09746f327'
         'e039bfcfb6c2ab039b8ee69bf883e824'
         'e34fca0540d840e5d0f6427e98c92252')

if [ -n "${_snapshot}" ]; then
  _basedir=gcc-${_snapshot}
else
  _basedir=gcc-${pkgver}
fi

_libdir="usr/gcc49/lib/gcc/$CHOST/$pkgver"


prepare() {
  cd ${srcdir}/${_basedir}

  # link isl/cloog for in-tree builds
  ln -sf ../isl-${_islver} isl
  ln -sf ../cloog-${_cloogver} cloog

  # Do not run fixincludes
  sed -i 's@\./fixinc\.sh@-c true@' gcc/Makefile.in

  # Arch Linux installs x86_64 libraries /lib
  [[ $CARCH == "x86_64" ]] && sed -i '/m64=/s/lib64/lib/' gcc/config/i386/t-linux64

  echo ${pkgver} > gcc/BASE-VER

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

  mkdir -p ${srcdir}/gcc-build
}

build() {
  cd ${srcdir}/gcc-build

  # using -pipe causes spurious test-suite failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=48565
  CFLAGS=${CFLAGS/-pipe/}
  CXXFLAGS=${CXXFLAGS/-pipe/}



 ${srcdir}/${_basedir}/configure --prefix=/usr --exec-prefix=/usr/gcc49 \
      --libdir=/usr/gcc49/lib --libexecdir=/usr/gcc49/lib \
      --mandir=/usr/share/man --infodir=/usr/share/info \
      --with-bugurl=https://bugs.archlinux.org/ \
      --enable-languages=c,c++,lto \
      --enable-shared --enable-threads=posix \
      --with-system-zlib --enable-__cxa_atexit \
      --disable-libunwind-exceptions --enable-clocale=gnu \
      --disable-libstdcxx-pch --disable-libssp \
      --enable-gnu-unique-object --enable-linker-build-id \
      --enable-cloog-backend=isl \
      --enable-lto --enable-plugin --enable-install-libiberty \
      --with-linker-hash-style=gnu \
      --enable-multilib --disable-werror \
      --enable-checking=release

  make
  
  # make documentation
  make -C $CHOST/libstdc++-v3/doc doc-man-doxygen
}

check() {
  cd ${srcdir}/gcc-build

  # increase stack size to prevent test failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=31827
  ulimit -s 32768

  # do not abort on error as some are "expected"
  make -k check || true
  ${srcdir}/${_basedir}/contrib/test_summary
}

package_lib32-gcc49-alternative-libs()
{
  pkgdesc="Runtime GCC 4.9 libraries (32-bit)"
  depends=('lib32-glibc>=2.20')
  options=('!emptydirs' '!strip')

  cd ${srcdir}/gcc-build

  make -C $CHOST/32/libgcc DESTDIR=${pkgdir} install-shared
  rm ${pkgdir}/${_libdir}/32/libgcc_eh.a

  for lib in libatomic \
             libcilkrts \
             libgomp \
             libitm \
             libquadmath \
             libsanitizer/{a,l,ub}san \
             libstdc++-v3/src \
             libvtv; do
    make -C $CHOST/32/$lib DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES
  done

  #  make -C $CHOST/32/libobjc DESTDIR=${pkgdir} install-libs

  # remove stuff in gcc-libs-multilib
  rm -r ${pkgdir}/usr/gcc49/lib
}

package_gcc49-alternative-libs-multilib()
{
  pkgdesc="Runtime GCC 4.9 libraries for multilib"
#  depends=('glibc>=2.20' "lib32-gcc-libs=$pkgver-$pkgrel")
  depends=('glibc>=2.20' "lib32-gcc49-alternative-libs=$pkgver-$pkgrel")
  provides=("gcc49-alternative-libs=$pkgver-$pkgrel")
#  conflicts=('gcc-libs')
  options=('!emptydirs' '!strip')
  install=gcc49-alternative-libs.install

  cd ${srcdir}/gcc-build
  
  make -C $CHOST/libgcc DESTDIR=${pkgdir} install-shared
  rm ${pkgdir}/${_libdir}/libgcc_eh.a
  
  for lib in libatomic \
             libcilkrts \
             libgomp \
             libitm \
             libquadmath \
             libsanitizer/{a,l,ub}san \
             libstdc++-v3/src \
             libvtv; do
    make -C $CHOST/$lib DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES
  done

  [[ $CARCH == "x86_64" ]] && \
    make -C $CHOST/libsanitizer/tsan DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES

#  make -C $CHOST/libobjc DESTDIR=${pkgdir} install-libs
  make -C $CHOST/libstdc++-v3/po DESTDIR=${pkgdir} install




#  for lib in libgomp \
#             libitm \
#             libquadmath; do
#    make -C $CHOST/$lib DESTDIR=${pkgdir} install-info
#  done

  rm ${pkgdir}/usr/share/locale/de/LC_MESSAGES/libstdc++.mo
  rm ${pkgdir}/usr/share/locale/fr/LC_MESSAGES/libstdc++.mo
  




  # remove stuff in lib32-gcc-libs
  #rm -r ${pkgdir}/usr/lib32



  # Install Runtime Library Exception
  #  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME     ${pkgdir}/usr/share/licenses/gcc-libs-multilib/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc49-alternative-multilib()
{
  pkgdesc="The GNU Compiler Collection 4.9 - C and C++ frontends for multilib"
  depends=("gcc49-alternative-libs-multilib=$pkgver-$pkgrel" 'binutils>=2.25' 'libmpc')
  groups=('multilib-devel')
  options=('staticlibs')
  provides=("gcc49=$pkgver-$pkgrel")
#  conflicts=('gcc')
  install=gcc49-alternative.install

  cd ${srcdir}/gcc-build

  make -C gcc DESTDIR=${pkgdir} install-driver install-cpp install-gcc-ar \
    c++.install-common install-headers install-plugin install-lto-wrapper

  install -m755 gcc/gcov $pkgdir/usr/gcc49/bin/
  install -m755 -t $pkgdir/${_libdir}/ gcc/{cc1,cc1plus,collect2,lto1}

  make -C $CHOST/libgcc DESTDIR=${pkgdir} install
  make -C $CHOST/32/libgcc DESTDIR=${pkgdir} install
  rm ${pkgdir}/usr/gcc49/lib{,32}/libgcc_s.so*
  
  make -C $CHOST/libstdc++-v3/src DESTDIR=${pkgdir} install
  make -C $CHOST/libstdc++-v3/include DESTDIR=${pkgdir} install
  make -C $CHOST/libstdc++-v3/libsupc++ DESTDIR=${pkgdir} install
  make -C $CHOST/libstdc++-v3/python DESTDIR=${pkgdir} install
  make -C $CHOST/32/libstdc++-v3/src DESTDIR=${pkgdir} install
  make -C $CHOST/32/libstdc++-v3/include DESTDIR=${pkgdir} install
  make -C $CHOST/32/libstdc++-v3/libsupc++ DESTDIR=${pkgdir} install

  install -d $pkgdir/usr/share/gdb/auto-load/usr/lib
  mv $pkgdir/usr/gcc49/lib/libstdc++.so.6.*-gdb.py  $pkgdir/usr/share/gdb/auto-load/usr/lib/

  rm ${pkgdir}/usr/gcc49/lib{,32}/libstdc++.so*

  make DESTDIR=${pkgdir} install-fixincludes
  make -C gcc DESTDIR=${pkgdir} install-mkheaders
  make -C lto-plugin DESTDIR=${pkgdir} install

  make -C $CHOST/libcilkrts DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS \
    install-nodist_cilkincludeHEADERS
  make -C $CHOST/libgomp DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS \
    install-nodist_libsubincludeHEADERS
  make -C $CHOST/libitm DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/libquadmath DESTDIR=${pkgdir} install-nodist_libsubincludeHEADERS
  make -C $CHOST/libsanitizer DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/libsanitizer/asan DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/32/libcilkrts DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/32/libgomp DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/32/libitm DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/32/libsanitizer DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS
  make -C $CHOST/32/libsanitizer/asan DESTDIR=${pkgdir} install-nodist_toolexeclibHEADERS

  make -C libiberty DESTDIR=${pkgdir} install
  # install PIC version of libiberty
#  install -m644 ${srcdir}/gcc-build/libiberty/pic/libiberty.a ${pkgdir}/usr/lib
  install -m644 ${srcdir}/gcc-build/libiberty/pic/libiberty.a ${pkgdir}/usr/gcc49/lib


  make -C gcc DESTDIR=${pkgdir} install-man install-info
#  rm ${pkgdir}/usr/share/man/man1/{gccgo,gfortran}.1
#  rm ${pkgdir}/usr/share/info/{gccgo,gfortran,gnat-style,gnat_rm,gnat_ugn}.info

  make -C libcpp DESTDIR=${pkgdir} install
  make -C gcc DESTDIR=${pkgdir} install-po

  # many packages expect this symlink
  ln -s gcc ${pkgdir}/usr/gcc49/bin/cc

  # POSIX conformance launcher scripts for c89 and c99
  cat > $pkgdir/usr/gcc49/bin/c89 <<"EOF"
#!/bin/sh
fl="-std=c89"
for opt; do
  case "$opt" in
    -ansi|-std=c89|-std=iso9899:1990) fl="";;
    -std=*) echo "`basename $0` called with non ANSI/ISO C option $opt" >&2
	    exit 1;;
  esac
done
exec gcc $fl ${1+"$@"}
EOF

  cat > $pkgdir/usr/gcc49/bin/c99 <<"EOF"
#!/bin/sh
fl="-std=c99"
for opt; do
  case "$opt" in
    -std=c99|-std=iso9899:1999) fl="";;
    -std=*) echo "`basename $0` called with non ISO C99 option $opt" >&2
	    exit 1;;
  esac
done
exec gcc $fl ${1+"$@"}
EOF

  chmod 755 $pkgdir/usr/gcc49/bin/c{8,9}9

  # install the libstdc++ man pages
  make -C $CHOST/libstdc++-v3/doc DESTDIR=$pkgdir doc-install-man



  mv ${pkgdir}/usr/share/man/man1/gcc.1 ${pkgdir}/usr/share/man/man1/gcc-4.9.1
  mv ${pkgdir}/usr/share/man/man1/g++.1 ${pkgdir}/usr/share/man/man1/g++-4.9.1
  mv ${pkgdir}/usr/share/man/man1/cpp.1 ${pkgdir}/usr/share/man/man1/cpp-4.9.1
  mv ${pkgdir}/usr/share/man/man1/gcov.1 ${pkgdir}/usr/share/man/man1/gcov-4.9.1
  mv ${pkgdir}/usr/share/info/cpp.info ${pkgdir}/usr/share/man/man1/cpp-4.9.info
  mv ${pkgdir}/usr/share/info/gcc.info ${pkgdir}/usr/share/man/man1/gcc-4.9.info
  mv ${pkgdir}/usr/share/info/cppinternals.info ${pkgdir}/usr/share/man/man1/cppinternals-4.9.info
  mv ${pkgdir}/usr/share/info/gccinstall.info ${pkgdir}/usr/share/man/man1/gccinstall-4.9.info
  mv ${pkgdir}/usr/share/info/gccint.info ${pkgdir}/usr/share/man/man1/gccint-4.9.info

  rm -r ${pkgdir}/usr/share/locale/

  install -d ${pkgdir}/usr/bin

  cd ${pkgdir}/usr/bin/
  ln -s ../gcc49/bin/c++ c++-4.9
  ln -s ../gcc49/bin/c89 c89-4.9
  ln -s ../gcc49/bin/c99 c99-4.9
  ln -s ../gcc49/bin/cc  cc-4.9
  ln -s ../gcc49/bin/cpp cpp-4.9
  ln -s ../gcc49/bin/g++ g++-4.9
  ln -s ../gcc49/bin/gcc gcc-4.9
  ln -s ../gcc49/bin/gcc-ar gcc-ar-4.9
  ln -s ../gcc49/bin/gcc-nm gcc-nm-4.9
  ln -s ../gcc49/bin/gcc-ranlib gcc-ranlib-4.9
  ln -s ../gcc49/bin/gcov gcov-4.9
  cd $owd



  rm -r ${pkgdir}/usr/include/libiberty
  rm  ${pkgdir}/usr/share/man/man3/Numeric_arrays.3
  rm  ${pkgdir}/usr/share/man/man3/Pointer_abstractions.3
  rm  ${pkgdir}/usr/share/man/man3/SGIextensions.3
  rm  ${pkgdir}/usr/share/man/man3/__gnu_cxx.3
  rm  ${pkgdir}/usr/share/man/man3/__gnu_debug.3
  rm  ${pkgdir}/usr/share/man/man3/__gnu_internal.3
  rm  ${pkgdir}/usr/share/man/man3/__gnu_parallel.3
  rm  ${pkgdir}/usr/share/man/man3/__gnu_pbds.3
  rm  ${pkgdir}/usr/share/man/man3/random.3
  rm  ${pkgdir}/usr/share/man/man3/regex.3
  rm  ${pkgdir}/usr/share/man/man7/fsf-funding.7
  rm  ${pkgdir}/usr/share/man/man7/gfdl.7
  rm  ${pkgdir}/usr/share/man/man7/gpl.7

  # Install Runtime Library Exception
  install -d ${pkgdir}/usr/share/licenses/gcc-multilib/
#  ln -s ../gcc-libs-multilib/RUNTIME.LIBRARY.EXCEPTION ${pkgdir}/usr/share/licenses/gcc-multilib/
}

package_gcc49-alternative-fortran-multilib()
{
  pkgdesc="Fortran front-end for GCC for multilib"
  depends=("gcc-multilib=$pkgver-$pkgrel")
  provides=("gcc-fortran=$pkgver-$pkgrel")
  conflicts=('gcc-fortran')
  options=('!emptydirs')
#  install=gcc49-alternative-fortran.install

  cd ${srcdir}/gcc-build
  make -C $CHOST/libgfortran DESTDIR=$pkgdir install-{{caf,my}execlibLTLIBRARIES,toolexeclibDATA}
  make -C $CHOST/32/libgfortran DESTDIR=$pkgdir install-{{caf,my}execlibLTLIBRARIES,toolexeclibDATA}
  make -C $CHOST/libgomp DESTDIR=$pkgdir install-nodist_fincludeHEADERS
  make -C gcc DESTDIR=$pkgdir fortran.install-{common,man,info}
  install -Dm755 gcc/f951 $pkgdir/${_libdir}/f951

  ln -s gfortran ${pkgdir}/usr/bin/f95

  # Install Runtime Library Exception
  install -d ${pkgdir}/usr/share/licenses/gcc-fortran-multilib/
  ln -s ../gcc-libs-multilib/RUNTIME.LIBRARY.EXCEPTION ${pkgdir}/usr/share/licenses/gcc-fortran-multilib/
}

package_gcc49-alternative-objc-multilib()
{
  pkgdesc="Objective-C front-end for GCC for multilib"
  depends=("gcc-multilib=$pkgver-$pkgrel")
  provides=("gcc-objc=$pkgver-$pkgrel")
  conflicts=('gcc-objc')

  cd ${srcdir}/gcc-build
  make DESTDIR=$pkgdir -C $CHOST/libobjc install-headers
  install -dm755 $pkgdir/${_libdir}
  install -m755 gcc/cc1obj{,plus} $pkgdir/${_libdir}/

  # Install Runtime Library Exception
  install -d ${pkgdir}/usr/share/licenses/gcc-objc-multilib/
  ln -s ../gcc-libs-multilib/RUNTIME.LIBRARY.EXCEPTION ${pkgdir}/usr/share/licenses/gcc-objc-multilib/
}


package_gcc49-alternative-go-multilib()
{
  pkgdesc="Go front-end for GCC for multilib"
  depends=("gcc-multilib=$pkgver-$pkgrel")
  provides=("gcc-go=$pkgver-$pkgrel")
  conflicts=('gcc-go')
  options=('!emptydirs')
#  install=gcc49-alternative-go.install

  cd ${srcdir}/gcc-build
  make -C $CHOST/libgo DESTDIR=$pkgdir install-exec-am
  make -C $CHOST/32/libgo DESTDIR=$pkgdir install-exec-am
  make -C gcc DESTDIR=$pkgdir go.install-{common,man,info}
  install -Dm755 gcc/go1 $pkgdir/${_libdir}/go1

  # Install Runtime Library Exception
  install -d ${pkgdir}/usr/share/licenses/gcc-go-multilib/
  ln -s ../gcc-libs-multilib/RUNTIME.LIBRARY.EXCEPTION ${pkgdir}/usr/share/licenses/gcc-go-multilib/
}
