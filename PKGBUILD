# Maintainer: Figue <ffigue at gmail>
# Contributor: Figue <ffigue at gmail>
# Contributor (Parabola): fauno <fauno@kiwwwi.com.ar>
# Thank you very much to the older contributors:
# Contributor: evr <evanroman at gmail>
# Contributor: Muhammad 'MJ' Jassim <UnbreakableMJ@gmail.com> 

pkgname=icecat
pkgver=38.3.0
_pkgver=38.3.0-gnu1
_pkgverbase=${pkgver%%.*}
pkgrel=1
pkgdesc="GNU version of the Firefox browser."
arch=(i686 x86_64)
url="http://www.gnu.org/software/gnuzilla/"
license=('GPL' 'MPL' 'LGPL')
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite' 'pango' 'freetype2' 'libxft' 'libx11')

makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake'
             'libpulse' 'gst-plugins-base-libs' 'inetutils')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'gst-plugins-good: h.264 video'
            'gst-libav: h.264 video'
            'upower: Battery API')

install=icecat.install
source=(https://ftp.gnu.org/gnu/gnuzilla/${pkgver}/${pkgname}-${_pkgver}.tar.bz2{,.sig}
#source=(https://mirrors.kernel.org/gnu/gnuzilla/${pkgver}/${pkgname}-${_pkgver}.tar.bz2      ## Good mirror
#source=(http://jenkins.trisquel.info/icecat/${pkgname}-${_pkgver}.tar.bz2      ## Official developer (Ruben Rodriguez) site
		mozconfig
        icecat.desktop
        icecat-safe.desktop
        vendor.js
        freetype26.patch
		0001-Bug-1194520-Add-a-system-header-wrapper-for-freetype.patch)

sha256sums=('08fe9724a84aef2182265b230c68fa37a36a5d93ffd5118ec0739718dc71a66e'
            'SKIP'
            '4602066304f0bb10bdaea75405570d500dae3199b77b04a45167d423fdf9bf6f'
            'c44eab35f71dd3028a74632463710d674b2e8a0682e5e887535e3233a3b7bbb3'
            '190577ad917bccfc89a9bcafbc331521f551b6f54e190bb6216eada48dcb1303'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4'
            'b9c440406644fde5097da8717f0b5e5e973d11ec4dd6d4a0570ca7094d96dc85'
            '5371c4e73ef9620c2cf3e922cbf7e6ebecfe5b0d80df03ba0744ad61de7c1a25')

validpgpkeys=(A57369A8BABC2542B5A0368C3C76EED7D7E04784) # Ruben Rodriguez (GNU IceCat releases key) <ruben@gnu.org>

prepare() {

  cd "${srcdir}/${pkgname}-${pkgver}"

  # Patch to move files directly to /usr/lib/icecat. No more symlinks.
  sed -e 's;$(libdir)/$(MOZ_APP_NAME)-$(MOZ_APP_VERSION);$(libdir)/$(MOZ_APP_NAME);g' -i config/baseconfig.mk
  sed -e 's;$(libdir)/$(MOZ_APP_NAME)-devel-$(MOZ_APP_VERSION);$(libdir)/$(MOZ_APP_NAME)-devel;g' -i config/baseconfig.mk

  # https://bugzilla.mozilla.org/show_bug.cgi?id=1143411
  # https://bugzilla.mozilla.org/show_bug.cgi?id=1194520
  patch -Np1 -i ../freetype26.patch
  patch -Np1 -i ../0001-Bug-1194520-Add-a-system-header-wrapper-for-freetype.patch

  msg2 "Starting build..."

  cp -v ${srcdir}/mozconfig .mozconfig

  # WebRTC build tries to execute "python" and expects Python 2
  mkdir "$srcdir/path"
  ln -s /usr/bin/python2 "$srcdir/path/python"

}

build() {

  cd "${srcdir}/${pkgname}-${pkgver}"
  ICECATDIR="/usr/lib/${pkgname}" && export ICECATDIR

  # Workaround to build 31.0. Fails otherwise.
  unset CPPFLAGS

  # Default Arch flags
  if [ "${CARCH}" = 'x86_64' ]; then
    export CFLAGS="-march=x86-64 -mtune=generic -O2 -pipe -fstack-protector-strong --param=ssp-buffer-size=4"
    export CXXFLAGS="$CFLAGS"
  elif [ "${CARCH}" = 'i686' ]; then
    export CFLAGS="-march=i686 -mtune=generic -O2 -pipe -fstack-protector-strong --param=ssp-buffer-size=4"
    export CXXFLAGS="$CFLAGS"
  fi

  export PATH="$srcdir/path:$PATH"
  export LDFLAGS="$LDFLAGS -Wl,-rpath,$ICECATDIR"
  export MOZ_MAKE_FLAGS="$MAKEFLAGS"
  export PYTHON=python2

  make -f client.mk build
#  ./configure --with-l10n-base="${srcdir}/${pkgname}-${pkgver}"/l10n -std=gnu89
#  make

}

package () {

  cd "${srcdir}/${pkgname}-${pkgver}"

  make -f client.mk DESTDIR="${pkgdir}" install
#  make DESTDIR="${pkgdir}" install

  msg2 "Finishing..."
  install -m755 -d ${pkgdir}/usr/share/applications
  install -m755 -d ${pkgdir}/usr/share/pixmaps

  for i in 16 32 48; do
      install -Dm644 ${srcdir}/${pkgname}-${pkgver}/browser/branding/official/default${i}.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/icecat.png"
  done
  install -Dm644 ${srcdir}/${pkgname}-${pkgver}/browser/branding/official/default48.png ${pkgdir}/usr/share/pixmaps/icecat.png
  install -Dm644 ${srcdir}/icecat.desktop ${pkgdir}/usr/share/applications/
  install -Dm644 ${srcdir}/icecat-safe.desktop ${pkgdir}/usr/share/applications/

  # implement vendor.js setting the locale to match the os don't disable our languages extensions
  # https://projects.archlinux.org/svntogit/packages.git/commit/trunk/PKGBUILD?h=packages/firefox&id=281a95c2cca0db88904603d7808936f52797a690
  install -Dm644 "${srcdir}"/vendor.js "${pkgdir}${ICECATDIR}/browser/defaults/preferences/vendor.js"

  # We don't want the development stuff
  rm -rv "$pkgdir"/usr/{include,lib/icecat-devel,share/idl}
}

