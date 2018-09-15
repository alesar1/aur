# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

_pkgname="mitsuba"
_pkgver="0.6.0"
_pyver=$(python -c "from sys import version_info; print(\"%d.%d\" % (version_info[0],version_info[1]))")
pkgname="${_pkgname}-git"
pkgver=0.6.0.r2170.450a2b8a
pkgrel=1
pkgdesc="Mitsuba physically based renderer."
url="http://mitsuba-renderer.org/"
license=("GPL3")
arch=("i686" "x86_64")
depends=("python" "xerces-c" "glew-1.13.0" "openexr" "libpng" "libjpeg" "qt4" "fftw" "collada-dom-mitsuba" "boost-libs" "pcre")
makedepends=("eigen" "scons" "git" "boost")
provides=("mitsuba")
conflicts=("mitsuba" "mitsuba-hg")
source=("${_pkgname}::git+https://github.com/mitsuba-renderer/mitsuba.git"
        "python3.5.patch"
        )
sha256sums=('SKIP'
            '0591c38be9343db62d4f8294116f38cc836d170a5504cf2d70e472c48e290121')

pkgver() {
  cd ${_pkgname}
#  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
#  git describe --long --tags | sed        's/\([^-]*-g\)/r\1/;s/-/./g'
  printf "${_pkgver}.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


prepare() {
    cd "${_pkgname}"
    cp build/config-linux-gcc.py config.py

    ## use collada-dom-mitsuba
    sed -i -e "s:collada-dom:collada-dom-mitsuba:g" config.py
    ## use collada-dom instead of collada-dom-mitsube currrently not working (can't figure why)
    #sed -i -e "s:collada-dom:collada-dom2.4:g" -e "s:collada14dom:collada-dom2.4-dp:g" config.py

    ## update GLINCLUDE path to refere to glew-1.13.0 as mitsuba wont build with glew 2.0.0
    sed -i "/XERCESLIB/aGLINCLUDE      = ['/usr/include/glew-1.13.0']" config.py

    ## fix qt5-base on archlinux provides QtWidgets pkg-config as Qt5Widgets
    sed -i -E "s/('Qt)([a-zA-Z]+')/\15\2/g" src/mtsgui/SConscript data/scons/qt5.py
    ## fix:
    # "You must build your code with position independent code
    #  if Qt was built with -reduce-relocations.
    # "Compile your code with -fPIC (-fPIE is not enough)."
    sed -i "s/CXXFLAGS[ ]*= \[/&'-fPIC', /g" config.py

    git apply ${srcdir}/python3.5.patch
}

build() {
    cd "${_pkgname}"
    scons --jobs=$[${MAKEFLAGS/-j/} - 1]
    
}

package() {
    cd "${_pkgname}"
    	install -d \
		${pkgdir}/usr/bin \
		${pkgdir}/usr/lib \
		${pkgdir}/usr/share/mitsuba/plugins \
		${pkgdir}/usr/share/mitsuba/data/schema \
		${pkgdir}/usr/share/mitsuba/data/ior \
		${pkgdir}/usr/share/mitsuba/data/microfacet \
		${pkgdir}/usr/share/applications \
		${pkgdir}/usr/share/pixmaps \
		${pkgdir}/usr/include/mitsuba/{core,hw,render,bidir} \
		${pkgdir}/usr/lib/python2.7/lib-dynload \
		${pkgdir}/usr/lib/python${_pyver}/lib-dynload

	install -m755 dist/mitsuba dist/mtsgui dist/mtssrv dist/mtsutil ${pkgdir}/usr/bin
	install -m755 dist/libmitsuba-core.so \
		dist/libmitsuba-hw.so \
		dist/libmitsuba-render.so \
		dist/libmitsuba-bidir.so \
		${pkgdir}/usr/lib
	install -m755 dist/plugins/* ${pkgdir}/usr/share/mitsuba/plugins
	install -m644 dist/data/schema/* ${pkgdir}/usr/share/mitsuba/data/schema
	install -m644 dist/data/ior/* ${pkgdir}/usr/share/mitsuba/data/ior
	install -m644 dist/data/microfacet/* ${pkgdir}/usr/share/mitsuba/data/microfacet
	install -m644 dist/python/2.7/mitsuba.so ${pkgdir}/usr/lib/python2.7/lib-dynload
        install -m644 dist/python/${_pyver}/mitsuba.so ${pkgdir}/usr/lib/python${_pyver}/lib-dynload
	install -m644 data/linux/mitsuba.desktop ${pkgdir}/usr/share/applications
	install -m644 src/mtsgui/resources/mitsuba48.png ${pkgdir}/usr/share/pixmaps
	install -m644 include/mitsuba/*.h ${pkgdir}/usr/include/mitsuba
	install -m644 include/mitsuba/core/* ${pkgdir}/usr/include/mitsuba/core
	install -m644 include/mitsuba/render/* ${pkgdir}/usr/include/mitsuba/render
	install -m644 include/mitsuba/hw/* ${pkgdir}/usr/include/mitsuba/hw
	install -m644 include/mitsuba/bidir/* ${pkgdir}/usr/include/mitsuba/bidir
}
# vim:set ts=2 sw=2 et:
