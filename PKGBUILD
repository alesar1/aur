# Maintainer: sukanka <su975853527 at gmail.com>
pkgname=tradingview-bin
_pkgname=tradingview
pkgver=1.0.3
_snapver=15
pkgrel=1
pkgdesc="Track all markets"
arch=('x86_64')
url="https://www.tradingview.com/desktop/"
license=('unknown')
depends=('electron')
provides=(${_pkgname})
makedepends=('squashfs-tools')
source=("${_pkgname}-${pkgver}.snap::https://api.snapcraft.io/api/v1/snaps/download/nJdITJ6ZJxdvfu8Ch7n5kH5P99ClzBYV_${_snapver}.snap"
${_pkgname}.sh
)
sha512sums=('2aaeb51d49b1a73b835a183c63a012dfda5df0d0d2341e1151934df656c902fe687af6786d33ac17313bccb18fc1278a50b038d25c99aa32c5b838365b98563f'
            '51b1b734dce954fe1200b37d3fe8f36c963977df7d82475468f57f744cc453963fafc7b662b3b761b39cc60c35a54c5894053555bcc721d2e9e065769abba397')


## run these to get the source URL and the version, require jq

# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/tradingview | jq '.download_url' -r

# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/tradingview | jq '.version' -r

prepare() {
  cd $srcdir
  unsquashfs -f "${_pkgname}-${pkgver}.snap" resources/app.asar \
                                                         /meta/gui/${_pkgname}.desktop \
                                                         /meta/gui/icon.png
  sed "s|\${SNAP}/meta/gui/icon.png|${_pkgname}|g" -i squashfs-root/meta/gui/${_pkgname}.desktop
}

package() {
  cd $srcdir/squashfs-root
  install -Dm0644 meta/gui/${_pkgname}.desktop	$pkgdir/usr/share/applications/${_pkgname}.desktop
  install -Dm0644 meta/gui/icon.png				$pkgdir/usr/share/icons/hicolor/512x512/apps/${_pkgname}.png
  install -Dm0755 resources/app.asar			$pkgdir/usr/lib/${_pkgname}/${_pkgname}.asar
  install -Dm755 $srcdir/${_pkgname}.sh         $pkgdir/usr/bin/${_pkgname}
}
