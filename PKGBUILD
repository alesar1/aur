# Maintainer: ninian <mcfadzean.org.uk ta linux>

pkgname=runa
pkgver=5.7.1
pkgrel=1
pkgdesc="Fast and light desktop application launcher"
arch=('any')
url="http://appstogo.mcfadzean.org.uk/linux.html#runa"
license=('custom:MPL2')
depends=('bash' 'dmenu' 'libnotify')
optdepends=('gxmessage: to view .desktop files' 'perl-file-mimeinfo: to better determine mimetypes')
source=("http://appstogo.mcfadzean.org.uk/dl/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('04010f10ae13753ed4887a775726c365')

package() {
  cd "$srcdir/${pkgname}-$pkgver"
  gzip ${pkgname}.1
  install -Dm755 ${pkgname}                  "$pkgdir/usr/bin/${pkgname}"
  install -Dm644 ${pkgname}.png              "$pkgdir/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 ${pkgname}.desktop          "$pkgdir/usr/share/applications/${pkgname}.desktop"
  install -Dm644 ${pkgname}-assoc.desktop    "$pkgdir/usr/share/applications/${pkgname}-assoc.desktop"
  install -Dm644 ${pkgname}-desktop.desktop  "$pkgdir/usr/share/applications/${pkgname}-desktop.desktop"
  install -Dm644 ${pkgname}.1.gz             "$pkgdir/usr/share/man/man1/${pkgname}.1.gz"
  install -Dm644 LICENSE                     "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 README                      "$pkgdir/usr/share/doc/${pkgname}/README"
  install -Dm644 CHANGELOG                   "$pkgdir/usr/share/doc/${pkgname}/CHANGELOG"
  install -Dm755 xdg-open                    "$pkgdir/usr/share/doc/${pkgname}/xdg-open"
  msg "Configuration and favourites files will be created the first time Runa is executed"
  msg "See 'man ${pkgname}' and /usr/share/doc/${pkgname}/README for more information"
#  msg "IMPORTANT: This version has changed the -M and -P commandline options"
#  msg "IMPORTANT:"
#  msg "This version changes the configuration file format; recreate and merge with old configuration as required"
#  msg "Refresh the applications cache using -C option after installing this version"
}
