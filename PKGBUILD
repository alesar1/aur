# Maintainer: The-Repo-Club <The-Repo-Club@github.com>
# Contributor: The-Repo-Club <The-Repo-Club@github.com>
pkgname=instamenu
pkgver=2021.04.03
pkgrel=1
pkgdesc="dmenu like menu with the Dracula theme"
url="https://github.com/The-Repo-Club/$pkgname"
arch=('any')
groups=('therepoclub')
license=('CC BY-NC-SA 4.0')
depends=('sh' 'libxinerama' 'libxft' 'noto-fonts-emoji' 'ttf-joypixels' 'siji' 'cantarell-fonts' 'nerd-fonts-fira-code' 'instamenu-schemas')
optdepends=('instamenu-extra: Extra script that instamenu can use')
provides=($pkgname dmenu)
conflicts=(dmenu)
replaces=(dmenu)
source=("${pkgname}-$pkgver.tar.gz::${url}/archive/$pkgver.tar.gz")
sha256sums=('2b922f2ea79be447b696bb2cdfc74121a11c8b0b351f3e9aea40464ba341f7e5')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make \
    X11INC=/usr/include/X11 \
    X11LIB=/usr/lib/X11
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
