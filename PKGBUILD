# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=flashfry
pkgver=1.14
pkgrel=1
pkgdesc="The rapid CRISPR characterization tool"
arch=('any')
url="https://github.com/mckennalab/FlashFry"
license=('GPL3')
depends=('java-runtime' 'sh')
source=("https://github.com/mckennalab/FlashFry/releases/download/$pkgver/FlashFry-assembly-$pkgver.jar"
        "flashfry")
sha256sums=('4c1dde8156e850bee70479b413e60c4faf246ba1dc59ef68c8facb9289efbad5'
            'bbd75fa11183b127d42c8d910f6b56f7bbcdcb4089982f5e70824a1aed28da28')


package() {
  install -Dm755 "flashfry" -t "$pkgdir/usr/bin"
  install -Dm644 "FlashFry-assembly-$pkgver.jar" "$pkgdir/usr/share/java/flashfry/FlashFry-assembly.jar"
}
