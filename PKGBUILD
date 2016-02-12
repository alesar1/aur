# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: speps <speps at aur dot archlinux dot org>

pkgname=zynaddsubfx-git
pkgver=2.5.3.r4.ge52dd05
pkgrel=1
pkgdesc="A powerful realtime, multi-timbral software synthesizer."
arch=('i686' 'x86_64')
url="http://zynaddsubfx.sourceforge.net"
license=('GPL')
depends=('fftw' 'fltk' 'lash' 'liblo' 'portaudio' 'mxml' 'ntk-git')
makedepends=('git' 'cmake' 'dssi' 'gendesk' 'setconf')
optdepends=('dssi: dssi plugin')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
options=('!emptydirs')
install="${pkgname}.install"
source=("${pkgname}::git://git.code.sf.net/p/zynaddsubfx/code/"
        "http://zynaddsubfx.sourceforge.net/doc/instruments/unsortedzynaddsubfxParameters_20140402.zip")
noextract=("${source[1]##*/}")
sha512sums=('SKIP'
            '13e7ed9746d0ce7959afa067211175cd007fdeb77500756dd5b0a57e6230e425934a7fe267a5197b539c3305c497745beb2fef2f5e79e4c8662a9c57cf2345f0')
_branch=master

pkgver() {
  cd "${srcdir}/${pkgname}"
  git checkout ${_branch} --quiet
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}
prepare() {
  [ -d build ] || mkdir build
  cd "${srcdir}/${pkgname}"
  git checkout ${_branch}

  # Pull rtosc and instruments
  git submodule update --init

  # Does not build with --as-needed
  LDFLAGS=${LDFLAGS//,--as-needed}

  # Prevent use of /usr/lib64
  sed -i 's:lib64:lib:' src/CMakeLists.txt
}

build() {
  cd "${srcdir}"
  [ -f zynaddsubfx.desktop ] && rm zynaddsubfx.desktop
  gendesk $startdir/PKGBUILD
  # Match camel case of included .desktop files
  setconf "${pkgname%-*}.desktop" Name "ZynAddSubFX"


  cd "${srcdir}/build"
  cmake ../"${pkgname}" -DCMAKE_INSTALL_PREFIX=/usr \
           -DCMAKE_INSTALL_LIBDIR=/usr/lib \
           -DGuiModule=ntk
  make

  # External programs
  cd "../${pkgname}/ExternalPrograms/Spliter" && make
  cd "../Controller" && make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install

  # External programs and documentation.
  install -Dm755 "../${pkgname}/ExternalPrograms/Spliter/spliter" \
                 "${pkgdir}/usr/bin/spliter"
  install -Dm644 "../${pkgname}/ExternalPrograms/Spliter/readme.txt" \
                 "${pkgdir}/usr/share/doc/zynaddsubfx/SPLITER.txt"
  install -Dm755 "../${pkgname}/ExternalPrograms/Controller/controller" \
                 "${pkgdir}/usr/bin/controller"

  # Additional parameters
  install -d "${pkgdir}/usr/share/zynaddsubfx/parameters"
  bsdtar --strip-components 1 --uid 0 --gid 0 -zxf \
                 ${srcdir}/${source[1]##*/} -C \
                 "${pkgdir}/usr/share/zynaddsubfx/parameters"
                 
  # Desktop file sans predefied I/O
  install -Dm644 "${srcdir}/${pkgname%-*}.desktop" "${pkgdir}/usr/share/applications/${pkgname%-*}.desktop"
}
