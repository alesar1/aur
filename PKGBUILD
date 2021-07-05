# Maintainer: Antoine POPINEAU <antoine at popineau dot eu>

pkgname=greetd-tuigreet-git
pkgver=0.6.1.r94.686c57c
pkgrel=1

pkgdesc='A console UI greeter for greetd'
url='https://github.com/apognu/tuigreet'
license=(GPL3)
conflicts=(greetd-tuigreet greetd-tuigreet-bin)

arch=(x86_64)
makedepends=(git rust scdoc)

source=("git+${url}"
        'tuigreet.conf')
sha256sums=('SKIP'
            '8f83aee7874aab5d06981a1d1cd05df906368a79dbca90d157a33a2f023b67d3')

pkgver() {
  cd tuigreet
  printf "%s.r%s.%s" "$(git describe --tags --abbrev=0)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd tuigreet

  cargo build --release
  scdoc < contrib/man/tuigreet-1.scd > contrib/man/tuigreet-1.roff
}

package() {
  install -Dm755 "${srcdir}/tuigreet/target/release/tuigreet" "${pkgdir}/usr/bin/tuigreet"
  install -Dm755 "${srcdir}/tuigreet/contrib/man/tuigreet-1.roff" "${pkgdir}/usr/share/man/man1/tuigreet.1"
  install -Dm644 "${srcdir}/tuigreet/LICENSE" "${pkgdir}/usr/share/licenses/tuigreet/LICENSE"

  install -Dm644 "${srcdir}/tuigreet.conf" "${pkgdir}/usr/lib/tmpfiles.d/tuigreet.conf"
}
