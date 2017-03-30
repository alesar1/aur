# Maintainer: Daichi Shinozaki <dsdseg@gmail.com>
pkgname=red
pkgver=0.6.2
pkgrel=1
pkgdesc="An open source, native code compiled, dialect of Rebol"
arch=('i686' 'x86_64')
url="http://www.red-lang.org"
license=('custom:3-clause BSD' 'custom:BSL')
groups=('devel')
depends=('lib32-curl')
makedepends=('wget' 'rebol=2.7.8')
checkdepends=('bash')
conflicts=('ed')
source=("https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('e448318e5754d7e591c7a687c250d4e41cb8ab63836ef7aa706fc05866f1bbf5')

build() {
  cd "$srcdir/${pkgname}-${pkgver}"
  rebol -qw red.r tests/hello.red
  msg2 "Compiling the Red console..."
  rebol -qw red.r -r environment/console/console.red
  msg2 "Generating docs..."
  cd docs
  rebol -qw makedoc2.r red-system-specs.txt
  rebol -qw makedoc2.r red-system-quick-test.txt
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  rebol -qws run-all.r --batch
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -d "$pkgdir"/opt/red
  find ./quick-test/runnable -type f -executable -print0 | xargs -0 rm
  cp -R * "$pkgdir"/opt/red/
  install -Dm755 "$pkgdir"/opt/red/console "$pkgdir"/usr/bin/red
  rm "$pkgdir"/opt/red/console
  install -Dm644 BSD-3-License.txt "$pkgdir"/usr/share/licenses/$pkgname/BSD-3-License.txt
  install -Dm644 BSL-License.txt "$pkgdir"/usr/share/licenses/$pkgname/BSL-License.txt
  install -Dm644 docs/red-system-quick-test.html "$pkgdir"/usr/share/doc/$pkgname/red-system-quick-test.html
  install -Dm644 docs/red-system-specs.html "$pkgdir"/usr/share/doc/$pkgname/red-system-specs.html
  rm "$pkgdir"/opt/$pkgname/docs/red-system-{quick-test,specs}.html
}

# vim:set ts=2 sw=2 et:
