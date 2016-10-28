# Maintainer: Konstantin Gizdov <arch@kge.pw>
# Contributor: Frank Siegert <frank.siegert@googlemail.com>
# Contributor: Scott Lawrence <bytbox@gmail.com>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Sebastian Voecking <voeck@web.de>

pkgname=root-extra
_pkgname=root
pkgver=6.06.08
pkgrel=2
provides=('root')
conflicts=('root')
pkgdesc='C++ data analysis framework and interpreter from CERN with extra features enabled.'
arch=('i686' 'x86_64')
url='http://root.cern.ch'
license=('LGPL2.1')
makedepends=('cmake')
depends=('cfitsio'
'fftw'
'ftgl'
'glew'
'graphviz'
'gsl'
'hicolor-icon-theme'
'intel-tbb'
'libafterimage'
'libiodbc'
'libmysqlclient'
'postgresql-libs'
'pythia'
'python'
'sqlite'
'tex-gyre-fonts'  # solve the pixelized font problem as per Arch Wiki
'unixodbc'
'xmlrpc-c'
'xrootd-abi0'
)
optdepends=('gcc-fortran: Enable the Fortran components of ROOT'
            'tcsh: Legacy CSH support'
)
options=('!emptydirs')
source=("https://root.cern.ch/download/root_v${pkgver}.source.tar.gz"
'call_PyErr_Clear_if_no_such_attribute.patch'
'disable-gcc-abi-check.diff'
'python3.diff'
'root.sh'
'root.xml'
'rootd'
'settings.cmake')
sha256sums=('7cb836282014cce822ef589cad27811eb7a86d7fad45a871fa6b0e6319ec201a'
            '437ed0fb2c46d5ca8e37cc689f87dfe12429f6a243d4e5cf2d395a177de7e90f'
            'd9fea8991d42a78cd694f9798615274e96a185cbbd6608b4b80c76d5e43982a6'
            '51dbcf86d9973e7b7204fc20ff0c3c3aacea01ee126e14e2fb3c9f33825cc558'
            '9d1f8e7ad923cb5450386edbbce085d258653c0160419cdd6ff154542cc32bd7'
            'b103d46705883590d9e07aafb890ec1150f63dc2ca5f40d67e6ebef49a6d0a32'
            '6a4ef7b32710d414ee47d16310b77b95e4cf1d3550209cf8a41d38a945d05e5f'
            'b0aaf22cc5f4865f4c603fd66d8299cd86ebb29d79ca7b4de3bdf99d2113a87a')
prepare(){
    ## https://sft.its.cern.ch/jira/browse/ROOT-6924
    cd ${_pkgname}-${pkgver}

    patch -p1 < ${srcdir}/python3.diff
    2to3 -w etc/dictpch/makepch.py 2>&1 > /dev/null

    ## https://sft.its.cern.ch/jira/browse/ROOT-7640
    patch -p1 < ${srcdir}/call_PyErr_Clear_if_no_such_attribute.patch

    ## disable check newly introduced in 6.06.06
    patch -p1 < ${srcdir}/disable-gcc-abi-check.diff
}

build() {
    [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
    cd ${srcdir}/build

    CFLAGS="${CFLAGS} -pthread" \
    CXXFLAGS="${CXXFLAGS} -pthread -D_GLIBCXX_USE_CXX11_ABI=0" \
    LDFLAGS="${LDFLAGS} -pthread -Wl,--no-undefined" \
    cmake -C ${srcdir}/settings.cmake ${srcdir}/${_pkgname}-${pkgver}

    make ${MAKEFLAGS}
}

package() {
    cd ${srcdir}/build

    make DESTDIR=${pkgdir} install

    install -D ${srcdir}/root.sh \
        ${pkgdir}/etc/profile.d/root.sh
    install -D ${srcdir}/rootd \
        ${pkgdir}/etc/rc.d/rootd
    install -D -m644 ${srcdir}/root.xml \
        ${pkgdir}/usr/share/mime/packages/root.xml

    install -D -m644 ${srcdir}/${_pkgname}-${pkgver}/build/package/debian/root-system-bin.desktop.in \
        ${pkgdir}/usr/share/applications/root-system-bin.desktop
    # replace @prefix@ with /usr for the desktop
    sed -e 's_@prefix@_/usr_' -i ${pkgdir}/usr/share/applications/root-system-bin.desktop

    install -D -m644 ${srcdir}/${_pkgname}-${pkgver}/build/package/debian/root-system-bin.png \
        ${pkgdir}/usr/share/icons/hicolor/48x48/apps/root-system-bin.png

    # use a file that pacman can track instead of adding directly to ld.so.conf
    install -d ${pkgdir}/etc/ld.so.conf.d
    echo '/usr/lib/root' > ${pkgdir}/etc/ld.so.conf.d/root.conf

    rm -rf ${pkgdir}/etc/root/daemons
}

