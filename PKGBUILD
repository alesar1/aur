# Maintainer: Matt Fields (0x6d617474) <aur at 0x6d617474 dot net>

pkgname=wp-cli-bin
pkgver=2.4.0
pkgrel=1
pkgdesc="A command-line tool for managing WordPress"
url="http://wp-cli.org/"
arch=('any')
license=('MIT')
depends=('php')
optdepends=()
makedepends=()
conflicts=('wp-cli' 'wp-cli-git')
provides=('wp-cli')
replaces=()
backup=()
source=(
  "https://github.com/wp-cli/wp-cli/releases/download/v${pkgver}/wp-cli-${pkgver}.phar"
  "https://raw.githubusercontent.com/wp-cli/wp-cli/v${pkgver}/LICENSE"
  "https://raw.githubusercontent.com/wp-cli/wp-cli/v${pkgver}/utils/wp-completion.bash"
)
md5sums=('dedd5a662b80cda66e9e25d44c23b25c'
         'e5c622f22129821039d4adce2cf01c0e'
         'f8acb424f1460428796451679631be86')

check() {
  echo -n "Binary reporting as "
  php ./wp-cli-${pkgver}.phar --version
}

package() {
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/wp-cli/LICENSE"
  install -Dm655 wp-cli-${pkgver}.phar "$pkgdir/usr/bin/wp"
  install -Dm644 wp-completion.bash "${pkgdir}/usr/share/bash-completion/completions/wp"
}
