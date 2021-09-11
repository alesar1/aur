# Maintainer: PolpOnline <aur at t0mmy dot anonaddy dot com>
# Contributor:  Eric Biggers <ebiggers3 at gmail dot com>

pkgname=abyss
pkgver=2.3.1
pkgrel=2
pkgdesc="Assembly By Short Sequences - a de novo, parallel, paired-end sequence assembler"
arch=("i686" "x86_64")
url="https://github.com/bcgsc/abyss"
license=("GPL3")
depends=("make" "openmpi" "sqlite")
makedepends=("boost" "sparsehash")
optdepends=(
  'pigz: for parallel gzip'
  'samtools: to read BAM files'
  'zsh: to report time and memory usage'
)
source=("$pkgname-$pkgver.tar.gz::https://github.com/bcgsc/abyss/archive/$pkgver.tar.gz")
sha512sums=('c7fb8b0a1a1346d138a0a64d2a2886b7c081ed628011b614e8ff14d1cbf4a992a8acb1cc668640c0c6a9c22802e4b0cb839f136b8e1f12fe76dae3248cec1777')

build() {
  cd "${pkgname}-${pkgver}"

  ./autogen.sh
  LDFLAGS="${LDFLAGS:-} -L/usr/lib/openmpi" \
	  ./configure --prefix=/usr --disable-werror
  make 
}

check() {
  cd "${pkgname}-${pkgver}"

  make check
}

package() {
  cd "${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


