# Maintainer: Naomi Calabretta <me@arytonex.pw>

pkgname=sunamu
pkgver=1.3.0
pkgrel=1
pkgdesc="Show your currently playing song in a stylish way!"
url="https://github.com/NyaomiDEV/Sunamu"
license=("MPL-2.0")
arch=("x86_64" "i686" "armv7h" "aarch64")
conflicts=(sunamu-git sunamu-bin)
makedepends=("git" "npm" "yarn" "node-gyp")
depends=("electron")

source=("$pkgname-$pkgver.tar.gz::https://github.com/NyaomiDEV/Sunamu/archive/v$pkgver.tar.gz"
        "${pkgname}.desktop"
        "${pkgname}.sh")
sha256sums=("9e1c77107327d2801cdb3b102769a3036e6291a112a1648e993cbfe1054e2325"
            "61e7326922b6f1a58d894488df27264ed307e1c1e8a0bb3aea61f0fcaa9c2bd4"
            "3ec100c03e6653aeed2400109501c3209295d58e74e4dbc71dadcfad86ef910c")

build() {
  cd "$srcdir/Sunamu-$pkgver"
  
  # use system electron version
  # see: https://wiki.archlinux.org/index.php/Electron_package_guidelines
  electronDist="/usr/lib/electron"
  electronVer=$(pacman -Q $(pacman -Qqo $electronDist) | cut -d " " -f2 | cut -d "-" -f1)
  yarn install
  yarn build:dir -c.electronDist=$electronDist -c.electronVersion=$electronVer
}

package() {
  cd "$srcdir/Sunamu-$pkgver"
  install -dm755 "${pkgdir}/usr/lib/$pkgname"
  dir=$(compgen -G "targets/linux*unpacked" | head -n1)
  cp -dr --no-preserve=ownership $dir/resources/* "${pkgdir}/usr/lib/$pkgname/"

  install -Dm644 assets/icons/icon.svg "$pkgdir/usr/share/pixmaps/$pkgname.svg"

  install -dm755 "${pkgdir}/usr/bin"
  install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"

  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
