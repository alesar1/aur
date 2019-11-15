# Maintainer: pfm <vorticity at mail dot ru>

pkgname=xiaomi-adb-fastboot-tools
_pkgname=XiaomiADBFastbootTools
pkgver=6.8
pkgrel=1
pkgdesc="Simple tool for managing Xiaomi devices on desktop using ADB and Fastboot"
arch=(any) 
url="https://szaki.github.io/XiaomiADBFastbootTools/"  
license=('MIT')
depends=('java-runtime' 'android-tools')
makedepends=('gradle' 'gendesk')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Szaki/$_pkgname/archive/$pkgver.tar.gz"
        "$pkgname.sh")
sha256sums=('1bc37208728f37451ecf7b4889053377fd5b1da0a2feb131eb98688e6fdf5fe8'
            'f170e8d5fce6990423bf914ac0a846a01c67885bc0fd13aaf888dc4be4a541e0')

prepare() {
  gendesk -f -n --pkgname=$pkgname --pkgdesc="$pkgdesc" --categories='Application;Utility'
}

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  gradle build
}

package() {
  install -Dm755 $pkgname.sh "$pkgdir/usr/bin/$pkgname"
  install -Dm755 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"

  cd "$srcdir/$_pkgname-$pkgver"
  install -Dm644 "build/libs/$_pkgname.jar" "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "build/resources/main/icon.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
}
