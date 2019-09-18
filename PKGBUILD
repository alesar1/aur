# Maintainer: Chris Snell <chris.snell@gmail.com>
# Contributor: Timo Wilken <timo 21 wilken plus aur at gmail dot com>

pkgname=(ttf-inter-ui otf-inter-ui)
pkgver=3.10
pkgrel=1
pkgdesc="A font for highly legible text on computer screens"
url="https://rsms.me/inter/"
arch=(any)
license=(custom:"SIL Open Font License")
conflicts=('ttf-interface')

source=("Inter-${pkgver}.zip::https://github.com/rsms/inter/releases/download/v${pkgver}/Inter-${pkgver}.zip")
sha256sums=('53c4a2fce40bf79ee08d279c1993e9d918425a74f2ed9455350127e6047d7754')

package_ttf-inter-ui() {
    install -d "$pkgdir/usr/share/fonts/${pkgname%-fonts}"
    install -t "$pkgdir/usr/share/fonts/${pkgname%-fonts}" -m644 "Inter (TTF hinted)/"*.ttf
    install -d "$pkgdir/usr/share/licenses/$pkgname"
    install -t "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE.txt
}

package_otf-inter-ui() {
  install -d "$pkgdir/usr/share/fonts/${pkgname%-fonts}"
  install -t "$pkgdir/usr/share/fonts/${pkgname%-fonts}" -m644 "Inter (OTF)/"*.otf
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  install -t "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE.txt
}

# vim:set ts=2 sw=2 et:
