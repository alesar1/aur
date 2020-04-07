# Maintainer: Alesh Slovak <aleshslovak@gmail.com>

pkgname=steam-buddy
pkgver=0.4.6
pkgrel=1
pkgdesc="A web interface for managing Steam remotely"
arch=('any')
url="https://github.com/gamer-os/steam-buddy"
license=('MIT')
depends=('python' 'python-bottle' 'python-pyftpdlib' 'python-yaml' 'python-requests' 'python-beaker' 'python-pygame' 'python-bcrypt' 'python-psutil' 'steam-tweaks' 'retroarch' 'libretro-genesis-plus-gx' 'libretro-mgba' 'libretro-nestopia' 'libretro-snes9x' 'libretro-mupen64plus-next' 'libretro-beetle-pce-fast-git' 'libretro-stella2014-git' 'libretro-flycast' 'libretro-beetle-psx-hw' 'libretro-play' 'libretro-yabause' 'retroarch-autoconfig-udev-git' 'flatpak' 'xdotool' 'ponymix')
source=("https://github.com/gamer-os/steam-buddy/archive/$pkgver.tar.gz")
md5sums=('258ce4b3854b27a81774c64b1ffaf3f8')

build() {
        cd "$srcdir/$pkgname-$pkgver"
        python setup.py build
}
package() {
        cd "$srcdir/$pkgname-$pkgver"
        python setup.py install --root="$pkgdir" --prefix=/usr --skip-build
        mkdir -p "$pkgdir/etc/systemd/system"
        install -m 644 "steam-buddy@.service" "$pkgdir/etc/systemd/system/steam-buddy@.service"
        install -m 644 "steam-buddy-proxy@.service" "$pkgdir/etc/systemd/system/steam-buddy-proxy@.service"
        install -m 644 "steam-buddy-proxy@.socket" "$pkgdir/etc/systemd/system/steam-buddy-proxy@.socket"
}
