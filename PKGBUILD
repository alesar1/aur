# Maintainer: Étienne Deparis <etienne@depar.is>
pkgname=cliqz-bin
_vendorname=cliqz
pkgver=1.14.1
_cqzbuildid=20170706154045
_mozver=54.0.1
pkgrel=1
pkgdesc="Firefox-based privacy aware web browser, build from debian package"
arch=('x86_64')
url="https://cliqz.com/"
license=('MPL2')
provides=('cliqz')
conflicts=('cliqz')
depends=('alsa-lib' 'dbus-glib' 'ffmpeg' 'gtk2' 'gtk3' 'hunspell'
         'icu' 'libevent' 'libvpx' 'libxt' 'mime-types'
         'mozilla-common' 'nss' 'sqlite' 'startup-notification'
         'ttf-font')
source=("http://repository.cliqz.com.s3.amazonaws.com/dist/release/${pkgver}/${_cqzbuildid}/${_vendorname}-${pkgver}-release.${_cqzbuildid}.x86_64.deb"
        "LICENSE")
sha256sums=('e8e68cfd11575dd2f63a10d16c8edfc61d263c1ca9a605b15292d7f5efc57054'
            '684cef8a799f7f9a3dbffaaad9398b5cd7fd89b2c162cef0d02195bbf18fbe36')

prepare() {
  cd $srcdir
  tar xJf data.tar.xz
}

package() {
  cd $srcdir

  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${_vendorname}/LICENSE

  install -D -m644 usr/local/share/applications/${_vendorname}.desktop \
		  ${pkgdir}/usr/share/applications/${_vendorname}.desktop

  for size in 16x16 22x22 24x24 32x32 48x48 256x256; do
	install -D -m644 usr/local/share/icons/hicolor/${size}/apps/${_vendorname}.png \
			${pkgdir}/usr/share/icons/hicolor/${size}/apps/${_vendorname}.png
  done

  install -d -m755 ${pkgdir}/usr/lib
  cp -R usr/local/lib/${_vendorname}-${_mozver} ${pkgdir}/usr/lib/${_vendorname}

  install -d -m755 ${pkgdir}/usr/bin
  ln -s /usr/lib/${_vendorname}/${_vendorname} ${pkgdir}/usr/bin/${_vendorname}
}
