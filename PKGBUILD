# Maintainer: michaelchou <michaeljchou at the hotmail domain which is .com>
# Contributor: enihcam <nanericwang at the google email domain which is .com>

pkgname=chakracore
pkgver=1.11.10
pkgrel=1
pkgdesc='ChakraCore is the core part of the Chakra Javascript engine that powers Microsoft Edge'
arch=('x86_64')
url='https://github.com/Microsoft/ChakraCore'
license=('MIT')
depends=('icu')
makedepends=('cmake' 'clang' 'python2')
provides=('libChakraCore.so' 'ch')
conflicts=('chakracore-git' 'chakracore-bin')
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/Microsoft/ChakraCore/archive/v${pkgver}.tar.gz"
  "fix-assembly-for-clang.patch"
)
sha256sums=('a322958ead403ef164d4ae11f8eb672f45dda83dcd5eefaa459d8714304931d8'
            '623458eff6effd1d6497c69bf3338f25cc8396853f74ecdfbb92db982b232d99')

_dir="ChakraCore-${pkgver}"

build() {
  cd "$srcdir/$_dir"
  ./build.sh --jobs=$(nproc) --extra-defines=U_USING_ICU_NAMESPACE=1 -y
  ./build.sh --jobs=$(nproc) --extra-defines=U_USING_ICU_NAMESPACE=1 -y --static
}

package() {
  install -Dm755 "$srcdir/$_dir/out/Release/ch" "$pkgdir/usr/bin/ch"

  install -Dm644 "$srcdir/$_dir/out/Release/bin/ChakraCore/libChakraCore.so" "$pkgdir/usr/lib/libChakraCore.so"

  for file in $srcdir/$_dir/out/Release/include/*; do
    install -Dm644 "$file" "$pkgdir/usr/include/$(basename $file)"
  done

  install -Dm644 "$srcdir/$_dir/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
