## Maintainer dr460nf1r3 dr460nf1r3@garudalinux.org
pkgname=librewolf-extension-bitwarden
pkgver=1.49.1
pkgrel=1
pkgdesc='Bitwarden addon for Librewolf'
arch=('any')
url='https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/'
license=('GPLV3')
depends=('librewolf')
groups=('librewolf-addons')
source=("extension.xpi::https://addons.mozilla.org/firefox/downloads/file/3643785/bitwarden_free_password_manager-${pkgver}-an+fx.xpi")
sha512sums=('8759626d0b1e5647e58024d9ca74253cdcc6cb45f998a9a71406c562045c8279b1a84574042a22ec564be211b167cef66e1d78148164f897bd7aadb02b4d73be')

package() {
  install -Dm644 extension.xpi "${pkgdir}/usr/lib/librewolf/browser/extensions/{446900e4-71c2-419f-a6a7-df9c091e268b}.xpi"
}

