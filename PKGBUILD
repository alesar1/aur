# Maintainer: piernov <piernov@piernov.org>
# Contributor: Dmitry Kharitonov <darksab0r at gmail com>
# Contributor: Marcin Kornat <rarvolt+aur@gmail.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>

pkgname=('boost-65-compat' 'boost-65-compat-libs')
_pkgname=boost
pkgver=1.65.1
_boostver=${pkgver//./_}
pkgrel=5
pkgdesc="Free peer-reviewed portable C++ source libraries - compat version"
arch=('x86_64')
url='https://www.boost.org/'
license=('custom')
makedepends=('python' 'python2' 'python-numpy' 'python2-numpy' )
source=(https://dl.bintray.com/boostorg/release/${pkgver}/source/${_pkgname}_${_boostver}.tar.bz2
    https://github.com/boostorg/python/commit/660487c43fde76f3e64f1cb2e644500da92fe582.patch)
#source=(https://downloads.sourceforge.net/project/${_pkgname}/${_pkgname}/${pkgver}/${_pkgname}_${_boostver}.tar.bz2)
sha256sums=('9807a5d16566c57fd74fb522764e0b134a8bbe6b6e8967b83afefd30dcd3be81'
            '42ea8872facb32bf20f9aa5c6c39bca5d3addb3d9080ccc01f10fbf26a139e5b')

prepare() {
    cd ${_pkgname}_${_boostver}/libs/python
    patch -p1 < "${srcdir}"/660487c43fde76f3e64f1cb2e644500da92fe582.patch
}

build() {
   export _stagedir="${srcdir}/stagedir"
   local JOBS="$(sed -e 's/.*\(-j *[0-9]\+\).*/\1/' <<< ${MAKEFLAGS})"

   cd ${_pkgname}_${_boostver}
   ./bootstrap.sh --with-toolset=gcc --with-icu --with-python=/usr/bin/python2

   _bindir="bin.linuxx86"
   [[ "${CARCH}" = "x86_64" ]] && _bindir="bin.linuxx86_64"
   install -Dm755 tools/build/src/engine/$_bindir/b2 "${_stagedir}"/bin/b2

   # Support for OpenMPI
   echo "using mpi ;" >> project-config.jam

   # boostbook is needed by quickbook
   install -dm755 "${_stagedir}"/share/boostbook
   cp -a tools/boostbook/{xsl,dtd} "${_stagedir}"/share/boostbook/

   # default "minimal" install: "release link=shared,static
   # runtime-link=shared threading=single,multi"
   # --layout=tagged will add the "-mt" suffix for multithreaded libraries
   # and installs includes in /usr/include/boost.
   # --layout=system no longer adds the -mt suffix for multi-threaded libs.
   # install to ${_stagedir} in preparation for split packaging
   "${_stagedir}"/bin/b2 \
      variant=release \
      debug-symbols=off \
      threading=multi \
      runtime-link=shared \
      link=shared,static \
      toolset=gcc \
      python=2.7 \
      cflags="${CPPFLAGS} ${CFLAGS} -fPIC -O3" \
      cxxflags="${CPPFLAGS} ${CXXFLAGS} -std=c++14 -fPIC -O3" \
      linkflags="${LDFLAGS}" \
      --layout=system \
      ${JOBS} \
      \
      --prefix="${_stagedir}" \
      install

   # because b2 in boost 1.62.0 doesn't seem to respect python parameter, we
   # need another run for liboost_python3.so

   ./bootstrap.sh --with-toolset=gcc --with-icu --with-python=/usr/bin/python3 \
      --with-libraries=python

   "${_stagedir}"/bin/b2 clean
   "${_stagedir}"/bin/b2 \
      variant=release \
      debug-symbols=off \
      threading=multi \
      runtime-link=shared \
      link=shared,static \
      toolset=gcc \
      python=3.9 \
      cflags="${CPPFLAGS} ${CFLAGS} -fPIC -O3" \
      cxxflags="${CPPFLAGS} ${CXXFLAGS} -std=c++14 -fPIC -O3" \
      linkflags="${LDFLAGS}" \
      --layout=system \
      ${JOBS} \
      \
      --prefix="${_stagedir}/python3" \
      --with-python \
      install
}

package_boost-65-compat() {
   pkgdesc+=' - development headers'
   depends=("boost-65-compat-libs=${pkgver}")
   optdepends=('python: for python bindings'
               'python2: for python2 bindings')
   conflicts=('boost' 'boost-libs')
   options=('staticlibs')

   install -dm755 "${pkgdir}"/usr
   cp -a "${_stagedir}"/{bin,include,share} "${pkgdir}"/usr

   install -d "${pkgdir}"/usr/lib
   cp -a "${_stagedir}"/lib/*.a "${pkgdir}"/usr/lib/
   cp -a "${_stagedir}"/lib/libboost_*.so "${pkgdir}"/usr/lib/

   install -Dm644 "${_stagedir}"/python3/lib/libboost_*.a \
      "${pkgdir}"/usr/lib/

   install -Dm644 "${srcdir}/"${_pkgname}_${_boostver}/LICENSE_1_0.txt \
      "${pkgdir}"/usr/share/licenses/boost-65-compat/LICENSE_1_0.txt

   ln -s /usr/bin/b2 "$pkgdir"/usr/bin/bjam
}

package_boost-65-compat-libs() {
   pkgdesc+=' - runtime libraries'
   depends=('bzip2' 'zlib' 'icu' 'zstd')
   optdepends=('openmpi: for mpi support')
   provides=(libboost_atomic.so.$pkgver libboost_chrono.so.$pkgver libboost_container.so.$pkgver
     libboost_context.so.$pkgver libboost_coroutine.so.$pkgver
     libboost_date_time.so.$pkgver libboost_fiber.so.$pkgver libboost_filesystem.so.$pkgver
     libboost_graph.so.$pkgver libboost_graph_parallel.so.$pkgver libboost_iostreams.so.$pkgver
     libboost_locale.so.$pkgver libboost_log.so.$pkgver libboost_log_setup.so.$pkgver
     libboost_math_c99.so.$pkgver libboost_math_c99f.so.$pkgver libboost_math_c99l.so.$pkgver
     libboost_math_tr1.so.$pkgver libboost_math_tr1f.so.$pkgver libboost_math_tr1l.so.$pkgver
     libboost_mpi.so.$pkgver libboost_mpi_python.so.$pkgver libboost_numpy.so.$pkgver libboost_numpy3.so.$pkgver
     libboost_prg_exec_monitor.so.$pkgver libboost_program_options.so.$pkgver
     libboost_python.so.$pkgver libboost_python3.so.$pkgver libboost_random.so.$pkgver
     libboost_regex.so.$pkgver libboost_serialization.so.$pkgver libboost_signals.so.$pkgver
     libboost_stacktrace_addr2line.so.$pkgver libboost_stacktrace_basic.so.$pkgver
     libboost_stacktrace_noop.so.$pkgver libboost_system.so libboost_thread.so.$pkgver
     libboost_timer.so.$pkgver libboost_type_erasure.so.$pkgver libboost_unit_test_framework.so.$pkgver
     libboost_wave.so.$pkgver libboost_wserialization.so.$pkgver)

   install -dm755 "${pkgdir}"/usr
   cp -a "${_stagedir}"/lib "${pkgdir}"/usr
   cp -a "${_stagedir}"/python3/lib/libboost_* "${pkgdir}"/usr/lib
   rm "${pkgdir}"/usr/lib/*.a
   rm "${pkgdir}"/usr/lib/*.so

   install -Dm644 "${srcdir}/"${_pkgname}_${_boostver}/LICENSE_1_0.txt \
      "${pkgdir}"/usr/share/licenses/boost-65-compat-libs/LICENSE_1_0.txt
}
