# Maintainer: Aaron J Graves <linux@ajgraves.com>
pkgname=criptext-bin
pkgver=0.23.7
pkgrel=1
pkgdesc='Official Criptext encrypted email client'
arch=('x86_64')
url='https://criptext.com/'
license=('GPL2')
provides=("${pkgname}")
conflicts=("${pkgname}")
depends=('electron')
options=(!strip)
_destimage="Criptext-latest.AppImage"
_srcimage="Criptext-${pkgver}.AppImage"
source=("https://cdn.criptext.com/Criptext-Email-Desktop/linux/${_srcimage}"
	"criptext.desktop"
	"criptext"
	"LICENSE")
sha512sums=('5ccb07c1ac33d7c38a91471d307494e7bda8813091b7e7615c9a01edeacf17b8f9f160affb181b23ace2a5a16f500e192d8f8c9bca5b4ce03a019c596a2c2ea8'
	    '85d6c8c8247a27d7a7b98d55820563cba436cbc7390e09f39e3cfe0cab618b16fb102016adecedb31af0ae709a7f14edee5e5fd27843956df0a6602fe22cea17'
	    '8aa25bd12675cd376cd667a9c07397f62244d6f4bb6316979d7d91146f4556b4d840ccc366d9ccc6ff8ec149b8a9c0bd66c2b9d73fb97b5d84d47283d8293c36'
	    'aee80b1f9f7f4a8a00dcf6e6ce6c41988dcaedc4de19d9d04460cbfb05d99829ffe8f9d038468eabbfba4d65b38e8dbef5ecf5eb8a1b891d9839cda6c48ee957')

prepare() {
  chmod u+x ${srcdir}/${_srcimage}
  ${srcdir}/${_srcimage} --appimage-extract
}

package() {
  find ${srcdir}/squashfs-root/locales/ -type d -exec chmod 755 {} +
  find ${srcdir}/squashfs-root/resources/ -type d -exec chmod 755 {} +
  install -d ${pkgdir}/opt/${pkgname}
  cp -r ${srcdir}/squashfs-root/* ${pkgdir}/opt/${pkgname}
  rm -r ${pkgdir}/opt/${pkgname}/usr/

  find ${srcdir}/squashfs-root/usr/share/icons/ -type d -exec chmod 755 {} +
  install -d ${pkgdir}/usr/share/icons
  cp -r ${srcdir}/squashfs-root/usr/share/icons/hicolor ${pkgdir}/usr/share/icons/hicolor

  install -Dm644 ${srcdir}/criptext.desktop ${pkgdir}/usr/share/applications/criptext.desktop

  install -Dm755 ${srcdir}/criptext ${pkgdir}/usr/bin/criptext
  install -Dm444 ${srcdir}/LICENSE ${pkgdir}/usr/share/LICENSES/${pkgname}/LICENSE
}

