# Maintainer: Alan Jenkins <alan.james.jenkins@gmail.com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Marcel Unbehaun <f.rostze.ux at gmail dot com>
pkgname=steamtinkerlaunch
pkgver=1.3.7
pkgrel=1
pkgdesc="Wrapper script for Steam custom launch options"
arch=('any')
url="https://github.com/frostworx/steamtinkerlaunch"
license=('GPL3')
depends=('bash')
optdepends=(
    'strace: write a strace log of the launched game'
    'gamemode: for using GameMode per game'
    'mangohud: for using MangoHUD per game'
    'vkbasalt: for using vkBasalt per game'
    'winetricks: winetricks support'
    'wget: for optional reshade download'
    'unzip: for optional reshade download'
    'git: for pulling optional shaders'
    'xdotool: for playing regular games side-by-side in VR'
    'xorg-xwininfo: for playing regular games side-by-side in VR'
    'vr-video-player: for playing regular games side-by-side in VR'
    'nyrna: for using Nyrna per game'
    'replay-sorcery: for using Replay-Sorcery per game'
    'wmctrl: for optional minimize/maximize of all open windows on game start/stop'
    'net-tools: for optional network monitoring'
    'boxtron: for optional Boxtron support'
    'scummvm: for optional ScummVM support via Roberta'
    'wine: for optional Vortex Mod Manager support'
)

source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('d4caf6ed30d671fb036ae067aab48e9ffd94ed3cec3e53cd72365465eaee006c')

package() {
    cd "$srcdir/$pkgname-${pkgver}"
    install -Dm755 stl -t "$pkgdir/usr/bin"

    install -d "$pkgdir/usr/share/stl"
    cp -r categories regs sbs tweaks "$pkgdir/usr/share/stl"

    install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
