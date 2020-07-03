# Maintainer: Leia <waste at mrtino dot eu>

pkgname=badwolf
pkgver=1.0.0
pkgrel=1
pkgdesc="A minimalist and privacy-oriented WebKit browser."
url="https://hacktivis.me/projects/badwolf"
arch=('i686' 'pentium4' 'x86_64' 'aarch64' 'arm' 'armv6h' 'armv7h')
license=('BSD')
#makedepends=('clang') # if you want to use clang instead of gcc, decomment this line and change CC=gcc to CC=clang in the build section
depends=('webkit2gtk')
source=("https://hacktivis.me/releases/$pkgname-$pkgver.tar.gz"
	"arch.patch"
	"LICENSE")
sha512sums=('72437709a32937c33dc0509f94efbb5f3551b039017d3067b02f5d2b275eb4f3883dba8dc1c1b4b82bfa31a7b174f5fa393ceeefaf627d9b6c27be0fea5a0652'
            '1b4ecfe1858378268dc10c60da2891ec83dd2af0df42c72eaf2eb94ec49ffd7243ac6258ade040e78b64082265f8a65515ee0ba38b1cad1c21f6287c048df008'
            '9a3b68429fc2267d596e08671330cc81f6d00ac7217a7a3991ebb583823a13e323108b514f5ec672c0982844ec581d9fed28dfede8fd92976b41d46b2924e140')
install=badwolf.install

prepare() {
  cd "$pkgname-${pkgver//_/-}"
  # In order to be compliant with Arch Linux directory guidelines
  patch -p1 -i "$srcdir/arch.patch"
}

build() {
  cd "$pkgname-$pkgver"
  make
}

package() {
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  # install -Dm644 badwolf.desktop "$pkgdir/usr/share/applications/badwolf.desktop"
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

