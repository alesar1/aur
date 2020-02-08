# Author: Torkus
# Maintainer: Torkus <48141663+ogri-la@users.noreply.github.com>
pkgname=wowman
pkgver=0.12.2
pkgrel=1
pkgdesc="World of Warcraft addon manager. F/OSS, ad-free and privacy respecting."
arch=("x86_64")
url="https://github.com/ogri-la/wowman"
license=("AGPL")
depends=("java-runtime")
provides=("$pkgname")
conflicts=("$pkgname")
# e.g.: "https://github.com/ogri-la/wowman/releases/download/0.9.2/wowman-0.9.2-standalone.jar"
source=("https://github.com/ogri-la/wowman/releases/download/$pkgver/$pkgname-$pkgver-standalone.jar")
noextract=("$pkgname-$pkgver-standalone.jar")
sha256sums=("df55a0fed3c3e49532fbaf08ba36236134f864a0b8cf8841127472606d46649f")

# following: https://wiki.archlinux.org/index.php/Java_package_guidelines
package() {
    mkdir -p "$pkgdir/usr/share/java/$pkgname"
    mkdir -p "$pkgdir/usr/bin"

    cp "$pkgname-$pkgver-standalone.jar" "$pkgdir/usr/share/java/$pkgname/"

    # a simple executable wrapper around the jar file
    outpath="$pkgdir/usr/bin/$pkgname"
    printf "#!/bin/sh\nexec /usr/bin/java -jar \"/usr/share/java/$pkgname/$pkgname-$pkgver-standalone.jar\" \"\$@\"" > "$outpath"
    chmod +x "$outpath"
}
