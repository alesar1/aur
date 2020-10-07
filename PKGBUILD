# Maintainer: Rhinoceros <https://aur.archlinux.org/account/rhinoceros>
# Contributor: ValdikSS <iam@valdikss.org.ru>
# Contributor: Rein Fernhout <public@reinfernhout.xyz>

pkgname=imgur-screenshot
pkgver=2.0.0
pkgrel=1
pkgdesc='Take screenshot selection, upload to imgur + more cool things'
arch=('any')
url='https://github.com/jomo/imgur-screenshot'
license=('MIT')
depends=('curl' 'jq' 'libnotify' 'scrot' 'xclip')
optdepends=('scrot: (or other screenshot tool) for making screenshots'
            'xclip: needed for copy_url')
conflicts=('imgur-screenshot-git')
source=("https://github.com/jomo/imgur-screenshot/archive/v${pkgver}.tar.gz"
        'imgur-screenshot.desktop'
        'imgur-screenshot.png')
sha256sums=('1581b3d71e9d6c022362c461aa78ea123b60b519996ed068e25a4ccf5a3409f5'
            'ba1c175b17cece30d6f2bcd4b15d924ae64855bd350a42efa9ea146880135fa2'
            'b7f0eb70c642bb5cea60bf8a3b87125c53e64b0636fcfe9b9f591c6731a2b0c0')

package() {
  cd "${pkgname}-${pkgver}"

  install -Dm644 "$srcdir/imgur-screenshot.png" "$pkgdir/usr/share/pixmaps/imgur-screenshot.png"
  install -Dm644 "$srcdir/imgur-screenshot.desktop" "$pkgdir/usr/share/applications/imgur-screenshot.desktop"
  install -Dm755 imgur-screenshot "$pkgdir/usr/bin/imgur-screenshot"

  install -D -m644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
