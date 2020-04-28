# Maintainer: Matt Fields (0x6d617474) <aur at 0x6d617474 dot net>

pkgname=wp-cli
pkgver=2.4.0
pkgrel=2
pkgdesc="A command-line tool for managing WordPress"
url="http://wp-cli.org/"
arch=('any')
license=('MIT')
depends=('php')
optdepends=()
makedepends=('composer')
conflicts=()
replaces=()
backup=()
source=("https://github.com/wp-cli/wp-cli-bundle/archive/v${pkgver}.tar.gz")
md5sums=('ea149787cacc1b8f2e76730573d97874')

build() {
  cd "${pkgname}-bundle-${pkgver}"
  echo "Replacing mustache release to fix PHP 7.4 comatibility..."
  sed -i 's/fe8fe72e9d580591854de404cc59a1b83ca4d19e/e95c5a008c23d3151d59ea72484d4f72049ab7f4/g' composer.lock
  composer install --no-interaction --prefer-dist --no-scripts && composer dump
  echo -n "Building phar... "
  php -dphar.readonly=0 utils/make-phar.php wp-cli.phar --quiet
  echo "Done!"
}

check() {
  cd "${pkgname}-bundle-${pkgver}"
  composer phpunit

  echo -n "Binary reporting as "
  php ./wp-cli.phar --version
}

package() {
  cd "${pkgname}-bundle-${pkgver}"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm655 wp-cli.phar "$pkgdir/usr/bin/wp"
  install -Dm644 vendor/wp-cli/wp-cli/utils/wp-completion.bash "${pkgdir}/usr/share/bash-completion/completions/wp"
}
