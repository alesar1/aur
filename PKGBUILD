# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=filtron-git
pkgver=0+r51+93f8b22
pkgrel=2
pkgdesc='Reverse HTTP filtering proxy (git)'
arch=(i686 x86_64)
url=https://github.com/asciimoo/filtron
license=(AGPL3)
provides=(filtron)
conflicts=(filtron)
depends=(glibc)
makedepends=(git go)
install=filtron.install
source=(git+$url
        filtron.service
        rules.json)
sha512sums=('SKIP'
            '0b7bbe55b3fd89d589e5662699f93d7aaf3c1d77d29be9cc568f8430e4a2491ba4920ca153f4d887a29da1f51670ec06346809cc5d1f373af540e252feccc799'
            '2668deb746ad361ebe32ea46b361f69c0eaf591b7faebb10dd2de11e114645c5fd726d45bb6aebec5b5bcef8dcad51d4b681a5e4b1ec83f918de4929aa237285')

pkgver() {
  cd filtron
  printf 0+r%s+%s $(git rev-list --count HEAD) $(git rev-parse --short HEAD)
}

build() {
  cd filtron
  GOPATH="$srcdir"/filtron go get -v -x github.com/asciimoo/filtron
}

package() {
  cd filtron

  install -D bin/filtron -t "$pkgdir"/usr/bin

  install -Dm 644 ../rules.json -t "$pkgdir"/etc/filtron
  install -Dm 644 ../filtron.service -t "$pkgdir"/usr/lib/systemd/system

  install -Dm 644 README.md -t "$pkgdir"/usr/share/doc/filtron
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/filtron
}
