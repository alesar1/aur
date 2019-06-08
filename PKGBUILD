# Maintainer: Abdelhakim Qbaich <abdelhakim@qbaich.com>

pkgname=rars
pkgver=1.2
pkgrel=1
pkgdesc="RISC-V Assembler and Runtime Simulator"
arch=('any')
url="https://github.com/TheThirdOne/$pkgname"
license=('MIT')
depends=('java-runtime')
source=("https://github.com/TheThirdOne/$pkgname/releases/download/v$pkgver/$pkgname.jar"
        "https://raw.githubusercontent.com/TheThirdOne/$pkgname/v$pkgver/License.txt"
        "$pkgname.sh")
noextract=("$pkgname.jar")
sha256sums=('62b75c0561e093b1e4268ea121a820870b4cf7dc1c3f24243bd08286ec1e0985'
            'ee3e447d4d5b1f3ed6bc8a71939d06637338fb247777b3e3b60b6202d0712652'
            'ab5b088335e5f189eaffa3399e764d85ad5069bb266a68a5640d2732504c5b56')

package() {
	install -Dm644 "$pkgname.jar" "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
	install -Dm644 License.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
}
